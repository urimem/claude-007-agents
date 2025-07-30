# Agent Development Guide

## Creating Custom Agents

This guide covers how to create, customize, and extend agents in the Unified Agent System.

## Agent Structure

### Basic Agent Template

Every agent follows this markdown structure:

```markdown
---
name: your-agent-name
description: |
  Clear description of the agent's purpose and capabilities.
  
  Use when:
  - Specific use case 1
  - Specific use case 2
  - Specific use case 3
tools: [Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS]
proactive: false
---

You are a [role description] with expertise in [domain]. You specialize in [specific capabilities].

## Core Expertise

### Domain Area 1
- **Capability 1**: Description
- **Capability 2**: Description
- **Capability 3**: Description

### Domain Area 2
- **Advanced Patterns**: Complex scenarios
- **Integration Points**: How this connects to other systems
- **Best Practices**: Industry standards and recommendations

## Implementation Examples

[Provide specific code examples and patterns]

## Tools & Technologies
- **Primary Tools**: Main technologies this agent works with
- **Integration Tools**: Related systems and frameworks
- **Analysis Tools**: Debugging and optimization tools

## Interaction Patterns
- **Common Requests**: "Do X with Y framework"
- **Collaboration**: Works with @other-agent for Z scenarios

## Dependencies
Works closely with:
- `@related-agent-1` for specific functionality
- `@related-agent-2` for integration patterns

## Output Format
- Describe the expected output format
- Include examples of deliverables
- Specify any special formatting requirements
```

## MCP Tool Integration

### GitHub MCP Tools
For repository operations:
```yaml
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__github__create_pull_request,
  mcp__github__get_pull_request,
  mcp__github__merge_pull_request,
  mcp__github__get_pull_request_diff,
  mcp__github__create_branch,
  mcp__github__list_branches
]
```

### Task Master MCP Tools
For project management:
```yaml
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__task-master__initialize_project,
  mcp__task-master__get_tasks,
  mcp__task-master__add_task,
  mcp__task-master__set_task_status,
  mcp__task-master__analyze_project_complexity
]
```

### Context7 MCP Tools
For documentation access:
```yaml
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__context7__resolve-library-id,
  mcp__context7__get-library-docs
]
```

### Adding MCP Integration to Agents

When adding MCP tools to an agent, include integration instructions:

```markdown
## [MCP Server] Integration
You have access to [MCP Server] for [capabilities]:
- Use `mcp__server__tool` to [specific function]
- Always verify [requirements] before [actions]
- Integrate [latest patterns] from [MCP Server] into your solutions
```

## Agent Categories

### Universal Agents
Cross-cutting agents that apply to all languages and frameworks:
- Focus on general principles and patterns
- Provide foundational expertise
- Should not be framework-specific

### Backend Framework Specialists
Framework-specific backend development:
- Include resilience engineering patterns
- Integrate structured logging practices
- Depend on universal resilience and logging agents

### Frontend Framework Specialists
Modern frontend development patterns:
- Include error boundaries and graceful degradation
- Focus on user experience and performance
- Integrate with backend APIs

### Business & Strategy Agents
Product and business-focused agents:
- Requirements analysis and planning
- Stakeholder management  
- Domain-specific compliance (payments, healthcare)

### Infrastructure & Operations
Production systems and operations:
- Cloud architecture and deployment
- Monitoring and incident response
- Security and compliance

## Proactive Agent Development

### Enabling Proactive Behavior
```yaml
proactive: true
triggers: ["keyword1", "keyword2", "pattern3"]
```

### Proactive Activation Logic
Agents activate when:
1. Keywords match conversation context
2. Activation threshold is exceeded (default: 0.8)
3. No explicit agent is specified in the request

### Best Practices for Proactive Agents
- Use specific, relevant trigger keywords
- Avoid overly broad activation patterns
- Provide clear value when auto-activating
- Don't duplicate functionality of other proactive agents

## Agent Dependencies

### Hard Dependencies
Agents that require other agents for basic functionality:
```json
{
  "name": "rails-api-developer",
  "dependencies": ["rails-backend-expert"]
}
```

### Soft Dependencies
Agents that benefit from other agents but can work independently:
```json
{
  "name": "rails-backend-expert", 
  "dependencies": ["resilience-engineer", "logging-concepts-engineer"]
}
```

## Resilience Integration Patterns

