# 🚀 Installation Guide

Complete setup instructions for Claude Code Agents across all scenarios and use cases.

## 📦 Quick Installation

### Option 1: Project-Specific Installation (Recommended)

Perfect for most projects - gives you full control and customization capabilities.

```bash
# 1. Clone the repository
git clone https://github.com/avivl/claude-007-agents.git
cd claude-007-agents

# 2. Navigate to your project
cd /path/to/your/project

# 3. Copy agent files
cp -r /path/to/claude-007-agents/.claude/agents .claude/

# 4. Auto-configure for your technology stack
claude "Use @team-configurator to analyze my project structure and create CLAUDE.md"

# 5. Verify installation
ls .claude/agents/
# Should show: orchestrator.md, orchestrators/, universal/, backend/, frontend/, etc.
```

**✅ Pros:**
- Full ownership of agent files in your project
- Can customize agents for your specific needs
- No external dependencies
- Works with version control (agents evolve with your project)

**❌ Cons:**  
- Manual updates required when the system improves
- Larger project size

### Option 2: Global Installation (Power Users)

Install once and use across all your projects. Perfect for developers working on multiple projects.

```bash
# 1. Clone to a permanent location
git clone https://github.com/avivl/claude-007-agents.git ~/.local/share/claude-007-agents

# 2. Create global agents directory
mkdir -p ~/.local/share/claude-agents
cp -r ~/.local/share/claude-007-agents/.claude/agents ~/.local/share/claude-agents/

# 3. Configure Claude Code globally
mkdir -p ~/.claude
cat > ~/.claude/config.json << 'EOF'
{
  "agents": {
    "globalPath": "~/.local/share/claude-agents/agents",
    "fallbackToLocal": true
  }
}
EOF

# 4. Test from any directory
cd /any/project/directory
claude "List available agents"
```

**✅ Pros:**
- Install once, use everywhere
- No per-project setup required
- Consistent agent experience across all projects
- Easy updates (just update the global installation)
- Clean project repositories (no agent files)

**❌ Cons:**
- Requires Claude Code configuration
- Less flexibility for project-specific agent customization
- Dependency on global installation path

### Option 3: Symlink Installation (Development & Multiple Projects)

Best for developers who want automatic updates and work on multiple projects.

```bash
# 1. Clone to a permanent location
git clone https://github.com/avivl/claude-007-agents.git ~/.local/share/claude-007-agents

# 2. Navigate to your project
cd /path/to/your/project

# 3. Create the .claude directory
mkdir -p .claude

# 4. Create symlink to the agents directory
ln -s ~/.local/share/claude-007-agents/.claude/agents .claude/agents

# 5. Verify symlink
ls -la .claude/
# Should show: agents -> ~/.local/share/claude-007-agents/.claude/agents

# 6. Update anytime with:
cd ~/.local/share/claude-007-agents && git pull
```

**✅ Pros:**
- Automatic updates when you pull the latest agent system
- Smaller project footprint
- Perfect for development and experimentation
- Share improvements across multiple projects

**❌ Cons:**
- Dependency on external repository
- Potential issues if the source repository moves
- Less suitable for production deployments

## 🔧 Advanced Installation Options

### System-Wide Installation (Linux/macOS)

Install for all users on the system:

```bash
# Requires sudo/admin privileges
sudo mkdir -p /usr/local/share/claude-agents
sudo cp -r .claude/agents /usr/local/share/claude-agents/

# Configure system-wide (optional)
sudo mkdir -p /etc/claude
sudo cat > /etc/claude/config.json << 'EOF'
{
  "agents": {
    "globalPath": "/usr/local/share/claude-agents/agents",
    "fallbackToLocal": true
  }
}
EOF
```

### Docker Installation

Use agents within Docker containers:

```dockerfile
# Dockerfile
FROM node:18-alpine

# Copy agents into container
COPY .claude/agents /app/.claude/agents

# Your application setup
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### CI/CD Integration

Use agents in your CI/CD pipelines:

```yaml
# .github/workflows/claude-agents.yml
name: Claude Agents CI

on: [push, pull_request]

jobs:
  quality-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Claude Agents
        run: |
          mkdir -p .claude
          curl -L https://github.com/avivl/claude-007-agents/archive/main.tar.gz | \
            tar -xz --strip-components=1 claude-007-agents-main/.claude/agents
          mv .claude/agents .claude/
      
      - name: Auto-configure agents
        run: |
          # Your Claude Code setup commands here
          echo "Agents configured for CI/CD"
```

## ✅ Verification Steps

### Test Basic Functionality

```bash
# Test agent availability
claude "List available agents"

# Test orchestrator functionality  
claude "Use @team-configurator to analyze my project structure"

# Test framework-specific agents
claude "Use @rails-backend-expert to check if Rails is detected"
claude "Use @react-component-architect to analyze React components"
```

### Verify Installation Structure

Your installation should have this structure:

```
.claude/agents/
├── orchestrator.md
├── orchestrators/
│   ├── tech-lead-orchestrator.md
│   ├── project-analyst.md
│   └── team-configurator.md
├── orchestration/                    # New lst97 integration
│   ├── enhanced-agent-organizer.md
│   ├── knowledge-graph-manager.md
│   ├── agent-communication-protocol.md
│   ├── intelligent-agent-selector.md
│   └── enhanced-agent-template.md
├── universal/
│   ├── code-reviewer.md
│   ├── performance-optimizer.md
│   ├── documentation-specialist.md
│   └── ...
├── backend/
│   ├── rails/
│   ├── django/
│   ├── laravel/
│   └── ...
├── frontend/
│   ├── react/
│   ├── vue/
│   ├── angular/
│   └── ...
└── [additional categories]
```

### Check Agent Attribution

Verify automatic commit attribution is working:

```bash
# Make a test commit
echo "test" > test.txt
git add test.txt
git commit -m "test commit"

