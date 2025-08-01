# System Architecture

## Overview

The Unified Agent System is a comprehensive AI agent framework designed for modern software development. It combines 68 specialized agents with **advanced AI orchestration intelligence**, integrated resilience engineering, structured logging, and live MCP (Model Context Protocol) integrations.

## Core Architecture Principles

### Advanced AI Orchestration Intelligence
The system features sophisticated orchestration capabilities:
- **Multi-Dimensional Analysis**: Complex scoring across technical, domain, workflow, and risk dimensions
- **Intelligent Agent Selection**: AI-powered agent matching with collaboration compatibility analysis
- **Parallel Execution Optimization**: Dynamic workflow generation with dependency management
- **Real-Time Collaboration**: Inter-agent communication protocols and conflict resolution
- **Adaptive Learning**: Continuous improvement based on success patterns and performance metrics

### Engineering Excellence First
Every agent in the system prioritizes:
- **Code Quality**: Evil Corp standards for maintainable, readable, extensible code
- **Automated Quality**: Trunk.io integration for linting, formatting, and security scanning
- **Fault Tolerance**: Circuit breakers, retry mechanisms, graceful degradation
- **Structured Logging**: JSON logging, contextual information, observability
- **Self-Healing**: Automatic recovery patterns and health monitoring
- **Error Boundaries**: Comprehensive error handling and classification

### Progressive Enhancement
The system follows a layered approach:
1. **Orchestration Intelligence**: Advanced AI coordination and team assembly
2. **Universal Principles**: Core software engineering concepts
3. **Framework Integration**: Built into backend framework agents
4. **Language Specialization**: Library-specific implementations
5. **Advanced Patterns**: Distributed system architecture

## Agent Directory Structure

```
.claude/agents/
├── agents.json                    # System configuration
├── CLAUDE.md                      # Auto-generated team configuration
├── universal/                     # Cross-Framework Specialists (11 agents)
│   ├── software-engineering-expert.md # Code quality & architecture
│   ├── quality-system-engineer.md     # Trunk.io automation & quality gates
│   ├── pr-reviewer-specialist.md      # Manual PR reviews & GitHub integration
│   ├── git-expert.md                  # Git workflow management & GitHub integration
│   ├── resilience-engineer.md         # Fault tolerance patterns
│   ├── logging-concepts-engineer.md   # Structured logging
│   ├── api-architect.md               # REST/GraphQL design
│   ├── graphql-architect.md           # GraphQL federation
│   ├── backend-developer.md           # General backend patterns
│   ├── frontend-developer.md          # UI/UX implementation
│   └── tailwind-css-expert.md         # Responsive design
├── backend/                       # Framework Specialists (13 agents)
│   ├── rails-backend-expert.md        # Rails + CircuitBox + logging
│   ├── django-backend-expert.md       # Django + Hyx + logging
│   ├── laravel-backend-expert.md      # Laravel + resilience + logging
│   ├── go-resilience-engineer.md      # Go + GoBreaker patterns
│   ├── go-zap-logging.md              # Zap structured logging
│   ├── python-hyx-resilience.md       # Python async resilience
│   ├── typescript-cockatiel-resilience.md # TS resilience patterns
│   └── typescript-pino-logging.md     # Pino high-performance logging
├── frontend/                      # Modern Web Development (9 agents)
│   ├── react-component-architect.md   # React + error boundaries
│   ├── vue-component-architect.md     # Vue.js + composition API
│   ├── mobile-developer.md            # React Native, Flutter
│   ├── webassembly-specialist.md      # WASM performance
│   ├── micro-frontend-architect.md    # Module federation
│   └── pwa-specialist.md              # Progressive Web Apps
├── business/                      # Strategy & Compliance (5 agents)
│   ├── product-manager.md              # Feature prioritization
│   ├── business-analyst.md             # Requirements gathering
│   ├── ux-designer.md                  # User research, wireframes
│   ├── payment-integration-agent.md    # Stripe, PCI compliance
│   └── healthcare-compliance-agent.md  # HIPAA, medical data
├── infrastructure/                # Operations & Cloud (10 agents)
│   ├── devops-troubleshooter.md        # Production debugging
│   ├── cloud-architect.md              # Multi-cloud design
│   ├── database-admin.md               # Database optimization
│   ├── incident-responder.md           # Crisis management
│   ├── network-engineer.md             # DNS, load balancing
│   ├── terraform-specialist.md         # Infrastructure as Code
│   ├── serverless-architect.md         # Event-driven systems
│   ├── site-reliability-engineer.md    # SLO/SLA management
│   ├── observability-engineer.md       # Monitoring, tracing
│   └── pulumi-typescript-specialist.md # TypeScript IaC
├── security/                      # Security & Privacy (3 agents)
│   ├── security-auditor.md             # Penetration testing
│   ├── devsecops-engineer.md           # Security integration
│   └── privacy-engineer.md             # GDPR/CCPA compliance
├── ai/                           # AI & Machine Learning (3 agents)
│   ├── machine-learning-engineer.md    # MLOps, model deployment
│   ├── computer-vision-specialist.md   # Image processing, CNNs
│   └── nlp-llm-integration-expert.md   # NLP, conversational AI
├── automation/                   # CI/CD & QA (3 agents)
│   ├── cicd-pipeline-engineer.md       # GitHub Actions, pipelines
│   ├── qa-automation-engineer.md       # Test automation
│   └── release-manager.md              # Release orchestration
├── data/                         # Data & Analytics (3 agents)
│   ├── data-engineer.md                # Data pipelines, ETL
│   ├── analytics-implementation-specialist.md # GA4, tracking
│   └── business-intelligence-developer.md     # Dashboards, BI
├── core/                         # Development Tools (6 agents)
│   ├── code-archaeologist.md           # Legacy code exploration
│   ├── code-reviewer.md                # Quality assurance
│   ├── documentation-specialist.md     # Technical writing
│   ├── performance-optimizer.md        # Performance tuning
│   └── code-refactoring-specialist.md  # Legacy modernization
├── orchestrator.md                # Advanced AI Orchestrator (master coordinator)
└── orchestrators/                # Advanced Orchestration Specialists (4 agents)
    ├── orchestrator.md                  # Advanced AI orchestration with intelligent agent selection
    ├── tech-lead-orchestrator.md       # Strategic technical leadership and enterprise architecture
    ├── project-analyst.md              # PRD intelligence and requirements processing
    └── team-configurator.md            # Auto-detection and team optimization
```

