# Unified Agent System for Claude Code

A comprehensive AI agent system with **75+ specialized agents** designed for modern software development. Features **advanced AI orchestration**, integrated resilience engineering, structured logging, and live MCP integrations across all frameworks.

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/avivl/claude-007-agents.git
cd claude-007-agents
```

### 2. Choose Your Installation Method

#### Option A: Global Installation (Recommended for Power Users)
Install the agent system globally and configure Claude Code to use it automatically:

```bash
# Install globally (choose a permanent location)
sudo mkdir -p /usr/local/share/claude-agents
sudo cp -r /path/to/claude-007-agents/.claude/agents /usr/local/share/claude-agents/

# Or install to your home directory (no sudo required)
mkdir -p ~/.local/share/claude-agents
cp -r /path/to/claude-007-agents/.claude/agents ~/.local/share/claude-agents/

# Configure Claude Code globally (create/edit ~/.claude/config.json)
mkdir -p ~/.claude
cat > ~/.claude/config.json << 'EOF'
{
  "agents": {
    "globalPath": "/usr/local/share/claude-agents/agents",
    "fallbackToLocal": true
  }
}
EOF

# Or for home directory installation:
cat > ~/.claude/config.json << 'EOF'
{
  "agents": {
    "globalPath": "~/.local/share/claude-agents/agents",
    "fallbackToLocal": true
  }
}
EOF
```

**Alternative: Global Symlink (Best for Development)**
```bash
# Clone to a permanent location
git clone https://github.com/avivl/claude-007-agents.git ~/.local/share/claude-007-agents

# Configure Claude Code to use the repository directly
cat > ~/.claude/config.json << 'EOF'
{
  "agents": {
    "globalPath": "~/.local/share/claude-007-agents/.claude/agents",
    "fallbackToLocal": true
  }
}
EOF

# Update anytime with:
cd ~/.local/share/claude-007-agents && git pull
```

**Pros:**
- ✅ Install once, use everywhere
- ✅ No per-project setup required
- ✅ Consistent agent experience across all projects
- ✅ Easy updates (just update the global installation)
- ✅ Clean project repositories (no agent files)

**Cons:**
- ❌ Requires Claude Code configuration
- ❌ Less flexibility for project-specific agent customization
- ❌ Dependency on global installation path

#### Option B: Copy Files (Recommended for Most Projects)
Copy the agent system to your project directory:

```bash
# Navigate to your project
cd /path/to/your/project

# Create the agents directory
mkdir -p .claude

# Copy all agent files
cp -r /path/to/claude-007-agents/.claude/agents .claude/

# Verify installation
ls .claude/agents/
# Should show: orchestrator.md, orchestrators/, universal/, backend/, frontend/, etc.
```

**Pros:**
- ✅ Full ownership of agent files in your project
- ✅ Can customize agents for your specific needs
- ✅ No external dependencies
- ✅ Works with version control (agents evolve with your project)

**Cons:**
- ❌ Manual updates required when the system improves
- ❌ Larger project size

#### Option C: Symlink (Recommended for Development/Multiple Projects)
Create symbolic links to the agent system:

```bash
# Navigate to your project
cd /path/to/your/project

# Create the .claude directory
mkdir -p .claude

# Create symlink to the agents directory
ln -s /path/to/claude-007-agents/.claude/agents .claude/agents

# Verify symlink
ls -la .claude/
# Should show: agents -> /path/to/claude-007-agents/.claude/agents
```

**Pros:**
- ✅ Automatic updates when you pull the latest agent system
- ✅ Smaller project footprint
- ✅ Perfect for development and experimentation
- ✅ Share improvements across multiple projects

**Cons:**
- ❌ Dependency on external repository
- ❌ Potential issues if the source repository moves
- ❌ Less suitable for production deployments

### 3. Verify Installation

Test that the agents are properly installed:

#### For Global Installation:
```bash
# Test from any directory
cd /any/project/directory

# Test with Claude Code (should automatically find global agents)
claude "List available agents"

# Test orchestrator functionality
claude "Use @team-configurator to analyze my project structure"

# Verify global configuration
cat ~/.claude/config.json
```

#### For Project-Specific Installation:
```bash
# Check agent directory structure in your project
ls .claude/agents/
# Expected output: orchestrator.md, orchestrators/, universal/, backend/, frontend/, business/, infrastructure/, etc.

