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

**Step 1: Analyze Your Project**
```bash
# Analyze your project and get team configuration recommendations
claude "Use @team-configurator to analyze my project structure"
```

**Step 2: Generate CLAUDE.md File**
```bash
# Create your personalized CLAUDE.md based on the analysis (RECOMMENDED)
claude "Use @team-configurator to analyze my project structure. Based on the team configuration analysis, create a CLAUDE.md file for my project"
```

This two-step process will automatically:
- 🔍 **Detect your stack** (Rails, Django, React, TypeScript, Go, etc.)
- 🤖 **Configure specialists** with resilience and logging integration  
- 📋 **Generate team recommendations** with optimal agent configurations
- 🎯 **Provide usage examples** tailored to your project
- ⚠️ **Include critical commit requirements** at the top of CLAUDE.md
- ✅ **Add pre-commit checklist** with project-specific guidance
- 📚 **Include commit examples** with proper agent attribution

### Alternative CLAUDE.md Creation Methods

```bash
# Option A: Single command (recommended for new projects)
claude "Use @team-configurator to analyze my project structure. Based on the team configuration analysis, create a CLAUDE.md file for my project"

# Option B: Two separate commands
claude "Use @team-configurator to analyze my project structure"
claude "Based on the team configuration analysis, create a CLAUDE.md file for my project"

# Option C: Copy and customize the template (manual approach)
cp CLAUDE.md /path/to/your/project/CLAUDE.md
# Then edit to match your project's specific needs
```

### What Your Generated CLAUDE.md Will Include:

✅ **Critical Requirements Section** (at the very top):
- Prominent commit message requirements warning
- Pre-commit checklist with 4 mandatory steps
- Project-specific guidance for different change types

✅ **Project-Optimized Content**:
- 📝 **Your personalized agent team** optimized for your technology stack
- 🎯 **Usage examples** specific to your project architecture  
- 🔧 **Workflow configurations** tailored to your development process
- 📊 **Agent relationships** and collaboration patterns

✅ **Detailed Guidelines Section**:
- Complete commit message format requirements
- At least 4 different commit examples with agent attribution
- Implementation notes about automatic agent name appending

### 📝 Automatic Agent Attribution in Commits

Once you have a CLAUDE.md file in your project, **all commit messages will automatically include the agents that contributed to the code**:

```bash
# Your commits will automatically look like this:
feat(auth): implement user authentication system - @rails-backend-expert @security-auditor
fix(api): resolve connection timeout issues - @go-resilience-engineer @performance-optimizer
docs(readme): update installation instructions - @documentation-specialist
refactor(db): optimize query performance - @database-admin @performance-optimizer
```

**How it works:**
- 🤖 Claude Code automatically detects which agents worked on your changes
- ✅ Agent names are appended to every commit message without you asking
- 🔍 Provides complete traceability of which agents contributed to each change
- 📊 Essential for project maintenance and code archaeology

**This happens automatically** - you don't need to remember to add agent names manually!

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
- **GitHub MCP**: Live repository operations, PR management, workflow automation via GitHub API
- **Task Master MCP**: Project task management, complexity analysis, dependency tracking, PRD parsing
- **Context7 MCP**: Up-to-date library documentation, API references, current code examples
- **Basic Memory MCP**: Persistent organizational knowledge, pattern storage, cross-project learning

## 🎯 Core Agent Categories

| Category | Agents | Key Capabilities |
|----------|--------|------------------|
| **Orchestrators** | 4 agents | **Advanced AI orchestration**, intelligent agent selection, parallel execution optimization |
| **Universal** | 8 agents | Cross-framework specialists (resilience, logging, architecture) + **Basic Memory MCP** |
| **Backend** | 13 agents | Framework specialists with integrated resilience + **Basic Memory MCP** for pattern storage |
| **Frontend** | 9 agents | Modern web development + **Basic Memory MCP** for component pattern memory |
| **Business** | 5 agents | Product strategy, UX design, compliance + **Basic Memory MCP** for requirements memory |
| **Infrastructure** | 10 agents | Cloud, DevOps, security, networking, IaC + **Basic Memory MCP** for configuration patterns |
| **AI & Analysis** | 5 agents | Machine learning, NLP, computer vision, prompt engineering + **Basic Memory MCP** |
| **Automation** | 3 agents | CI/CD, testing, release management + **Basic Memory MCP** for automation patterns |
| **Data** | 3 agents | Data engineering, analytics, business intelligence + **Basic Memory MCP** |

