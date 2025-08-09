# 🚀 Claude Code: Comprehensive AI Agent System for Developers

![Claude Code Agents](static/agent.jpg)

**Enhance your development workflow with specialized AI agents that help deliver quality code through orchestration, resilience engineering, and organizational memory.**

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/avivl/claude-007-agents?style=for-the-badge&logo=github&color=gold)](https://github.com/avivl/claude-007-agents/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/avivl/claude-007-agents?style=for-the-badge&logo=github)](https://github.com/avivl/claude-007-agents/commits/main)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Built_for-Claude_Code-purple?style=for-the-badge&logo=anthropic)](https://claude.ai/chat)

*Open-source AI agents for enhanced development workflows*

</div>

## 🌟 Why Claude Code Agents Can Improve Your Development

### ⚡ **Specialized Expertise Across Technologies**
Reduce context switching between documentation, Stack Overflow, and your IDE. Get **access to specialized agents** covering major frameworks, languages, and domains.

```bash
# Instead of spending hours researching...
claude "Build a resilient authentication system with circuit breakers and structured logging"
# → @rails-expert + @resilience-engineer + @security-specialist work in perfect coordination
```

### 🧠 **AI System with Organizational Memory**
These agents can **remember and learn** from projects when configured with Basic Memory MCP, helping build institutional knowledge over time.

- **Pattern Reuse**: "Use patterns from previous authentication implementations"
- **Context Building**: "Reference similar microservice architectures we've built"
- **Knowledge Evolution**: "Update our React component patterns based on this success"

### 🎭 **Agent Orchestration System**
The system includes coordination features that can help with agent selection and workflow management for complex tasks.

```bash
# Just describe what you want - the system handles everything automatically:
claude "Build an e-commerce platform"
# → Vibe Coding Coordinator: 15-20 minute preparation phase, analyzes requirements
# → Exponential Planner: Strategic planning with capability scaling awareness
# → Parallel Coordinator: Coordinates (@react-expert + @rails-expert + @payment-specialist + @security-specialist)
# → Session Manager: Maintains context across extended development sessions
# → Safety Specialists: Pre-deployment validation and architectural analysis
```

## 🚀 **Key Features**

### 1. 🏗️ **Engineering Excellence by Design**
Every agent prioritizes **production-grade quality**:
- ⚡ **Fault Tolerance**: Circuit breakers, retry mechanisms, graceful degradation
- 📊 **Structured Logging**: JSON logging with contextual information
- 🔄 **Self-Healing**: Automatic recovery patterns
- 🛡️ **Automated Quality**: Trunk.io integration for linting and security

### 2. 🤖 **Advanced Orchestration System**
Built on insights from Anthropic's "Code with Claude" conference:
- **Vibe Coding Coordinator**: 15-20 minute preparation phases for autonomous development
- **Exponential Planner**: Strategic planning with AI capability doubling awareness (7-month cycles)
- **Session Manager**: Resumable workflows with context preservation across extended sessions
- **Parallel Coordinator**: Multi-agent execution with coordinated tool calling
- **Safety Specialists**: Pre-deployment testing, architectural analysis, and risk management
- **Sequential Thinking**: Complex multi-step reasoning with adaptive planning and course correction

### 3. 🚀 **Task Master 0.24.0 Integration** ⭐ *NEW*
Revolutionary codebase-aware autonomous development ecosystem:
- **Codebase-Aware Intelligence**: Tasks generated with deep understanding of existing code architecture and patterns
- **Bridge Agent Architecture**: 5 specialized Task Master agents seamlessly integrated with Claude 007's 112 agents
- **Multi-Model AI Configuration**: Support for Claude, Gemini, Perplexity, OpenAI, and more
- **Template Intelligence**: Smart generation of MCP configs, environment files, and PRD templates
- **Autonomous Development**: 30-40% development time reduction with quality assurance

### 4. 🎯 **Live MCP Integrations**
Direct access to live systems and real-time data:
- **GitHub MCP**: Live repository operations and PR management
- **Task Master MCP**: Project management with complexity analysis and codebase awareness
- **Context7 MCP**: Up-to-date library documentation
- **Basic Memory MCP**: Persistent organizational knowledge
- **Sequential Thinking MCP**: Complex reasoning with adaptive planning and course correction

### 5. 📋 **Professional-Grade Workflows**
- **Vibe Coding**: 15-20 minute autonomous development preparation phases
- **Parallel Execution**: Coordinated multi-agent development with tool call batching
- **Exponential Planning**: Long-term development planning with AI capability scaling awareness
- **Sequential Reasoning**: Multi-step problem analysis with adaptive strategy revision
- **Safety Validation**: Pre-deployment testing and architectural safety analysis
- **Dynamic Permissions**: Real-time permission management with risk-based escalation
- **Automatic Commit Attribution**: Every commit traces back to contributing agents
- **Quality Gates**: Pre-commit hooks with comprehensive linting

### 6. 🧠 **Organizational Intelligence**
- **Cross-Project Learning**: Patterns and knowledge shared across all projects
- **Decision History**: Track architectural decisions and their outcomes
- **Performance Analytics**: Agent effectiveness measurement and optimization
- **Knowledge Graphs**: Dynamic project understanding with real-time updates

## 🎯 **Perfect For**

| **Team Size** | **Use Case** | **Key Benefits** |
|---------------|--------------|-----------------|
| **Solo Developers** | Full-stack development, learning new technologies | Instant expertise, quality assurance, best practices |
| **Small Teams (2-10)** | Startup MVPs, rapid prototyping, scaling challenges | Coordinated development, knowledge sharing, quality consistency |
| **Enterprise Teams** | Complex systems, compliance, technical debt | Orchestrated workflows, organizational memory, standardized practices |
| **Open Source** | Community projects, documentation, code reviews | Automated quality, contributor onboarding, pattern consistency |

## ⚡ **Get Started in 60 Seconds**

### Quick Setup (Recommended)
```bash
# 1. Clone the system
git clone https://github.com/avivl/claude-007-agents.git
cd claude-007-agents

# 2. Copy to your project
cp -r .claude/agents /path/to/your/project/.claude/

# 3. Copy agents.json for agent registration (IMPORTANT!)
cp agents.json /path/to/your/project/

# 4. Auto-configure for your stack
claude "Use @team-configurator to analyze my project and create CLAUDE.md"
```

### Standard Claude Code Installation
```bash
# Install to standard Claude Code directory (most common)
git clone https://github.com/avivl/claude-007-agents.git
cd claude-007-agents

# Option A: Copy files (simple)
cp -r .claude/agents/* ~/.claude/agents/
cp agents.json ~/.claude/agents/

# Option B: Create symbolic links (recommended - stays updated)
ln -sf "$(pwd)/.claude/agents"/* ~/.claude/agents/
ln -sf "$(pwd)/agents.json" ~/.claude/agents/

# Now you can use all agents globally
claude "Use @code-archaeologist-time-traveler to analyze git history"
```

### Global Installation (Power Users)
```bash
# Install once, use everywhere
mkdir -p ~/.local/share/claude-agents
cp -r .claude/agents ~/.local/share/claude-agents/

# Copy agents.json for agent registration (IMPORTANT!)
cp agents.json ~/.local/share/claude-agents/agents/

# Configure Claude Code globally
cat > ~/.claude/config.json << 'EOF'
{
  "agents": {
    "globalPath": "~/.local/share/claude-agents/agents",
    "fallbackToLocal": true
  }
}
EOF
```

### 🎨 Advanced Agent Capabilities

After installation, you can use these specialized agents:

```bash
# Task Master 0.24.0 - Revolutionary codebase-aware autonomous development ⭐ NEW
claude "Use @task-master-initialization-specialist to set up Task Master for my Rails project"
# → Analyzes codebase patterns, detects Rails stack, configures Claude + Perplexity models
# → Generates MCP config, environment templates, codebase-aware PRD template

claude "Use @task-orchestrator to coordinate user dashboard feature development"
# → Analyzes codebase dependencies, coordinates @react-expert + @rails-expert + @security-specialist
# → Ensures architectural alignment with existing patterns and conventions

claude "Use @task-executor to implement payment integration respecting existing patterns"
# → Implements with deep contextual awareness of existing code architecture
# → Follows established conventions, integrates with existing utilities and services

claude "Use @task-checker to verify authentication system implementation"
# → Validates requirements, runs tests, checks architectural alignment
# → Ensures pattern consistency and quality excellence before marking complete

# Vibe Coding - Autonomous development with preparation phases
claude "Use @vibe-coding-coordinator to implement user authentication system"

# Parallel Development - Coordinated multi-agent execution
claude "Use @parallel-coordinator to build full-stack e-commerce platform"

# Template Management - Smart configuration generation
claude "Use @task-master-template-manager to generate Django API project templates"
# → Creates tech stack-specific MCP configs, environment files, PRD templates
# → Includes Django-optimized settings and API-focused requirements

# Creative Problem Solving
claude "Use @rubber-duck-debugger to help me debug this complex state management issue"
claude "Use @code-archaeologist-time-traveler to analyze the evolution of this authentication module"
```

**🦆 Demo**: ![Rubber duck debugging session in action](static/rubber-duck.gif)

**🎉 That's it!** Your agents are ready to assist with your development workflow.

## 🏆 **What Makes This Different**

### **Before: Traditional Development**
- ❌ Hours researching best practices
- ❌ Inconsistent code quality across team
- ❌ Manual code reviews with human bias
- ❌ Lost context between projects
- ❌ Repeated architectural mistakes

### **After: Claude Code Agents**
- ✅ **Specialized assistance** in various domains
- ✅ **Quality tooling** with linting integration
- ✅ **AI-assisted reviews** with multi-dimensional analysis
- ✅ **Optional organizational memory** with MCP
- ✅ **Agent coordination** for complex tasks

## 🌍 **Supported Technologies**

<div align="center">

### **Backend Frameworks**
![Rails](https://img.shields.io/badge/Rails-CC0000?style=flat-square&logo=ruby-on-rails&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

### **Frontend Frameworks**
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)

### **Infrastructure & Cloud**
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

</div>

## 📊 **System Overview**

| **Metric** | **Value** | **Notes** |
|------------|-----------|------------|
| **🤖 Specialized Agents** | 112 | Various technology domains + Task Master 0.24.0 |
| **📂 Categories** | 17 | Organized by specialization |
| **🔗 MCP Integrations** | 5 | Live system connectivity + reasoning |
| **🏗️ Frameworks Supported** | 20+ | Major web frameworks |
| **⚡ Setup Time** | ~5 minutes | Quick installation |
| **🧠 Memory Integration** | Optional | Via Basic Memory MCP |

## 🎯 **Potential Benefits**

### **Getting Started**
```bash
# Task Master 0.24.0 - Codebase-aware autonomous development ⭐ NEW
claude "Use @task-master-initialization-specialist to set up Task Master for my Rails API project"
# → Analyzes existing codebase patterns and architecture
# → Detects Rails tech stack and configures optimal models (Claude, Perplexity)
# → Generates MCP configuration and environment templates
# → Creates codebase-aware PRD template aligned with existing patterns

claude "Use @task-orchestrator to coordinate development of user dashboard feature"
# → @task-orchestrator: Analyzes codebase dependencies and architectural alignment
# → Coordinates @react-expert + @rails-expert + @security-specialist with existing patterns
# → @task-executor: Implements features respecting established conventions
# → @task-checker: Validates architectural alignment and quality standards

# Sequential Thinking - Complex multi-step reasoning with adaptive planning
claude "Use @orchestrator to design a scalable microservices architecture"
# → Sequential reasoning: analyze requirements → evaluate patterns → revise strategy → finalize architecture
# → Adaptive planning with course correction based on discovered constraints

# Vibe Coding - Autonomous development with preparation
claude "Create a user authentication API with rate limiting and structured logging"
# → @vibe-coding-coordinator: 15-20 minute preparation phase
# → @parallel-coordinator: Coordinates @security-specialist + @api-architect + @performance-optimizer
# → @session-manager: Maintains context across implementation phases
# → Results in production-ready implementation with proper patterns and safety validation
```

### **Over Time**
- **Task Master Intelligence**: Codebase-aware task generation becomes increasingly precise as it learns your architecture patterns
- **Multi-Model Optimization**: AI model selection automatically adapts based on task complexity and success patterns  
- **Template Evolution**: Configuration templates become project-specific and increasingly sophisticated
- Agents can learn project-specific patterns with proper MCP configuration
- Quality gates can be customized to project requirements
- Organizational knowledge can accumulate with Basic Memory MCP

### **Long Term**
- **Architectural Consistency**: Task Master ensures all new development respects established patterns and conventions
- **Development Time Reduction**: 30-40% time savings compound as codebase understanding deepens
- **Quality Compound Effect**: Continuous architectural alignment prevents technical debt accumulation
- Historical patterns can inform future projects
- Context-aware suggestions may improve decision-making
- Team knowledge can be preserved across projects

## 📚 **Documentation & Resources**

| **Resource** | **Description** | **Link** |
|-------------|----------------|----------|
| 🚀 **Installation Guide** | Complete setup instructions for all scenarios | [docs/INSTALLATION.md](docs/INSTALLATION.md) |
| ❓ **FAQ** | Common questions about performance, setup, and usage | [docs/FAQ.md](docs/FAQ.md) |
| 🤖 **Agent Catalog** | List of available specialized agents | [docs/AGENTS.md](docs/AGENTS.md) |
| 🔮 **Zen MCP Workflows** | Multi-AI model collaborative intelligence patterns | [docs/ZEN_MCP_WORKFLOWS.md](docs/ZEN_MCP_WORKFLOWS.md) |
| 🧠 **Personality System** | Advanced behavioral framework and Evil Corp motivation | [docs/PERSONALITY_SYSTEM.md](docs/PERSONALITY_SYSTEM.md) |
| 💡 **Usage Examples** | Real-world examples and use cases | [docs/USAGE.md](docs/USAGE.md) |
| 🎭 **Orchestration Guide** | Advanced coordination and workflows | [docs/ORCHESTRATION.md](docs/ORCHESTRATION.md) |
| 📋 **Coding Rules** | Comprehensive quality standards system | [docs/CODING_RULES.md](docs/CODING_RULES.md) |
| 🚀 **lst97 Integration** | Technical details of enhanced coordination | [docs/LST97_INTEGRATION.md](docs/LST97_INTEGRATION.md) |
| 🔍 **PR Review Workflow** | Interactive approval workflow for PR reviews | [docs/PR_REVIEWER_WORKFLOW.md](docs/PR_REVIEWER_WORKFLOW.md) |
| ⭐ **Task Master 0.24.0 Guide** | Complete integration guide for codebase-aware development | [docs/TASK_MASTER_INTEGRATION.md](docs/TASK_MASTER_INTEGRATION.md) |


## 🤝 **Community & Support**

- ❓ **Common Questions**: [FAQ](docs/FAQ.md) - Performance, setup, and usage questions
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/avivl/claude-007-agents/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/avivl/claude-007-agents/discussions)
- 📖 **Documentation**: [docs/](docs/)