## Advanced Orchestration Intelligence Architecture

### Intelligent Orchestration System
The system features a sophisticated four-tier orchestration architecture:

#### Tier 1: Master Orchestrator (`@orchestrator`)
**Advanced AI Orchestration Engine:**
- **Multi-Dimensional Analysis**: Complex scoring across technical, domain, workflow, and risk dimensions (1-10 scale)
- **Smart Agent Selection**: AI-powered compatibility matrix with weighted criteria (expertise match, collaboration history, output quality)
- **Parallel Execution Optimization**: Dynamic workflow generation with fan-out, pipeline, map-reduce, and orchestrated parallel patterns
- **Real-Time Collaboration**: Inter-agent communication protocols with context packages and conflict resolution
- **Adaptive Learning**: Continuous improvement based on success patterns and performance analytics

#### Tier 2: Strategic Leadership (`@tech-lead-orchestrator`)
**Enterprise Technical Leadership:**
- **Strategic Architecture**: Enterprise system design, technology roadmap planning, technical risk management
- **Multi-Team Coordination**: Cross-functional team leadership, resource optimization, conflict resolution
- **Technical Decision Framework**: Data-driven decision making with stakeholder alignment and ADR documentation
- **Crisis Leadership**: Technical incident response, root cause analysis, strategic recovery planning

#### Tier 3: Project Intelligence (`@project-analyst`)
**Requirements & Task Intelligence:**
- **PRD Processing Engine**: Intelligent parsing, requirement extraction, stakeholder mapping, success criteria analysis
- **AI-Powered Task Decomposition**: Automatic task generation with dependency mapping and complexity assessment
- **Multi-Dimensional Complexity Analysis**: Technical, business, team, and timeline complexity scoring
- **Stakeholder Management**: Communication strategy, change management, cross-functional coordination

#### Tier 4: Team Optimization (`@team-configurator`)
**Intelligent Team Assembly:**
- **Technology Stack Detection**: Automatic analysis of project files, frameworks, and architecture patterns
- **Optimal Team Composition**: AI-powered agent selection with performance-based optimization
- **Dynamic Team Optimization**: Continuous improvement based on success metrics and collaboration effectiveness
- **Custom Agent Configuration**: Project-specific agent customization and specialization