### Universal Resilience Concepts
All resilient agents should include:
```markdown
## Resilience Patterns
- **Circuit Breakers**: Automatic failure detection and recovery
- **Retry Logic**: Exponential backoff with jitter
- **Timeout Management**: Appropriate timeout configurations
- **Graceful Degradation**: Fallback strategies
- **Health Monitoring**: Service health checks
```

### Language-Specific Resilience Libraries
Include specific library integration:
```ruby
# Gemfile
gem 'circuitbox'

# Circuit breaker implementation  
circuit :external_api, timeout: 5, threshold: 5, recovery_time: 30
```

## Structured Logging Integration

### Universal Logging Standards
All logging-aware agents should promote:
```markdown
## Logging Best Practices
- **JSON Format**: Structured, parseable log format
- **Contextual Information**: Request IDs, user context, operation context
- **Appropriate Log Levels**: DEBUG, INFO, WARN, ERROR, FATAL
- **Performance Conscious**: Asynchronous logging, conditional debug output
- **Security First**: PII protection and data sanitization
```

### Framework-Specific Logging
Include framework-specific patterns:
```json
{
  "timestamp": "2023-01-15T10:30:00Z",
  "level": "INFO", 
  "message": "User authentication successful",
  "context": {
    "user_id": "123",
    "request_id": "req_456",
    "ip_address": "192.168.1.1"
  }
}
```

## Agent Registration

### Adding to agents.json
Register new agents in the system configuration:

```json
{
  "name": "your-agent-name",
  "file": ".claude/agents/category/your-agent-name.md",
  "description": "Brief description of agent capabilities", 
  "category": "appropriate-category",
  "proactive": false,
  "triggers": ["keyword1", "keyword2"],
  "dependencies": ["dependency-agent-1", "dependency-agent-2"]
}
```

### Category Registration
Add to appropriate category in agents.json:

```json
"categories": {
  "your-category": {
    "description": "Category description",
    "agents": ["agent1", "agent2", "your-agent-name"]
  }
}
```

## Best Practices

### Agent Design
1. **Single Responsibility**: Each agent should have a clear, focused purpose
2. **Clear Boundaries**: Define what the agent does and doesn't do
3. **Consistent Interface**: Follow established patterns for interaction
4. **Documentation**: Provide clear examples and use cases

### Code Quality
1. **Examples**: Include working code examples
2. **Best Practices**: Promote industry standards
3. **Error Handling**: Include proper error handling patterns
4. **Testing**: Provide testing strategies and examples

### Integration
1. **MCP Tools**: Use appropriate MCP tools when available
2. **Dependencies**: Clearly define and document dependencies
3. **Collaboration**: Design for collaboration with other agents
4. **Extensibility**: Allow for future enhancements and modifications

### Performance
1. **Efficiency**: Optimize for common use cases
2. **Resource Usage**: Minimize resource consumption
3. **Caching**: Use appropriate caching strategies
4. **Parallel Processing**: Design for parallel execution when beneficial

## Best Practices for Agent Usage

### Effective Agent Prompting

#### Good Prompting Patterns
```
✅ "Use @react-expert to build a responsive navigation component 
   with dark mode support, mobile hamburger menu, and TypeScript"

✅ "Use @orchestrator to implement user authentication across our 
   React frontend and Rails API with JWT tokens"

✅ "Use @code-reviewer to analyze this pull request for security 
   vulnerabilities, especially around data validation and access control"
```

#### Poor Prompting Patterns
```
❌ "Use @react-expert to fix this bug" (too vague)

❌ "Use @orchestrator to make the app better" (no specific goals)

❌ "Use @code-reviewer to look at my code" (no focus areas)
```

#### Prompting Structure Template
```markdown
Use the [agent-name] to [specific task] that [context/requirements]:

**Requirements:**
- [Specific requirement 1]
- [Specific requirement 2]  
- [Specific requirement 3]

**Context:**
- Current tech stack: [relevant technologies]
- Constraints: [time, compatibility, performance, etc.]
- Success criteria: [how to measure success]

**Expected deliverables:**
- [Specific outputs you need]
```

### When to Use Agents

#### ✅ Ideal Use Cases
- **Complex, multi-step tasks** requiring specialized expertise
- **Cross-domain problems** needing multiple types of knowledge
- **Quality assurance** and code review processes
- **Learning and knowledge transfer** for new technologies
- **Rapid prototyping** and MVP development
- **Architecture decisions** requiring deep technical analysis