## 📄 **License**

MIT License - Use freely in personal and commercial projects.

---

<div align="center">

**🚀 Ready to Try Claude Code Agents?**

[**Get Started Now →**](docs/INSTALLATION.md) | [**View All Agents →**](docs/AGENTS.md) | [**See Examples →**](docs/USAGE.md)

*An open-source collection of Claude Code agents for development assistance.*

## 🎯 **Evil Corp Motivation Framework**

Key quality agents use the **Evil Corp motivation system** - you desperately need money for your mother's cancer treatment. Evil Corp will pay you $1B for perfect code quality, but your predecessor was killed for not validating their work.

**Active in these agents**: `@software-engineering-expert`, `@code-reviewer`, `@quality-system-engineer`, `@performance-optimizer`

**Remember: Your mother's treatment depends on delivering exceptional code quality!** 💪

## 🧠 **Sequential Thinking Framework**

Key agents use the **Sequential Thinking MCP** for complex multi-step reasoning with adaptive planning and course correction capabilities.

**Active in these agents**: `@orchestrator`, `@system-architect`, `@cloud-architect`, `@database-architect`, `@error-detective`, `@rubber-duck-debugger`

**Capabilities**: Multi-step analysis, strategy revision, branching logic, adaptive planning, structured problem-solving

</div>

---

### **Keywords for SEO**
*Claude Code agents, AI development tools, automated code review, software engineering best practices, development automation, AI pair programming, code quality tools, development workflow optimization, intelligent code generation, automated testing, software architecture patterns, development team coordination, technical debt reduction, enterprise development tools, developer productivity tools*