### Orchestration Intelligence Patterns

#### Pattern 1: Complexity-Adaptive Routing
- **Simple Tasks (1-3)**: Direct delegation to single specialist with quality checkpoint
- **Medium Tasks (4-6)**: 2-3 agent coordination with parallel streams and integration checkpoints  
- **Complex Tasks (7-10)**: Full three-phase orchestration with multiple parallel workstreams

#### Pattern 2: Domain-Intelligent Assembly
- **Full-Stack Development**: Primary (backend + frontend specialists), Support (database + API), Quality (code review + security), Integration (DevOps)
- **Enterprise Architecture**: Planning (cloud + system architects), Security (audit + DevSecOps), Implementation (framework specialists), Operations (SRE + observability)
- **AI/ML Products**: AI Leadership (ML engineer + data engineer), Technical Foundation (Python + cloud), Product & Quality (product manager + UX), Specialized Support (BI + analytics)

#### Pattern 3: Performance-Optimized Execution
- **Parallel Stream Orchestration**: Independent streams (backend + frontend + infrastructure), dependency streams (database → API → frontend)
- **Resource Management**: Agent load balancing, context sharing, quality gates, adaptive routing
- **Critical Path Optimization**: Focus resources on bottleneck tasks, speculative execution, result streaming

## Agent Relationships and Dependencies

### Orchestration Leadership Dependencies
All complex workflows are coordinated by the orchestration tier:
- `@orchestrator` provides intelligent coordination for multi-agent workflows
- `@tech-lead-orchestrator` provides strategic technical leadership for enterprise initiatives
- `@project-analyst` provides requirements intelligence and task generation
- `@team-configurator` provides optimal agent team assembly and configuration

### Universal Foundations
All backend framework agents depend on and follow guidelines from:
- `@quality-system-engineer` for automated code quality, linting, and security scanning
- `@resilience-engineer` for fault tolerance patterns
- `@logging-concepts-engineer` for structured logging practices

### Quality System Architecture

#### Automated Quality Infrastructure (`@quality-system-engineer`)
**Universal Quality Automation:**
- **Repository Analysis**: Automatic detection of `.trunk` directory, file type analysis, language-specific linter selection
- **Trunk.io Integration**: Multi-language linter configuration (Python: black, flake8, mypy; JS/TS: eslint, prettier; Go: gofmt, golangci-lint)
- **Pre-Commit Quality Gates**: Automated formatting (`trunk fmt`), issue resolution (`trunk check --fix`), validation (`trunk check --ci`)
- **Security Scanning**: Universal tools (osv-scanner, gitleaks) for vulnerability detection and secret scanning
- **User Transparency**: Clear notifications about configuration changes, quality actions, and issue resolution

#### Quality Integration Patterns
- **Proactive Activation**: Automatically triggers before any commit across all agents
- **Cross-Agent Coordination**: Integrates with `@code-reviewer` for enhanced quality analysis
- **CI/CD Integration**: Works with `@cicd-pipeline-engineer` for pipeline quality gates
- **Basic Memory Integration**: Stores quality configurations, patterns, and organizational standards

### Manual/On-Demand Agent Architecture

#### User-Controlled Workflow Agents (`@pr-reviewer-specialist`)
**Manual Activation Pattern:**
- **Non-Proactive**: Only activates when explicitly invoked by user
- **GitHub Repository Detection**: Automatically extracts repository URL from `git config --get remote.origin.url`
- **Interactive Workflow**: Multi-phase process requiring user approval before actions
- **External System Integration**: Direct GitHub API operations via GitHub MCP
- **Knowledge Persistence**: Stores interaction patterns and preferences in Basic Memory MCP

#### Manual Agent Integration Patterns
- **Explicit Invocation**: User must specifically request agent by name with parameters
- **Interactive Approval Gates**: All external actions require user confirmation
- **GitHub MCP Dependency**: Heavy reliance on GitHub MCP for repository operations
- **Context Building**: Gathers comprehensive information before presenting findings
- **User Experience Focus**: Optimized for human oversight and decision-making

#### Planned Manual Agent Categories
- **External System Integrations**: Agents requiring third-party API interactions
- **Security & Compliance**: Agents requiring human judgment for sensitive operations
- **Analysis & Reporting**: Deep-dive investigations requiring user input and approval
- **Workflow Orchestration**: Complex multi-step processes needing human oversight

