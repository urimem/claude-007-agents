# 🧪 Task Master - Local Testing Guide

## 📋 Overview

This guide shows you how to test the Task Master system in other projects on your laptop **without creating GitHub packages**. You'll use local file linking and npm local installation methods.

## 🚀 Quick Setup Methods

### Method 1: NPM Link (Recommended)

Create a local npm package and link it globally:

```bash
# In the Task Master source directory
cd /Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis

# Create package.json if it doesn't exist
cat > package.json << 'EOF'
{
  "name": "task-master-local",
  "version": "1.0.0",
  "description": "Task Master Local Testing Package",
  "main": "task-master-deployment.js",
  "bin": {
    "task-master-local": "./task-master-deployment.js"
  },
  "scripts": {
    "test": "node testing-validation-suite.js",
    "demo": "node ai-task-demo.js"
  },
  "keywords": ["task-management", "ai", "claude-code"],
  "author": "Claude Code AI Assistant",
  "license": "MIT"
}
EOF

# Link globally
npm link

# Now go to any test project
cd ~/path/to/your/test-project

# Link the local package
npm link task-master-local

# Test the CLI
task-master-local --help
```

### Method 2: Direct File Copying

Copy the entire system to a test project:

```bash
# Create test directory
mkdir ~/task-master-test
cd ~/task-master-test

# Copy all Task Master files
cp -r /Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis/* .

# Make CLI executable
chmod +x task-master-deployment.js

# Test directly
./task-master-deployment.js --analyze
```

### Method 3: Symlink Method

Create symbolic links for easy updates:

```bash
# In your test project directory
cd ~/your-test-project

# Create symbolic links
ln -s /Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis/task-master-deployment.js ./task-master
ln -s /Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis/ai-integration-engine.js ./
ln -s /Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis/community-ecosystem.js ./

# Make executable
chmod +x ./task-master

# Test
./task-master --help
```

## 🏗️ Testing Different Project Types

### Node.js Project Testing

```bash
# Create test Node.js project
mkdir ~/test-nodejs-project
cd ~/test-nodejs-project

# Initialize Node project
npm init -y

# Create sample files
mkdir src
echo "console.log('Hello Task Master');" > src/index.js
echo "# Test Node Project" > README.md

# Link Task Master
npm link task-master-local

# Test codebase analysis
task-master-local --analyze
```

### React Project Testing

```bash
# Create test React project
npx create-react-app ~/test-react-project
cd ~/test-react-project

# Link Task Master
npm link task-master-local

# Test AI integration
task-master-local --ai-demo

# Test performance analysis
node -e "
const aiEngine = require('task-master-local/ai-integration-engine.js');
const engine = new aiEngine.AdvancedAIIntegrationEngine();
engine.initializeAIIntegration().then(() => console.log('AI Ready!'));
"
```

### Python Project Testing

```bash
# Create test Python project
mkdir ~/test-python-project
cd ~/test-python-project

# Create sample Python files
echo "print('Hello Task Master')" > main.py
echo "# Python Test Project" > README.md

# Copy Task Master directly (npm link won't work for Python)
cp -r /Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis/task-master-deployment.js ./task-master
chmod +x ./task-master

# Test
./task-master --analyze
```

## 🔧 Configuration for Local Testing

### Create Local Config File

```bash
# In each test project, create task-master config
cat > .task-master-config.json << 'EOF'
{
  "version": "1.0.0",
  "mode": "local-testing",
  "features": {
    "ai": true,
    "performance": true,
    "community": true,
    "testing": true
  },
  "paths": {
    "source": "/Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis",
    "cache": "./.task-master-cache",
    "logs": "./.task-master-logs"
  }
}
EOF
```

### Environment Setup

```bash
# Create test environment file
cat > .env.task-master << 'EOF'
TASK_MASTER_MODE=local-testing
TASK_MASTER_VERSION=1.0.0
TASK_MASTER_AI_ENABLED=true
TASK_MASTER_DEBUG=true
NODE_ENV=development
EOF
```

## 🧪 Testing Scenarios

### Scenario 1: Basic Functionality Test

```bash
#!/bin/bash
# Save as test-basic.sh

echo "🧪 Testing Task Master Basic Functionality"
echo "================================================="

# Test CLI availability
echo "✅ Testing CLI availability..."
task-master-local --version || echo "❌ CLI not available"

# Test AI integration
echo "✅ Testing AI integration..."
node -e "
const AI = require('./ai-integration-engine.js');
console.log('AI Engine loaded successfully');
"

# Test community features
echo "✅ Testing community features..."
node -e "
const Community = require('./community-ecosystem.js');
console.log('Community system loaded successfully');
"

echo "🎉 Basic functionality test complete!"
```

### Scenario 2: Performance Benchmark Test

