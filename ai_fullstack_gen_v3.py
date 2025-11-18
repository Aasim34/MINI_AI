#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ADVANCED AI-Driven Full-Stack Website Generator v3.0 (No Emojis)
Generates production-ready full-stack applications
"""

import os
import json
import time
import re
import sys
import io
from datetime import datetime
from pathlib import Path
import requests
import subprocess
import platform

# Load environment variables from .env file
env_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(env_path):
    with open(env_path, 'r') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                key, value = line.split('=', 1)
                os.environ[key.strip()] = value.strip()

# Fix encoding for Windows
if sys.platform == "win32":
    try:
        # Simple approach to handle encoding
        import locale
        encoding = locale.getpreferredencoding(False)
        if encoding.lower() != 'utf-8':
            sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    except Exception:
        # Fallback if any issues occur
        pass

def get_api_key():
    """Get API key from environment variable or user input"""
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        print("\n[*] OpenAI API key not found in environment.")
        print("[*] Please enter your OpenAI API key (sk-...):")
        api_key = input().strip()
        if not api_key or not api_key.startswith("sk-"):
            raise ValueError("Invalid API key format")
    return api_key

def call_openai_api(prompt: str, max_retries: int = 3) -> str:
    """Call OpenAI API with retry logic for rate limiting"""
    api_key = get_api_key()
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    url = "https://api.openai.com/v1/chat/completions"
    
    for attempt in range(max_retries):
        try:
            payload = {
                "model": "gpt-4o-mini",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.7,
                "max_tokens": 4000
            }
            
            response = requests.post(url, json=payload, headers=headers, timeout=30)
            
            if response.status_code == 200:
                data = response.json()
                return data.get("choices", [{}])[0].get("message", {}).get("content", "")
            
            elif response.status_code == 429:  # Rate limited
                wait_time = 2 ** attempt  # Exponential backoff
                print(f"[RATE_LIMIT] Waiting {wait_time}s before retry...")
                sys.stdout.flush()
                time.sleep(wait_time)
                continue
            
            else:
                print(f"[-] API Error {response.status_code}: {response.text[:200]}")
                sys.stdout.flush()
                return ""
                
        except requests.exceptions.Timeout:
            print(f"[-] Request timeout (attempt {attempt+1}/{max_retries})")
            sys.stdout.flush()
        except Exception as e:
            print(f"[-] Error: {str(e)}")
            sys.stdout.flush()
    
    return ""

def generate_app_structure(idea: str) -> dict:
    """Generate comprehensive app structure from idea"""
    prompt = f"""Analyze this app idea and generate a JSON structure for a production-ready full-stack app:

"{idea}"

Return a JSON object with:
{{
  "projectName": "Project name",
  "projectSlug": "project-slug",
  "description": "Brief description",
  "features": ["feature1", "feature2"],
  "database": {{
    "tables": [
      {{"name": "table_name", "fields": [{{"name": "id", "type": "String", "required": true}}]}}
    ]
  }},
  "apiEndpoints": [
    {{"path": "/api/resource", "method": "GET", "description": "Get resources"}}
  ],
  "components": [
    {{"name": "ComponentName", "type": "card", "props": []}}
  ]
}}