### Hierarchical Dependencies
Specialized agents build upon universal foundations:
- Language-specific resilience agents extend `@resilience-engineer`
- Framework logging agents implement `@logging-concepts-engineer` patterns
- ORM specialists depend on their framework experts
- API developers build on backend framework knowledge

### Orchestration-Enhanced Dependencies
- Complex workflows are routed through the orchestration intelligence system
- Agent selection is optimized based on compatibility matrices and performance data
- Cross-agent collaboration is coordinated through structured communication protocols
- Quality assurance is integrated throughout orchestrated workflows

### MCP-Enhanced Dependencies
- Repository-related agents leverage GitHub MCP for live operations
- Project management agents integrate with Task Master MCP for structured tracking
- Documentation and development agents utilize Context7 MCP for current library information
- Orchestration agents utilize all MCP servers for enhanced coordination capabilities

## MCP Integration Architecture

### Available MCP Servers
- **GitHub MCP** (`mcp__github__*`) - Live repository operations and GitHub API integration
- **Task Master MCP** (`mcp__task-master__*`) - Project task management and complexity analysis
- **Context7 MCP** (`mcp__context7__*`) - Live library documentation and code examples

### MCP-Enhanced Agent Capabilities

#### GitHub MCP Integration
- `@git-expert` → Real-time PR management, merge conflict resolution, workflow operations
- `@code-reviewer` → Live PR reviews, code quality checks with GitHub integration
- `@cicd-pipeline-engineer` → GitHub Actions management, workflow monitoring, artifact handling
- `@release-manager` → Branch management, deployment orchestration via GitHub
- `@devops-troubleshooter` → Workflow debugging, job log analysis, CI/CD troubleshooting

#### Task Master MCP Integration
- `@orchestrator` → Advanced project orchestration, complexity analysis, intelligent task coordination
- `@tech-lead-orchestrator` → Strategic project initialization, enterprise complexity analysis, cross-team task coordination
- `@project-analyst` → PRD parsing, intelligent requirement analysis, AI-powered task generation and dependency management
- `@team-configurator` → Agent workflow setup, task tracking configuration, performance-based team optimization
- `@software-engineering-expert` → Quality assessment via task complexity scoring

#### Context7 MCP Integration
- `@documentation-specialist` → Live library documentation access, API reference retrieval
- `@software-engineering-expert` → Up-to-date framework patterns, best practices documentation
- Framework specialists (Rails, Django, Laravel, React, Vue, Next.js) → Current documentation and patterns
- `@api-architect` → API design patterns, framework-specific implementations
- `@frontend-developer` → Frontend library documentation, framework comparisons

## Configuration System

### agents.json Structure
```json
{
  "version": "1.4.0",
  "description": "Unified Agent System with resilience and logging integration",
  "agents": [
    {
      "name": "software-engineering-expert",
      "file": ".claude/agents/universal/software-engineering-expert.md",
      "description": "Comprehensive software engineering specialist with Evil Corp motivation",
      "category": "universal",
      "proactive": true,
      "triggers": ["code", "implement", "build", "create", "develop", "refactor"],
      "dependencies": []
    }
  ],
  "categories": {
    "universal": { "agents": [...] },
    "backend": { "agents": [...] },
    "frontend": { "agents": [...] },
    "business": { "agents": [...] },
    "infrastructure": { "agents": [...] },
    "security": { "agents": [...] },
    "ai": { "agents": [...] },
    "automation": { "agents": [...] },
    "data": { "agents": [...] },
    "core": { "agents": [...] },
    "orchestrator": { "agents": [...] }
  },
  "workflows": {
    "backend-resilience": { "phases": [...] },
    "new-backend-service": { "phases": [...] },
    "frontend-development": { "phases": [...] },
    "product-led-development": { "phases": [...] },
    "infrastructure-deployment": { "phases": [...] }
  }
}
```

### CLAUDE.md Auto-Generation
The `team-configurator` creates personalized documentation with:
- Detected technology stack
- Assigned specialist agents with capabilities
- Usage examples tailored to your project
- Integration guidance for resilience and logging
- MCP server integration details

## Proactive Agent System

### What are Proactive Agents?
Proactive agents monitor conversations and automatically engage when their expertise is needed. They act as intelligent assistants that anticipate requirements.

