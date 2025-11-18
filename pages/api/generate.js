import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { idea, apiKey } = req.body;
    
    if (!idea || !apiKey) {
      return res.status(400).json({ error: "Missing required fields: idea and apiKey are required" });
    }
    
    // Validate API key format
    if (!apiKey.startsWith('sk-')) {
      return res.status(400).json({ error: "Invalid API key format. API key should start with 'sk-'" });
    }
    
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
    
    let stdout = '';
    let stderr = '';
    
    // Collect stdout and stderr
    pythonProcess.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    pythonProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    // Wait for the process to complete
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        try {
          // Parse the JSON response from the Python script
          const result = JSON.parse(stdout);
          
          if (result.success) {
            res.status(200).json({ success: true, data: result });
          } else {
            res.status(500).json({ error: result.error || "Generation failed" });
          }
        } catch (parseError) {
          console.error("Failed to parse Python output:", stdout);
          res.status(500).json({ 
            error: "Failed to parse generator output: " + parseError.message,
            debugInfo: {
              stdout: stdout.substring(0, 500), // First 500 characters for debugging
              stderr: stderr.substring(0, 500)
            }
          });
        }
      } else {
        console.error("Python script error:", stderr);
        // Provide more detailed error information
        let errorMessage = `Generator failed with code ${code}`;
        if (stderr) {
          errorMessage += `: ${stderr}`;
        }
        
        // Check for common errors
        if (stderr.includes("ModuleNotFoundError")) {
          errorMessage = "Required Python modules are missing. Please install dependencies with 'pip install -r requirements.txt'";
        } else if (stderr.includes("ImportError")) {
          errorMessage = "Python import error. Please check your Python environment and dependencies.";
        } else if (stderr.includes("PermissionError")) {
          errorMessage = "Permission denied. Please check file permissions for the generator script.";
        }
        
        res.status(500).json({ 
          error: errorMessage,
          debugInfo: {
            stdout: stdout.substring(0, 500),
            stderr: stderr.substring(0, 500)
          }
        });
      }
    });
    
    // Set a timeout to prevent hanging
    const timeout = setTimeout(() => {
      pythonProcess.kill();
      res.status(500).json({ 
        error: "Generation timed out after 5 minutes. Please try again with a simpler idea.",
        timeout: true
      });
    }, 300000); // 5 minute timeout
    
    // Clear timeout when process completes
    pythonProcess.on('close', () => {
      clearTimeout(timeout);
    });
    
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ 
      error: error.message || "Internal server error",
      exception: error.toString()
    });
  }
}