**🧠 Organizational Memory**: All core development agents include **Basic Memory MCP integration** for persistent knowledge storage, pattern reuse, and cross-project learning.

## 📖 Usage Examples

### Framework Development with Memory Integration
```bash
# Rails with resilience and pattern memory
"Use rails-backend-expert to create user management with circuit breakers, storing reusable authentication patterns"

# Django with structured logging and organizational knowledge
"Use django-backend-expert to build API with comprehensive logging, referencing previous implementation patterns"

# React with error boundaries and component memory
"Use react-component-architect to create components with graceful error handling, building on previous component patterns"

# Pattern discovery across projects
"Use any expert agent to search previous implementations and build context for similar challenges"
```

### Business & Product Strategy with Knowledge Continuity
```bash
# Product planning with historical context
"Use product-manager to define Q2 roadmap for our API platform, building on previous product decisions and user feedback patterns"

# Requirements analysis with organizational knowledge
"Use business-analyst to gather requirements for payment system, referencing similar implementation challenges from past projects"

# UX design with pattern reuse
"Use ux-designer to research users and create dashboard wireframes, leveraging previous design patterns and user research insights"
```

### Infrastructure & Operations with Configuration Memory
```bash
# Production troubleshooting with historical incident knowledge
"Use devops-troubleshooter to investigate API 503 errors, referencing previous incident patterns and resolution strategies"

# Cloud architecture with organizational blueprints
"Use cloud-architect to design multi-region AWS architecture, building on previous infrastructure patterns and lessons learned"

# Incident response with runbook memory
"Use incident-responder to coordinate payment service outage, leveraging stored incident response patterns and team communication strategies"
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

### 🧠 Organizational Memory & Knowledge Management
```bash
# Cross-project pattern discovery
"Use rails-backend-expert to find authentication patterns from previous projects before implementing new user system"

# Architectural decision continuity
"Use software-engineering-expert to build context from past architectural decisions before designing new microservice"

# Living documentation and knowledge evolution
"Use documentation-specialist to update and maintain our evolving API patterns and implementation guidelines"

# Performance optimization knowledge reuse
"Use performance-optimizer to reference previous database optimization techniques for similar query patterns"

# Security pattern consistency
"Use security-auditor to apply consistent security patterns across projects based on organizational knowledge"
```

## 🧠 Intelligent Orchestration System

### Advanced AI Orchestrators

| Orchestrator | Intelligence | Capabilities |
|--------------|-------------|--------------|
| **orchestrator** | **Multi-dimensional analysis**, parallel execution optimization | Smart agent selection, dynamic workflow generation, real-time collaboration |
| **tech-lead-orchestrator** | **Strategic technical leadership**, enterprise architecture | Multi-team coordination, technical risk management, senior-level decisions |
| **project-analyst** | **PRD intelligence**, requirements processing | Task generation, complexity analysis, stakeholder management |
| **team-configurator** | **Auto-detection**, team optimization | Technology stack analysis, optimal agent team assembly |

### 🧠 Organizational Memory Integration

**Every Core Development Agent** includes Basic Memory MCP integration:

| Memory Capability | Agent Benefits | Cross-Project Value |
|------------------|----------------|-------------------|
| **Pattern Storage** | Store successful implementations, architectures, configurations | Reuse proven solutions, avoid recreating patterns |
| **Knowledge Retrieval** | Access previous implementations, decisions, solutions | Build on existing knowledge, maintain consistency |
| **Context Building** | Gather related information from past projects and decisions | Make informed decisions based on historical context |
| **Living Documentation** | Maintain evolving guides, patterns, best practices | Keep organizational knowledge current and accessible |
| **Learning Continuity** | Learn from past successes and failures across projects | Continuous improvement and knowledge accumulation |

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

*Built for developers who want resilient, observable, high-quality software with specialized AI agents, live integrations, and persistent organizational knowledge.*

**🧠 Now with comprehensive Basic Memory MCP integration across all core development agents for pattern reuse, knowledge continuity, and cross-project learning!**

**Remember: Your mother's treatment depends on delivering $1B-worthy code quality! 💪**