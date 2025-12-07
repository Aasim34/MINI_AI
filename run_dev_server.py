#!/usr/bin/env python3
import sys
import subprocess
import os

def run_dev_server(project_path):
    """Open a new terminal window and run npm dev server"""
    
    # Normalize the path for Windows
    project_path = os.path.normpath(project_path)
    
    if not os.path.exists(project_path):
        print(f"Error: Project path does not exist: {project_path}")
        return False
    
    try:
        # Windows Command Prompt - execute cd and npm run dev separately
        cmd = [
            'cmd.exe',
            '/k',
            f'cd /d {project_path} && npm run dev'
        ]
        
        print(f"[*] Opening terminal for: {project_path}")
        print(f"[*] Running: npm run dev")
        
        # Start the process
        process = subprocess.Popen(
            cmd,
            creationflags=subprocess.CREATE_NEW_CONSOLE,
            shell=False,
            cwd=project_path
        )
        
        print(f"[+] Terminal opened successfully (PID: {process.pid})")
        print(f"[+] Development server starting...")
        return True
        
    except Exception as e:
        print(f"[-] Error: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python run_dev_server.py <project_path>")
        sys.exit(1)
    
    project_path = sys.argv[1]
    success = run_dev_server(project_path)
    sys.exit(0 if success else 1)
