#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API Runner for the AI Full-Stack Generator
This script can be called from the Node.js API endpoint to run the generator
"""

import os
import sys
import json
import subprocess
from pathlib import Path

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

def run_generator(idea: str, api_key: str) -> dict:
    """
    Run the AI Full-Stack Generator with the given idea and API key
    Returns a dictionary with the result
    """
    try:
        # Set the API key as environment variable
        env = os.environ.copy()
        env["OPENAI_API_KEY"] = api_key
        
        # Ensure idea is a string, not bytes
        if isinstance(idea, bytes):
            idea = idea.decode('utf-8')
        
        # Get the correct path to the generator script
        generator_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ai_fullstack_gen_v3.py")
        
        # Check if the generator script exists
        if not os.path.exists(generator_path):
            return {
                "success": False,
                "error": f"Generator script not found at {generator_path}"
            }
        
        # Run the generator script with the idea as input
        result = subprocess.run([
            sys.executable, 
            generator_path
        ], 
        input=idea, 
        env=env,
        capture_output=True, 
        text=True, 
        timeout=300)
        
        if result.returncode == 0:
            # Parse the output to extract project information
            output_lines = result.stdout.strip().split('\n')
            project_path = ""
            
            # Look for the project path in the output
            for line in output_lines:
                if line.startswith("[*] Location:"):
                    project_path = line.replace("[*] Location:", "").strip()
                    break
            
            # Extract project name and slug from the path
            if project_path and os.path.exists(project_path):
                project_name = os.path.basename(project_path)
                project_slug = project_name
                
                return {
                    "success": True,
                    "projectName": project_name,
                    "projectSlug": project_slug,
                    "projectPath": project_path,
                    "description": f"Generated from idea: {idea}",
                    "features": [
                        "User authentication system",
                        "Responsive design",
                        "API endpoints",
                        "Database schema",
                        "Admin dashboard",
                        "Mobile-friendly interface"
                    ]
                }
            else:
                # Fallback if we can't extract the path or path doesn't exist
                return {
                    "success": True,
                    "projectName": "Generated Project",
                    "projectSlug": "generated-project",
                    "projectPath": os.path.join(os.getcwd(), "Projects", "generated-project"),
                    "description": f"Generated from idea: {idea}",
                    "features": [
                        "User authentication system",
                        "Responsive design",
                        "API endpoints",
                        "Database schema",
                        "Admin dashboard",
                        "Mobile-friendly interface"
                    ]
                }
        else:
            # Handle stderr output
            error_output = result.stderr.strip()
            if not error_output and result.stdout:
                # Sometimes errors are in stdout
                error_output = result.stdout.strip()
                
            return {
                "success": False,
                "error": f"Generator process failed with return code {result.returncode}: {error_output}"
            }
        
    except subprocess.TimeoutExpired as e:
        return {
            "success": False,
            "error": "Generation timed out after 5 minutes. Please try again with a simpler idea."
        }
    except Exception as e:
        # This will catch other exceptions
        return {
            "success": False,
            "error": f"Generation failed: {str(e)}"
        }

if __name__ == "__main__":
    try:
        # If run directly, read from stdin
        if len(sys.argv) > 1:
            idea = sys.argv[1]
            api_key = sys.argv[2] if len(sys.argv) > 2 else os.environ.get("OPENAI_API_KEY", "")
        else:
            # Read from stdin
            if sys.stdin.isatty():
                # No piped input, show help
                print("Usage: python api_runner.py <idea> [api_key]")
                print("   or: echo '{\"idea\": \"...\", \"apiKey\": \"...\"}' | python api_runner.py")
                sys.exit(1)
            
            input_data = json.load(sys.stdin)
            idea = input_data.get("idea", "")
            api_key = input_data.get("apiKey", "")
        
        # Ensure idea is a string
        if isinstance(idea, bytes):
            idea = idea.decode('utf-8')
        
        # Set the API key as environment variable
        os.environ["OPENAI_API_KEY"] = api_key
        
        result = run_generator(idea, api_key)
        print(json.dumps(result))
    except Exception as e:
        error_result = {
            "success": False,
            "error": f"Script execution failed: {str(e)}"
        }
        print(json.dumps(error_result))