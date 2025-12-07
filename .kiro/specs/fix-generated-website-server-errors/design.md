# Design Document

## Overview

This design addresses critical issues in the AI-powered website generator that prevent generated Next.js projects from starting successfully. The solution involves enhancing the `create_project_structure` function in `ai_fullstack_gen_v3.py` to generate all required configuration files and dependencies. The fix ensures that every generated project is immediately runnable without manual intervention.

## Architecture

The system follows a template-based generation pattern where the Python generator creates a complete Next.js project structure with all necessary files. The architecture consists of:

1. **Generator Core** (`ai_fullstack_gen_v3.py`): Main Python script that orchestrates project creation
2. **Template System**: Hardcoded configuration templates for Next.js, Tailwind, and PostCSS
3. **File System Manager**: Creates directories and writes configuration files
4. **Dependency Manager**: Generates complete package.json with all required dependencies

The generator operates in a single pass, creating all files atomically to ensure consistency.

## Components and Interfaces

### 1. Configuration Template Generator

**Purpose**: Provides standardized configuration templates for all generated projects

**Interface**:
```python
def get_postcss_config() -> str:
    """Returns PostCSS configuration content"""
    
def get_next_config() -> str:
    """Returns Next.js configuration content"""
    
def get_tailwind_config() -> str:
    """Returns Tailwind CSS configuration content"""
    
def get_document_template() -> str:
    """Returns _document.js template content"""
    
def get_app_template() -> str:
    """Returns _app.js template content"""
```

### 2. Enhanced Project Structure Creator

**Purpose**: Creates complete project structure with all required files

**Modified Function**:
```python
def create_project_structure(app_data: dict, idea: str, base_path: str) -> str:
    """
    Creates complete Next.js project with all configuration files
    
    Args:
        app_data: Project metadata from AI generation
        idea: Original user idea
        base_path: Root directory for project creation
        
    Returns:
        str: Path to created project directory
    """
```

### 3. Package.json Generator

**Purpose**: Creates complete package.json with all dependencies

**Interface**:
```python
def generate_package_json(project_slug: str) -> dict:
    """
    Generates complete package.json with all required dependencies
    
    Returns:
        dict: Complete package.json structure
    """
```

## Data Models

### Project Configuration

```python
{
    "projectName": str,          # Human-readable project name
    "projectSlug": str,          # Kebab-case directory name
    "description": str,          # Project description
    "features": List[str],       # List of features
    "database": dict,            # Database schema
    "apiEndpoints": List[dict],  # API routes
    "components": List[dict]     # React components
}
```

### Required Files Structure