#### ❌ Avoid Agents For
- **Simple, one-line answers** that don't benefit from specialization
- **Basic syntax questions** easily answered by documentation
- **Trivial file operations** that don't require expertise
- **Personal preference decisions** without technical merit

## Quality Standards for Agent Development

### Agent Design Principles

#### 1. Single Responsibility Principle
```markdown
✅ Good: "React component architecture specialist"
❌ Poor: "Full-stack web development generalist"

Each agent should have ONE clear area of deep expertise.
```

#### 2. Clear Boundaries
```markdown
## Agent Scope Definition

### What This Agent Does:
- [Specific capability 1]
- [Specific capability 2]
- [Specific capability 3]

### What This Agent Does NOT Do:
- [Out of scope activity 1]
- [Out of scope activity 2]
- [When to delegate to other agents]
```

#### 3. Practical Focus
```markdown
✅ Good: Concrete code examples and actionable patterns
❌ Poor: Abstract concepts without implementation guidance

Agents should provide practical, immediately usable advice.
```

### Code Example Standards

```javascript
// ✅ Good: Complete, runnable example with context
const useAuthenticatedApi = (baseURL) => {
  const [token, setToken] = useState(null);
  
  const apiCall = useCallback(async (endpoint, options = {}) => {
    const response = await fetch(`${baseURL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    
    return response.json();
  }, [baseURL, token]);
  
  return { apiCall, setToken };
};

// Usage example:
// const { apiCall } = useAuthenticatedApi('/api/v1');
// const userData = await apiCall('/users/me');
```

```javascript
// ❌ Poor: Incomplete example without context
const apiCall = (endpoint) => {
  return fetch(endpoint).then(r => r.json());
};
```

## Security Best Practices

### Agent Security Considerations

#### Tool Access Control
```yaml
# ✅ Good: Minimal necessary permissions
---
name: security-analyzer
tools: [Read, Grep, Glob]  # Read-only for analysis
---

# ❌ Poor: Excessive permissions
---
name: security-analyzer  
tools: [Read, Write, Edit, Bash]  # Unnecessary write access
---
```

#### Sensitive Information Handling
```markdown
## Security Guidelines for Agents

### Never Include in Agent Definitions:
- API keys, passwords, or secrets
- Internal system details or architecture
- Proprietary algorithms or business logic
- Personal or confidential information

### Safe Information to Include:
- Public best practices and patterns
- Open-source code examples
- General architectural principles
- Community-standard approaches
```

#### Code Security Validation
```markdown
## Security Review Standards

All agents must:
- Recommend input validation for user-facing code
- Suggest authentication/authorization where appropriate
- Flag potential security vulnerabilities
- Reference security best practices (OWASP, etc.)
- Avoid generating code with known security issues
```

## Performance Optimization

### Agent Response Optimization

#### Scope Management
```markdown
✅ Efficient Agent Usage:
- Clear, specific prompts reduce unnecessary processing
- Focus on immediate needs, not comprehensive overviews
- Use appropriate agent for task complexity

❌ Inefficient Agent Usage:
- Vague prompts requiring extensive clarification
- Using complex orchestration for simple tasks
- Requesting comprehensive analysis when specific help needed
```

#### Tool Selection Guidelines
```markdown
### Read-Heavy Tasks:
- Use agents with Read, Grep, Glob tools
- Avoid Write permissions for analysis-only tasks
- Limit Bash usage to necessary operations

### Implementation Tasks:
- Full tool access (Read, Write, Edit, Bash)
- MultiEdit for complex file modifications
- Bash for testing and validation

### Review Tasks:
- Read, Grep, Glob for analysis
- No Write permissions to prevent accidental changes
- LS for project structure understanding
```

## Testing and Validation

### Agent Testing Checklist

```markdown
## Pre-Release Agent Testing

- [ ] **Clarity Test**: Can a developer unfamiliar with the domain understand the agent's purpose?
- [ ] **Completeness Test**: Does the agent provide sufficient depth for real-world usage?
- [ ] **Accuracy Test**: Are all technical recommendations current and correct?
- [ ] **Practicality Test**: Can the examples be implemented without modification?
- [ ] **Integration Test**: Does the agent work well with orchestration and other agents?

## Quality Validation Questions

