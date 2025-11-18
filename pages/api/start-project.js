import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

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
    const { projectPath, projectSlug } = req.body;
    
    if (!projectPath || !projectSlug) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    
    // Correct the project path to point to the frontend/Projects directory
    const correctedProjectPath = path.join(__dirname, '..', '..', 'Projects', projectSlug);
    console.log(`[Start Project] Looking for project at: ${correctedProjectPath}`);
    
    // Check if project directory exists
    if (!fs.existsSync(correctedProjectPath)) {
      return res.status(404).json({ error: "Project directory not found" });
    }
    
    // Check if package.json exists
    const packageJsonPath = path.join(correctedProjectPath, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      return res.status(404).json({ error: "package.json not found in project directory" });
    }
    
    // Start the Next.js development server for the generated project
    const projectDir = path.resolve(correctedProjectPath);
    
    // Try different ports starting from 3002
    let port = 3002;
    const maxPort = 3100;
    
    // Use npx.cmd on Windows
    const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    
    // First install dependencies if node_modules doesn't exist
    const nodeModulesPath = path.join(projectDir, 'node_modules');
    if (!fs.existsSync(nodeModulesPath)) {
      console.log(`[Start Project] Installing dependencies for ${projectSlug}`);
      const installProcess = spawn(npxCommand, ['npm', 'install'], {
        cwd: projectDir,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      installProcess.stdout.on('data', (data) => {
        console.log(`[NPM Install ${projectSlug}] stdout: ${data}`);
      });
      
      installProcess.stderr.on('data', (data) => {
        console.log(`[NPM Install ${projectSlug}] stderr: ${data}`);
      });
      
      // Wait for installation to complete
      await new Promise((resolve) => {
        installProcess.on('close', resolve);
      });
    }
    
    // Spawn the Next.js development server process
    const nextDevProcess = spawn(npxCommand, ['next', 'dev', '-p', port.toString()], {
      cwd: projectDir,
      stdio: ['pipe', 'pipe', 'pipe']
    });
    
    // Log process info for debugging
    nextDevProcess.stdout.on('data', (data) => {
      console.log(`[Next.js Server ${projectSlug}] stdout: ${data}`);
    });
    
    nextDevProcess.stderr.on('data', (data) => {
      console.log(`[Next.js Server ${projectSlug}] stderr: ${data}`);
    });
    
    nextDevProcess.on('close', (code) => {
      console.log(`[Next.js Server ${projectSlug}] process exited with code ${code}`);
    });
    
    // Give the server a moment to start
    setTimeout(() => {
      res.status(200).json({ 
        success: true, 
        url: `http://localhost:${port}`,
        port: port,
        projectSlug: projectSlug
      });
    }, 5000); // Wait 5 seconds for server to start
    
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
}