# Test with Claude Code
claude "List available agents"

# Test with a simple orchestrator command
claude "Use @team-configurator to analyze my project structure"
```

### 4. Update Your Installation

#### Global Installation Updates:
```bash
# For copied global installation
cd /path/to/claude-007-agents
git pull
sudo cp -r .claude/agents/* /usr/local/share/claude-agents/agents/
# Or for home directory: cp -r .claude/agents/* ~/.local/share/claude-agents/agents/

# For global symlink installation
cd ~/.local/share/claude-007-agents
git pull
# Updates are automatic due to symlink
```

#### Project-Specific Updates:
```bash
# For copied files
cd /path/to/claude-007-agents
git pull
cp -r .claude/agents/* /path/to/your/project/.claude/agents/

# For project symlinks
cd /path/to/claude-007-agents
git pull
# Updates are automatic due to symlink
```

## 🚀 Quick Start

### Auto-Configuration (Recommended)
```bash
claude "Use team-configurator to set up my AI development team"
```
This will automatically:
- 🔍 **Detect your stack** (Rails, Django, React, TypeScript, etc.)
- 🤖 **Configure specialists** with resilience and logging integration  
- 📝 **Create/update CLAUDE.md** with your personalized team setup
- 🎯 **Provide usage examples** tailored to your project

### Manual Setup
1. **Use agents directly**: `"Use rails-backend-expert to build authentication with circuit breakers"`
2. **Leverage orchestration**: `"Use @orchestrator to build a scalable e-commerce platform"`
3. **Extend the system** by creating new agents with provided templates

## 🏗️ What Makes This Different

### Engineering Excellence First
Every agent prioritizes:
- 🏗️ **Code Quality**: Evil Corp standards for maintainable, extensible code
- ⚡ **Fault Tolerance**: Circuit breakers, retry mechanisms, graceful degradation
- 📊 **Structured Logging**: JSON logging, contextual information, observability
- 🔄 **Self-Healing**: Automatic recovery patterns and health monitoring

### Live MCP Integrations
- **GitHub MCP**: Live repository operations, PR management, workflow automation
- **Task Master MCP**: Project task management, complexity analysis, dependency tracking
- **Context7 MCP**: Up-to-date library documentation and code examples

## 🎯 Core Agent Categories

| Category | Agents | Key Capabilities |
|----------|--------|------------------|
| **Orchestrators** | 4 agents | **Advanced AI orchestration**, intelligent agent selection, parallel execution optimization |
| **Universal** | 8 agents | Cross-framework specialists (resilience, logging, architecture) |
| **Backend** | 13 agents | Framework specialists with integrated resilience (Rails, Django, Laravel, Go, Python, TypeScript) |
| **Frontend** | 9 agents | Modern web development (React, Vue, Next.js, mobile, WebAssembly) |
| **Business** | 5 agents | Product strategy, UX design, compliance (payments, healthcare) |
| **Infrastructure** | 10 agents | Cloud, DevOps, security, networking, IaC |
| **AI & Analysis** | 5 agents | Machine learning, NLP, computer vision, prompt engineering |
| **Automation** | 3 agents | CI/CD, testing, release management |
| **Data** | 3 agents | Data engineering, analytics, business intelligence |

## 📖 Usage Examples

### Framework Development
```bash
# Rails with resilience
"Use rails-backend-expert to create user management with circuit breakers"

# Django with structured logging  
"Use django-backend-expert to build API with comprehensive logging"

# React with error boundaries
"Use react-component-architect to create components with graceful error handling"
```

### Business & Product Strategy
```bash
# Product planning
"Use product-manager to define Q2 roadmap for our API platform"

# Requirements analysis
"Use business-analyst to gather requirements for payment system"

# UX design
"Use ux-designer to research users and create dashboard wireframes"
```

### Infrastructure & Operations
```bash
# Production troubleshooting
"Use devops-troubleshooter to investigate API 503 errors"

# Cloud architecture
"Use cloud-architect to design multi-region AWS architecture"

# Incident response
"Use incident-responder to coordinate payment service outage"
```

### Live Repository Operations
```bash
# Git workflow management
"Use git-expert to resolve merge conflict and create comprehensive PR"

# CI/CD pipeline management
"Use cicd-pipeline-engineer to debug failed GitHub Actions workflow"

# Code review with GitHub integration
"Use code-reviewer to analyze PR and submit review comments"
```

### Advanced Orchestration & Project Management
```bash
# Intelligent project orchestration with optimal agent team assembly
"Use orchestrator to build e-commerce platform with intelligent agent coordination"

# Advanced project analysis with PRD parsing and task generation  
"Use project-analyst to parse PRD and create comprehensive task breakdown with dependencies"

# Strategic technical leadership for complex architecture decisions
"Use tech-lead-orchestrator to design microservices architecture with cross-team coordination"

# Auto-configure optimal agent teams for your technology stack
"Use team-configurator to analyze my React+Rails project and optimize agent team"
```

## 🧠 Intelligent Orchestration System

### Advanced AI Orchestrators

| Orchestrator | Intelligence | Capabilities |
|--------------|-------------|--------------|
| **orchestrator** | **Multi-dimensional analysis**, parallel execution optimization | Smart agent selection, dynamic workflow generation, real-time collaboration |
| **tech-lead-orchestrator** | **Strategic technical leadership**, enterprise architecture | Multi-team coordination, technical risk management, senior-level decisions |
| **project-analyst** | **PRD intelligence**, requirements processing | Task generation, complexity analysis, stakeholder management |
| **team-configurator** | **Auto-detection**, team optimization | Technology stack analysis, optimal agent team assembly |

### Proactive Agents

Agents that automatically activate based on context:

| Agent | Auto-Triggers | Actions |
|-------|--------------|---------|
| **orchestrator** | Complex multi-step tasks, system design | Intelligent agent team assembly, parallel execution coordination |
| **software-engineering-expert** | Code implementation tasks | Enforces quality standards, provides architecture guidance |
| **code-reviewer** | After significant code changes | Reviews quality, security, and best practices |
| **tech-lead-orchestrator** | Architecture planning, technical strategy | Senior technical leadership, cross-team coordination |
| **team-configurator** | Project setup, team optimization | Auto-configures optimal agent teams for detected technology stack |

## 🛠️ Team Configuration Examples

### Django + React TypeScript
```markdown
✅ Configured Specialists:
- Product Strategy: @product-manager, @business-analyst, @ux-designer
- Software Engineering: @software-engineering-expert (Evil Corp standards)
- Backend: @django-backend-expert (with resilience + logging)
- Frontend: @react-component-architect (with error boundaries)
- Infrastructure: @cloud-architect, @database-admin, @devops-troubleshooter
- Security: @security-auditor, @privacy-engineer
```

### Rails + Vue.js
```markdown
✅ Configured Specialists:
- Backend: @rails-backend-expert (with CircuitBox integration)
- Frontend: @vue-component-architect (with error handling)
- Database: @rails-activerecord-expert, @database-admin
- Payments: @payment-integration-agent (Stripe, PCI compliance)
- Mobile: @mobile-developer (React Native)
```

## 📚 Documentation

- **[Architecture Guide](docs/ARCHITECTURE.md)**: System design, agent relationships, MCP integration
- **[Agent Development](docs/AGENT_DEVELOPMENT.md)**: Creating custom agents, advanced patterns
- **[MCP Integration](docs/MCP_INTEGRATION.md)**: MCP servers, tool configuration, workflows
- **[Predefined Workflows](docs/WORKFLOWS.md)**: Team patterns, orchestration strategies
- **[CLAUDE.md](CLAUDE.md)**: Your personalized AI development team configuration

## 🤝 Contributing

1. **Enhance agents**: Improve existing specialist capabilities
2. **Add frameworks**: Create new framework specialists  
3. **Extend MCP**: Add new MCP server integrations
4. **Improve workflows**: Add orchestration patterns
5. **Documentation**: Enhance guides and examples

## 📄 License

MIT License - See individual repositories for specific licenses:
- [awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents)
- [contains-studio/agents](https://github.com/contains-studio/agents)

---

*Built for developers who want resilient, observable, high-quality software with specialized AI agents and live integrations.*

**Remember: Your mother's treatment depends on delivering $1B-worthy code quality! 💪**