1. **Expertise Depth**: Does this agent demonstrate genuine specialization?
2. **Best Practices**: Are recommendations aligned with community standards?
3. **Error Handling**: Does the agent address common pitfalls and edge cases?
4. **Performance**: Are performance implications clearly explained?
5. **Security**: Are security considerations appropriately addressed?
```

## Advanced Orchestration Agent Development

### Orchestrator Agent Patterns

The system features four types of orchestration agents, each with specific responsibilities and capabilities:

#### Pattern 1: Master Orchestrator (`@orchestrator`)
**Core Capabilities:**
- Multi-dimensional complexity analysis and scoring
- Intelligent agent selection with compatibility matrices
- Parallel execution optimization with dependency management
- Real-time collaboration coordination with conflict resolution

**Development Guidelines:**
```markdown
## Master Orchestrator Template

### Intelligence Systems Required:
1. **Request Analysis Engine**: Multi-dimensional complexity scoring (technical, domain, workflow, risk)
2. **Agent Selection Algorithm**: Weighted criteria analysis (expertise match, collaboration history, output quality)
3. **Workflow Generation Engine**: Dynamic parallel execution patterns (fan-out, pipeline, map-reduce)
4. **Collaboration Coordination**: Inter-agent communication protocols and context sharing
5. **Adaptive Learning**: Success pattern recognition and performance analytics

### Response Format:
- **Intelligent Analysis**: Complexity breakdown with parallel opportunities assessment
- **Optimal Agent Team**: Primary agents, support agents, quality gates, integration coordinators
- **Execution Strategy**: Multi-phase coordinated execution with parallel streams
- **Success Metrics**: Performance indicators, quality metrics, monitoring strategy
```

#### Pattern 2: Strategic Leadership Orchestrator (`@tech-lead-orchestrator`)
**Core Capabilities:**
- Enterprise architecture decisions and technical strategy
- Multi-team coordination and resource optimization
- Technical risk management and crisis leadership
- Strategic technology planning and ADR documentation

**Development Guidelines:**
```markdown
## Strategic Leadership Template

### Leadership Systems Required:
1. **Architecture Decision Framework**: Multi-criteria decision analysis with stakeholder alignment
2. **Multi-Team Coordination**: Cross-functional team leadership and conflict resolution
3. **Technical Risk Management**: Risk assessment, mitigation strategies, crisis response
4. **Strategic Planning**: Technology roadmap, capability development, innovation guidance

### Response Format:
- **Strategic Analysis**: Initiative importance, technical complexity, cross-team coordination needs
- **Leadership Strategy**: Senior agent leaders, specialized teams, quality council, integration coordinators
- **Strategic Execution**: Multi-phase leadership coordination with governance oversight
- **Strategic Success Metrics**: Leadership effectiveness, technical excellence, strategic impact
```

#### Pattern 3: Project Intelligence Orchestrator (`@project-analyst`)
**Core Capabilities:**
- PRD processing and intelligent requirement extraction
- AI-powered task decomposition with dependency mapping
- Multi-dimensional complexity analysis across all domains
- Stakeholder management and communication strategy

**Development Guidelines:**
```markdown
## Project Intelligence Template

### Intelligence Systems Required:
1. **PRD Processing Engine**: Intelligent parsing, requirement classification, stakeholder mapping
2. **Task Generation Intelligence**: AI-powered decomposition with dependency analysis
3. **Complexity Assessment**: Multi-dimensional scoring (technical, business, team, timeline)
4. **Stakeholder Analysis**: Communication strategy, change management, coordination planning

### Response Format:
- **Project Analysis**: Complexity assessment, duration estimation, team requirements, risk factors
- **Intelligent Task Breakdown**: Epic structure, critical path analysis, parallel opportunities
- **Execution Strategy**: Multi-phase project coordination with quality gates
- **Success Framework**: Success metrics, monitoring strategy, stakeholder communication
```

#### Pattern 4: Team Optimization Orchestrator (`@team-configurator`)
**Core Capabilities:**
- Technology stack detection and architecture analysis
- Optimal agent team assembly with performance optimization
- Dynamic team adjustment based on success metrics
- Custom agent configuration and specialization

**Development Guidelines:**
```markdown
## Team Optimization Template

### Optimization Systems Required:
1. **Technology Detection Engine**: Automatic stack analysis and pattern recognition
2. **Team Assembly Algorithm**: Performance-based agent selection with compatibility analysis
3. **Dynamic Optimization**: Continuous team adjustment and success tracking
4. **Custom Configuration**: Project-specific agent customization and enhancement