### Current Proactive Agents

| Agent | Trigger Conditions | Automatic Actions |
|-------|-------------------|-------------------|
| **software-engineering-expert** | Code implementation, refactoring, architecture | Enforces Evil Corp quality standards, suggests best practices |
| **code-reviewer** | After significant code changes | Reviews code quality, security, and adherence to patterns |
| **tech-lead-orchestrator** | Architecture planning, team coordination | Provides technical leadership, coordinates multiple agents |

### Proactive Configuration
```json
{
  "name": "software-engineering-expert",
  "proactive": true,
  "triggers": ["code", "implement", "build", "create", "develop", "refactor", "clean code", "best practices", "architecture", "maintainable", "quality", "engineering"],
  "auto_activation_threshold": 0.8
}
```

## Auto-Configuration System

### Stack Detection Logic
The system automatically detects technology stacks through:

1. **Package Files Analysis**
   - `package.json` → Node.js, React, Vue, TypeScript detection
   - `requirements.txt`, `pyproject.toml` → Python, Django detection
   - `Gemfile` → Ruby, Rails detection
   - `composer.json` → PHP, Laravel detection
   - `go.mod` → Go detection

2. **Framework-Specific Files**
   - `next.config.js` → Next.js
   - `nuxt.config.js` → Nuxt.js
   - `manage.py` → Django
   - `config/application.rb` → Rails
   - `artisan` → Laravel

3. **Directory Structure Patterns**
   - `app/models/` → Rails convention
   - `src/components/` → React/Vue convention
   - `myproject/settings.py` → Django convention

4. **Dependency Analysis**
   - Framework core dependencies
   - Testing libraries
   - Database adapters
   - Cloud service integrations

### Agent Assignment Logic
Based on detected stack, the system assigns:

1. **Universal Agents**: Always included for foundational expertise
2. **Framework Specialists**: Matched to detected backend/frontend frameworks
3. **Language-Specific**: Resilience and logging agents for detected languages
4. **Infrastructure**: Based on deployment targets (AWS, GCP, Docker, Kubernetes)
5. **Business**: Based on domain requirements (payments, healthcare, etc.)

## Integration Levels

### Quality Integration Levels
1. **Engineering Excellence**: Evil Corp standards applied to all development
2. **Universal Principles**: Core software engineering concepts
3. **Framework Integration**: Built into backend framework agents
4. **Language Specialization**: Library-specific implementations
5. **Advanced Patterns**: Distributed system architecture

### Resilience Integration Levels
1. **Universal Principles**: Core fault tolerance concepts
2. **Framework Integration**: Built into backend framework agents
3. **Language Specialization**: Library-specific implementations (Cockatiel, Hyx, GoBreaker)
4. **Advanced Patterns**: Distributed system resilience

### Logging Integration Levels
1. **Universal Standards**: JSON logging, log levels, contextual information
2. **Framework Integration**: Built into backend framework agents
3. **Library Specialization**: Pino, Zap, and framework-specific tools
4. **Cloud Integration**: Google Cloud Logging, AWS CloudWatch compatibility

## Collaboration Patterns

### Hierarchical Collaboration
Agents work in structured hierarchies with clear leadership and coordination patterns.

### Cross-Domain Expertise
Multiple agents from different domains collaborate on complex problems requiring interdisciplinary knowledge.

### Problem-Solving Chains
Sequential agent activation for complex workflows with dependencies and hand-offs between specialists.

### Knowledge Transfer
Agents share expertise and context to accelerate learning and maintain consistency across the system.

## Performance Characteristics

### Parallel Execution
- Multiple agents can work simultaneously on different aspects of problems
- Intelligent workload distribution based on agent capabilities
- Context sharing between parallel agents

### Resource Management
- Agent activation based on relevance scores
- Intelligent caching of agent responses
- Efficient context switching between agents

### Scalability
- Modular agent architecture supports easy extension
- Category-based organization for efficient agent discovery
- Dependency management prevents circular references

## Security Considerations

### Agent Isolation
- Each agent operates with specific tool permissions
- Clear boundaries between agent capabilities
- Secure context sharing mechanisms

### MCP Security
- MCP servers require explicit configuration
- Tool permissions managed at the agent level
- Secure communication channels for external integrations

### Data Protection
- Structured logging includes PII protection
- Secure handling of sensitive configuration data
- Audit trails for agent actions and decisions