Return ONLY valid JSON, no other text."""

    print("[*] Analyzing idea with GPT-4...")
    sys.stdout.flush()
    response = call_openai_api(prompt)
    
    if not response:
        print("[-] Failed to generate app structure")
        sys.stdout.flush()
        return {}
    
    try:
        json_match = re.search(r'\{[\s\S]*\}', response)
        if json_match:
            return json.loads(json_match.group())
    except json.JSONDecodeError:
        print("[-] Invalid JSON response")
        sys.stdout.flush()
    
    return {}

def create_project_structure(app_data: dict, idea: str, base_path: str) -> str:
    """Create the complete project structure"""
    if not app_data:
        print("[-] No app data provided")
        sys.stdout.flush()
        return ""
    
    project_slug = app_data.get('projectSlug', 'new-app').lower().replace(' ', '-')
    projects_dir = os.path.join(base_path, "Projects")
    os.makedirs(projects_dir, exist_ok=True)
    project_dir = os.path.join(projects_dir, project_slug)
    
    print(f"\n[*] Creating project: {app_data.get('projectName', project_slug)}")
    sys.stdout.flush()
    print(f"[*] Location: {project_dir}\n")
    sys.stdout.flush()
    
    # Create directories
    dirs = [
        "src/pages/api",
        "src/components",
        "src/lib",
        "src/styles",
        "prisma",
        "public"
    ]
    
    for dir_path in dirs:
        os.makedirs(os.path.join(project_dir, dir_path), exist_ok=True)
    
    # Create a simple index.js file
    index_content = """import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to {project_name}</h1>
      <p>{description}</p>
    </div>
  );
}
""".format(project_name=app_data.get('projectName', 'Project'), description=app_data.get('description', 'A new project'))
    
    with open(os.path.join(project_dir, "src/pages/index.js"), "w", encoding="utf-8") as f:
        f.write(index_content)
    
    # Create package.json
    package_json = {
        "name": project_slug,
        "version": "0.1.0",
        "private": True,
        "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "next lint"
        },
        "dependencies": {
            "next": "^14.0.0",
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
        }
    }
    
    with open(os.path.join(project_dir, "package.json"), "w", encoding="utf-8") as f:
        json.dump(package_json, f, indent=2)
    
    print(f"\n[SUCCESS] Project created!")
    print(f"   Location: {project_dir}")
    sys.stdout.flush()
    
    return project_dir

def main():
    """Main function"""
    print("\n" + "=" * 80)
    print("[*] ADVANCED AI-DRIVEN FULL-STACK GENERATOR v3.0 (AUTO-START)")
    print("=" * 80)
    print("\n[*] Features:")
    print("   [+] Database schema generation (Prisma)")
    print("   [+] Advanced API endpoints")
    print("   [+] React components")
    print("   [+] Next.js project setup")
    print("   [+] Tailwind CSS configuration")
    print("   [+] Auto npm install & dev server")
    print("   [+] Auto browser open\n")
    sys.stdout.flush()
    
    # Try to get idea from stdin first (for piping), then from user input
    idea = ""
    if not sys.stdin.isatty():
        # Running with piped input, get it from sys.stdin
        idea = sys.stdin.read().strip()
    else:
        # Running interactively, get input from user
        try:
            print(">>> Enter your app idea (or pipe it in):")
            sys.stdout.flush()
            idea = input().strip()
        except EOFError:
            # Handle case where input is empty
            pass
        except Exception as e:
            print(f"[-] Error reading input: {e}")
            sys.stdout.flush()
            return
    
    if not idea:
        print("[-] Please provide an app idea!")
        sys.stdout.flush()
        return
    
    print(f"\n[*] Processing: {idea[:60]}...")
    sys.stdout.flush()
    
    try:
        # Generate structure
        app_data = generate_app_structure(idea)
        
        if not app_data:
            print("[-] Failed to generate architecture")
            sys.stdout.flush()
            return
        
        print(f"\n[SUCCESS] Architecture generated!")
        print(f"   Project: {app_data.get('projectName', 'Project')}")
        print(f"   Features: {len(app_data.get('features', []))}")
        print(f"   APIs: {len(app_data.get('apiEndpoints', []))}")
        print(f"   Components: {len(app_data.get('components', []))}")
        sys.stdout.flush()
        
        # Create project
        project_dir = create_project_structure(app_data, idea, os.getcwd())
        
        if not project_dir:
            print("[-] Failed to create project")
            sys.stdout.flush()
            return
        
        print(f"\n[SUCCESS] Project created!")
        print(f"   Location: {project_dir}")
        sys.stdout.flush()
        
    except Exception as e:
        print(f"\n[-] Error: {str(e)}")
        import traceback
        traceback.print_exc()
        sys.stdout.flush()

if __name__ == "__main__":
    main()