```
project-name/
├── package.json              # Complete with all dependencies
├── next.config.js           # Next.js configuration
├── postcss.config.js        # PostCSS with Tailwind
├── tailwind.config.js       # Tailwind configuration
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
├── src/
│   ├── pages/
│   │   ├── _app.js        # Custom App component
│   │   ├── _document.js   # Custom Document component
│   │   ├── index.js       # Homepage
│   │   └── api/           # API routes directory
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   └── styles/
│       └── globals.css    # Global styles with Tailwind directives
├── prisma/               # Database schema
└── public/               # Static assets
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Required configuration files exist

*For any* generated project, all required configuration files (postcss.config.js, next.config.js, tailwind.config.js, _document.js, _app.js) should exist in their correct locations.

**Validates: Requirements 1.1, 1.2, 1.3, 1.4**

### Property 2: Configuration files contain required content

*For any* generated project, the postcss.config.js file should contain both autoprefixer and tailwindcss plugins, and the tailwind.config.js should include correct content paths.

**Validates: Requirements 1.1, 1.3**

### Property 3: Package.json completeness

*For any* generated project, the package.json file should contain all required dependencies (next, react, react-dom) and devDependencies (tailwindcss, postcss, autoprefixer, eslint, eslint-config-next).

**Validates: Requirements 1.5**

### Property 4: npm install succeeds

*For any* generated project with a valid package.json, running npm install should complete with exit code 0.

**Validates: Requirements 2.1**

### Property 5: Development server starts

*For any* generated project with installed dependencies, running npm run dev should start the server without errors.

**Validates: Requirements 2.2, 2.3**

### Property 6: Directory structure consistency

*For any* two generated projects, their directory structures (src/, src/pages/, src/pages/api/, src/components/, src/lib/, src/styles/, prisma/, public/) should be identical.

**Validates: Requirements 3.1**

### Property 7: Configuration consistency

*For any* two generated projects, their configuration files (next.config.js, postcss.config.js structure) should have identical formats and base settings.

**Validates: Requirements 3.2**

### Property 8: Source file placement

*For any* generated project, all JavaScript/JSX source files should be located within the src directory.

**Validates: Requirements 3.3**

### Property 9: API route placement

*For any* generated project with API endpoints, all API route files should be located in src/pages/api directory.

**Validates: Requirements 3.4**

### Property 10: Component placement

*For any* generated project with components, all component files should be located in src/components directory.

**Validates: Requirements 3.5**

### Property 11: Missing file error messages

*For any* required file that is missing from a generated project, attempting to start the server should produce an error message that specifically identifies which file is missing.

**Validates: Requirements 4.1**

### Property 12: Invalid configuration error messages

*For any* configuration file with invalid syntax, attempting to use it should produce an error message that includes the file name.

**Validates: Requirements 4.4**

## Error Handling

### File Creation Errors

- **Issue**: Insufficient permissions or disk space
- **Handling**: Catch IOError exceptions and display clear error messages indicating the specific file that failed to create
- **Recovery**: Provide suggestions for checking permissions and disk space

### Dependency Installation Errors

- **Issue**: npm install fails due to network issues or invalid package versions
- **Handling**: Capture and display full npm error output
- **Recovery**: Suggest checking internet connection and npm registry availability

### Server Startup Errors

- **Issue**: Port already in use or configuration errors
- **Handling**: Parse Next.js error output and display relevant portions
- **Recovery**: For port conflicts, suggest alternative ports (3002-3100 range)

### Configuration Validation Errors

- **Issue**: Invalid JavaScript syntax in configuration files
- **Handling**: Validate configuration templates before writing to disk
- **Recovery**: Use known-good templates and log any template generation errors

## Testing Strategy

### Unit Testing

We will use Python's `unittest` framework for testing the generator functions:

1. **Template Generation Tests**: Verify each template function returns valid, non-empty content
2. **File Creation Tests**: Test that files are created in correct locations with correct content
3. **Package.json Generation Tests**: Verify all required dependencies are included
4. **Error Handling Tests**: Test error messages for various failure scenarios

### Property-Based Testing

We will use `hypothesis` for Python property-based testing to verify universal properties:

1. **Configuration Library**: `hypothesis` (Python PBT library)
2. **Minimum Iterations**: 100 runs per property test
3. **Test Tagging**: Each property test will include a comment with format: `# Feature: fix-generated-website-server-errors, Property {number}: {property_text}`

Property tests will:
- Generate random project names and verify all required files are created
- Generate multiple projects and verify structural consistency
- Test that all generated package.json files contain required dependencies
- Verify configuration files contain required content patterns

### Integration Testing

1. **End-to-End Generation**: Create a test project and verify it can be installed and started
2. **Server Startup**: Spawn the dev server and verify it responds to HTTP requests
3. **Multi-Project Consistency**: Generate multiple projects and compare their structures

### Test Organization

```
tests/
├── test_templates.py          # Unit tests for template generation
├── test_project_creation.py   # Unit tests for file creation
├── test_properties.py         # Property-based tests
└── test_integration.py        # Integration tests
```

## Implementation Notes

### Configuration Templates

All configuration files will use proven, working templates based on Next.js 14 best practices:

- **PostCSS**: Standard configuration with Tailwind and Autoprefixer
- **Next.js**: Enable React strict mode, SWC minification, and compression
- **Tailwind**: Include all common content paths to ensure CSS generation works
- **_document.js**: Standard Next.js document with proper HTML structure
- **_app.js**: Include global CSS import and viewport meta tag

### Dependency Versions

Use specific version ranges that are known to work together:
- Next.js: ^14.0.0
- React: ^18.2.0
- Tailwind CSS: ^3.3.0
- PostCSS: ^8.4.30
- Autoprefixer: ^10.4.16

### File Writing Strategy

1. Create all directories first
2. Write configuration files before source files
3. Write package.json last to ensure all dependencies are known
4. Use UTF-8 encoding for all files
5. Ensure proper line endings for cross-platform compatibility

### Validation Strategy

Before completing project generation:
1. Verify all required files exist
2. Verify package.json is valid JSON
3. Verify configuration files are valid JavaScript
4. Log summary of created files for user verification