# The commit message should automatically include agent attribution
git log -1 --oneline
# Should show: test commit - @agent-name
```

## 🔧 Configuration Options

### Global Configuration File

Create `~/.claude/config.json` for global settings:

```json
{
  "agents": {
    "globalPath": "~/.local/share/claude-agents/agents",
    "fallbackToLocal": true,
    "enableProactiveAgents": true,
    "defaultOrchestrator": "orchestrator"
  },
  "quality": {
    "enableTrunkIntegration": true,
    "autoFix": true,
    "requiredChecks": ["security", "performance", "maintainability"]
  },
  "memory": {
    "enableBasicMemoryMCP": true,
    "retentionPeriod": "90d",
    "autoBackup": true
  }
}
```

### Project-Specific Configuration

Create `.claude/config.json` in your project:

```json
{
  "project": {
    "name": "my-awesome-project",
    "type": "web-application",
    "primaryLanguages": ["typescript", "python"],
    "frameworks": ["react", "django"]
  },
  "agents": {
    "preferred": [
      "@react-component-architect",
      "@django-backend-expert", 
      "@performance-optimizer"
    ],
    "disabled": []
  },
  "workflows": {
    "enableAutoOrchestration": true,
    "defaultReviewers": ["@code-reviewer", "@security-auditor"]
  }
}
```

## 🔄 Update Instructions

### Update Project-Specific Installation

```bash
# Navigate to the original clone
cd /path/to/claude-007-agents
git pull origin main

# Update your project's agents
cp -r .claude/agents /path/to/your/project/.claude/

# Optional: Regenerate CLAUDE.md with new capabilities
cd /path/to/your/project
claude "Use @team-configurator to update CLAUDE.md with new agent capabilities"
```

### Update Global Installation

```bash
# For copied global installation
cd ~/.local/share/claude-007-agents
git pull origin main
cp -r .claude/agents ~/.local/share/claude-agents/

# For symlink installation (updates automatically)
cd ~/.local/share/claude-007-agents
git pull origin main
# Updates are automatic due to symlink
```

### Automated Update Script

Create `update-agents.sh` for easy updates:

```bash
#!/bin/bash
set -e

echo "🔄 Updating Claude Code Agents..."

# Update the source repository
cd ~/.local/share/claude-007-agents
git pull origin main

# Update global installation if it exists
if [ -d ~/.local/share/claude-agents ]; then
    echo "📦 Updating global installation..."
    cp -r .claude/agents ~/.local/share/claude-agents/
fi

# Update current project if .claude exists
if [ -d .claude ]; then
    echo "🏗️ Updating project agents..."  
    cp -r ~/.local/share/claude-007-agents/.claude/agents .claude/
fi

echo "✅ Update complete!"
echo "🎉 You now have access to all the latest agent capabilities!"
```

Make it executable and use:

```bash
chmod +x update-agents.sh
./update-agents.sh
```

## 🚨 Troubleshooting

### Common Issues

#### Issue: "Agents not found"
```bash
# Check if agents directory exists
ls .claude/agents/

# If missing, reinstall:
cp -r /path/to/claude-007-agents/.claude/agents .claude/
```

#### Issue: "Global configuration not working"
```bash
# Check global config file
cat ~/.claude/config.json

# Verify path exists
ls ~/.local/share/claude-agents/agents

# Test from any directory
cd /tmp && claude "List available agents"
```

#### Issue: "Agents not proactively activating"  
```bash
# Check if proactive agents are enabled
grep -r "proactive: true" .claude/agents/

# Test with explicit agent calls
claude "Use @team-configurator to analyze my project"
```

#### Issue: "Symlinks broken"
```bash
# Check symlink status
ls -la .claude/agents

# Recreate if needed
rm .claude/agents
ln -s ~/.local/share/claude-007-agents/.claude/agents .claude/agents
```

### Getting Help

1. **Documentation**: Check [docs/](../docs/) for detailed guides
2. **GitHub Issues**: [Report bugs and issues](https://github.com/avivl/claude-007-agents/issues)
3. **Discussions**: [Ask questions and share experiences](https://github.com/avivl/claude-007-agents/discussions)

## 🎯 Next Steps

After installation:

1. **📖 Read the [Agent Catalog](AGENTS.md)** - Understand your 77 specialized agents
2. **💡 Try [Usage Examples](USAGE.md)** - See real-world applications  
3. **🎭 Explore [Orchestration](ORCHESTRATION.md)** - Advanced coordination workflows
4. **📋 Configure [Coding Rules](CODING_RULES.md)** - Quality standards system
5. **🚀 Learn [lst97 Integration](LST97_INTEGRATION.md)** - Enhanced coordination features

**🎉 You're ready to transform your development workflow with Claude Code Agents!**