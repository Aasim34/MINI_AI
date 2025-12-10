import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  // Set CORS headers for SSE
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Get parameters from query string
  const { idea, apiKey } = req.query;
  
  if (!idea || !apiKey) {
    res.status(400).json({ error: "Missing required fields: idea and apiKey are required" });
    return;
  }

  // Set headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // Disable buffering for nginx

  // Send initial message
  res.write(`data: ${JSON.stringify({ progress: 'Initializing generation process...' })}\n\n`);

  try {
    // Get the path to the api_runner script
    const apiRunnerPath = path.join(__dirname, '..', '..', '..', 'api_runner.py');
    
    // Spawn the Python process with the api_runner script
    const pythonProcess = spawn('python', [apiRunnerPath], {
      stdio: ['pipe', 'pipe', 'pipe']
    });
    
    // Send the idea and API key as JSON to the Python script
    const inputData = { idea, apiKey };
    pythonProcess.stdin.write(JSON.stringify(inputData));
    pythonProcess.stdin.end();
    
    // Send progress updates as they come in
    pythonProcess.stdout.on('data', (data) => {
      const output = data.toString();
      
      // Parse progress messages from the Python script
      const lines = output.split('\n');
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine) {
          // Send progress updates
          if (trimmedLine.startsWith('[*]') || trimmedLine.startsWith('[+]') || trimmedLine.startsWith('[SUCCESS]')) {
            // Extract just the message part
            const message = trimmedLine.replace(/^\[.*?\]\s*/, '');
            res.write(`data: ${JSON.stringify({ progress: message })}\n\n`);
          }
        }
      }
    });
    
    pythonProcess.stderr.on('data', (data) => {
      const errorOutput = data.toString();
      res.write(`data: ${JSON.stringify({ progress: `Error: ${errorOutput.substring(0, 100)}` })}\n\n`);
    });
    
    // Wait for the process to complete
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        // Process completed successfully
        res.write(`data: ${JSON.stringify({ progress: 'Generation complete!', success: true })}\n\n`);
      } else {
        // Process failed
        res.write(`data: ${JSON.stringify({ error: `Generation failed with code ${code}` })}\n\n`);
      }
      
      // Close the connection
      res.end();
    });
    
    // Set a timeout to prevent hanging
    const timeout = setTimeout(() => {
      pythonProcess.kill();
      res.write(`data: ${JSON.stringify({ error: 'Generation timed out after 5 minutes' })}\n\n`);
      res.end();
    }, 300000); // 5 minute timeout
    
    // Clear timeout when process completes
    pythonProcess.on('close', () => {
      clearTimeout(timeout);
    });
    
  } catch (error) {
    console.error("API Error:", error);
    res.write(`data: ${JSON.stringify({ error: error.message || "Internal server error" })}\n\n`);
    res.end();
  }
}