```bash
#!/bin/bash
# Save as test-performance.sh

echo "🚀 Testing Task Master Performance"
echo "========================================"

# Run performance tests
node testing-validation-suite.js

# Test AI response time
echo "⚡ Testing AI response time..."
time node -e "
const AI = require('./ai-integration-engine.js');
const engine = new AI.AdvancedAIIntegrationEngine();
engine.initializeAIIntegration().then(() => {
  console.log('AI initialized in production time');
  process.exit(0);
});
"

echo "📊 Performance testing complete!"
```

### Scenario 3: Real Project Integration Test

```bash
#!/bin/bash
# Save as test-integration.sh

echo "🔗 Testing Task Master Integration"
echo "========================================="

# Test with real project structure
PROJECT_DIR="$1"
if [ -z "$PROJECT_DIR" ]; then
  echo "Usage: ./test-integration.sh <project-directory>"
  exit 1
fi

cd "$PROJECT_DIR"

# Analyze existing codebase
echo "📋 Analyzing codebase structure..."
task-master-local --analyze

# Test AI recommendations
echo "🤖 Testing AI recommendations..."
node -c "
const aiEngine = require('task-master-local/ai-integration-engine.js');
// Add specific project analysis here
"

echo "🎯 Integration testing complete!"
```

## 📂 Project Structure for Testing

Create this structure in any test project:

```
test-project/
├── .task-master-config.json          # Local configuration
├── .env.task-master                   # Environment variables
├── task-master                        # Symlink to deployment script
├── package.json                       # Project package file
├── src/                              # Your project source
├── tests/                            # Your project tests
└── task-master-test-results/         # Test results directory
    ├── ai-analysis.json              # AI analysis results
    ├── performance-metrics.json      # Performance test results
    └── integration-report.json       # Integration test report
```

## 🔍 Debugging and Troubleshooting

### Enable Debug Mode

```bash
# Set debug environment
export TASK_MASTER_DEBUG=true
export NODE_ENV=development

# Run with verbose logging
task-master-local --verbose --analyze
```

### Common Issues and Solutions

#### Issue: "Command not found"
```bash
# Solution: Check npm link
npm ls -g --depth=0 | grep task-master-local

# Re-link if needed
cd /Users/avivl/GitHub/avivl/claude-007-agents/src/codebase-analysis
npm link
```

#### Issue: "Module not found"
```bash
# Solution: Check file paths in your test project
ls -la | grep task-master
# Should show symlinks or copied files

# Check Node.js module resolution
node -e "console.log(require.resolve('./ai-integration-engine.js'))"
```

#### Issue: "Permission denied"
```bash
# Solution: Fix permissions
chmod +x task-master-deployment.js
chmod +x ./task-master  # if using symlink
```

## 📊 Test Results Validation

### Expected Performance Metrics

When testing is successful, you should see:

```
✅ Cold Start Time: <2000ms (Target: <2000ms)
✅ Analysis Speed: <5000ms (Target: <5000ms)  
✅ CLI Response: <3000ms (Target: <3000ms)
✅ Memory Usage: <100MB (Target: <100MB)
✅ AI Response: <100ms (Target: <100ms)
```

### Expected AI Capabilities

```
🤖 AI Integration Status:
✅ Intelligent Prioritization: OPERATIONAL
✅ Predictive Analysis: OPERATIONAL  
✅ Adaptive Learning: OPERATIONAL
✅ Contextual Assistant: OPERATIONAL
✅ Smart Recommendations: OPERATIONAL
✅ Performance Optimization: OPERATIONAL
```

### Expected Community Features

```
🌟 Community Ecosystem Status:
✅ Template Registry: 25+ templates available
✅ Plugin Architecture: SDK loaded
✅ Integration Hub: 35+ services connected
✅ Contribution System: Peer review active
✅ Marketplace: 5 categories operational
✅ Documentation: 20+ guides available
```

## 🎯 Next Steps After Testing

1. **Validate Results**: Compare your test results with expected metrics
2. **Test Different Projects**: Try various project types (Node.js, Python, React, etc.)
3. **Report Issues**: Document any problems found during testing
4. **Performance Tuning**: Optimize based on your specific project needs
5. **Integration Planning**: Plan how to integrate into your regular workflow

## 📝 Test Report Template

```markdown
# Task Master Local Testing Report

## Test Environment
- **OS**: macOS/Linux/Windows
- **Node.js Version**: 
- **Project Type**: 
- **Test Date**: 

## Test Results
### Basic Functionality: ✅/❌
### AI Integration: ✅/❌  
### Performance: ✅/❌
### Community Features: ✅/❌

## Performance Metrics
- Cold Start: __ms
- Analysis Speed: __ms
- Memory Usage: __MB

## Issues Found
- [ ] Issue 1: Description
- [ ] Issue 2: Description

## Recommendations
- Recommendation 1
- Recommendation 2

## Overall Assessment
Task Master is ready/not ready for production use.
```

---

**Happy Testing! 🧪🚀**

This guide ensures you can thoroughly test Task Master across different project types without needing to publish packages or use external dependencies.