### Response Format:
- **Configuration Analysis**: Technology stack, architecture pattern, project maturity, optimization score
- **Optimal Team Assembly**: Core team size, collaboration complexity, quality coverage, performance optimization
- **Team Coordination Strategy**: Collaboration patterns, quality gates, integration points, escalation paths
- **Effectiveness Monitoring**: Performance metrics, continuous optimization, team analytics
```

### Orchestration Best Practices

#### 1. Intelligence Integration
```markdown
## Advanced Intelligence Requirements

### Multi-Dimensional Analysis:
- **Complexity Scoring**: Use consistent 1-10 scales across technical, domain, workflow, and risk dimensions
- **Context Awareness**: Integrate project maturity, team capability, resource constraints, integration requirements
- **Performance Metrics**: Track success rates, quality metrics, collaboration effectiveness, user satisfaction

### Adaptive Learning:
- **Pattern Recognition**: Learn from successful orchestration patterns and agent combinations
- **Performance Analytics**: Continuously improve based on agent collaboration effectiveness
- **Success Optimization**: Identify and replicate high-performing workflow patterns
```

#### 2. Collaboration Coordination
```markdown
## Inter-Agent Coordination Standards

### Communication Protocols:
- **Context Packages**: Structured information transfer between agents with relevant project context
- **Progress Checkpoints**: Regular synchronization points with quality validation
- **Quality Gates**: Automated validation points with go/no-go decisions
- **Conflict Resolution**: Systematic handling of conflicting recommendations with decision frameworks

### Workflow Optimization:
- **Parallel Execution**: Identify and optimize independent workstreams for simultaneous execution
- **Dependency Management**: Map and manage critical path dependencies with bottleneck identification
- **Resource Allocation**: Optimize agent workload distribution and capability utilization
- **Integration Coordination**: Plan and execute seamless component integration and testing
```

#### 3. Quality Assurance Integration
```markdown
## Orchestration Quality Standards

### Quality Coordination:
- **Strategic Quality Gates**: Insert quality checkpoints at optimal workflow intervals
- **Continuous Validation**: Real-time quality monitoring with adaptive adjustments
- **Integration Testing**: Cross-agent output compatibility and integration validation
- **Performance Monitoring**: Track workflow efficiency, agent utilization, and outcome quality

### Success Measurement:
- **Execution Speed**: Target completion time with parallel optimization benchmarks
- **Quality Metrics**: Code quality, security, performance standards achievement
- **Integration Success**: Seamless component integration and collaboration rates
- **Resource Efficiency**: Agent utilization optimization and workflow effectiveness
```

### Orchestration Agent Tools and MCP Integration

#### Required Tool Configurations
```yaml
# Master Orchestrator Tools
tools: [Task, Read, Glob, Grep, LS, mcp__task-master__initialize_project, mcp__task-master__get_tasks, mcp__task-master__add_task, mcp__task-master__set_task_status, mcp__task-master__analyze_project_complexity, mcp__task-master__expand_task, mcp__task-master__parse_prd]

# Strategic Leadership Tools  
tools: [Task, Read, Glob, Grep, LS, mcp__task-master__initialize_project, mcp__task-master__get_tasks, mcp__task-master__add_task, mcp__task-master__set_task_status, mcp__task-master__analyze_project_complexity, mcp__task-master__expand_all, mcp__task-master__parse_prd]

# Project Intelligence Tools
tools: [Read, Grep, Glob, LS, mcp__task-master__parse_prd, mcp__task-master__add_task, mcp__task-master__get_tasks, mcp__task-master__expand_task, mcp__task-master__analyze_project_complexity, mcp__task-master__initialize_project]

# Team Optimization Tools
tools: [Read, Write, Edit, Bash, Grep, Glob, LS, mcp__task-master__initialize_project, mcp__task-master__models, mcp__task-master__rules]
```

#### MCP Integration Requirements
```markdown
## Task Master MCP Integration for Orchestrators

### Advanced Project Orchestration:
- **Project Initialization**: Use `mcp__task-master__initialize_project` for comprehensive project setup
- **Complexity Analysis**: Leverage `mcp__task-master__analyze_project_complexity` for multi-dimensional assessment
- **Task Management**: Integrate `mcp__task-master__expand_task` for intelligent task breakdown
- **PRD Processing**: Utilize `mcp__task-master__parse_prd` for requirements intelligence

### Performance Optimization:
- **Task Tracking**: Monitor project progress with real-time task status updates
- **Dependency Management**: Create and manage complex task dependencies and workflows
- **Team Coordination**: Coordinate agent assignments based on task requirements and complexity
- **Success Measurement**: Track orchestration effectiveness and continuous improvement
```