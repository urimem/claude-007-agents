# MCP Integration Guide

## Overview

Model Context Protocol (MCP) servers provide live integrations with external services and tools. The Unified Agent System integrates with four core MCP servers to enhance agent capabilities with real-time data, operations, and persistent organizational knowledge.

## Available MCP Servers

### GitHub MCP (`mcp__github__*`)
Live repository operations and GitHub API integration

**Capabilities:**
- Repository management and file operations
- Pull request creation, review, and merging
- Branch management and workflow operations
- Issue tracking and project management
- Workflow automation and CI/CD integration

**Key Tools:**
- `mcp__github__create_pull_request`
- `mcp__github__get_pull_request_diff`
- `mcp__github__merge_pull_request`
- `mcp__github__create_branch`
- `mcp__github__list_workflows`
- `mcp__github__run_workflow`
- `mcp__github__get_job_logs`

### Task Master MCP (`mcp__task-master__*`)
Project task management and complexity analysis

**Capabilities:**
- Project initialization and configuration
- Task creation, tracking, and status management
- Complexity analysis and task expansion
- Dependency management and workflow orchestration
- PRD parsing and task generation

**Key Tools:**
- `mcp__task-master__initialize_project`
- `mcp__task-master__get_tasks`
- `mcp__task-master__add_task`
- `mcp__task-master__set_task_status`
- `mcp__task-master__analyze_project_complexity`
- `mcp__task-master__parse_prd`

### Context7 MCP (`mcp__context7__*`)
Live library documentation and code examples

**Capabilities:**
- Library and framework documentation retrieval
- Up-to-date API references and usage patterns
- Code examples and best practices
- Version compatibility checking
- Integration patterns and tutorials

**Key Tools:**
- `mcp__context7__resolve-library-id`
- `mcp__context7__get-library-docs`

### Basic Memory MCP (`mcp__basic-memory__*`)
Persistent knowledge management and organizational memory

**Capabilities:**
- Note creation, editing, and management for persistent knowledge storage  
- Context building from historical projects and implementations
- Pattern search and knowledge retrieval across organizational memory
- Living documentation maintenance and evolution tracking
- Project memory and architectural decision recording
- Cross-project learning and pattern reuse

**Key Tools:**
- `mcp__basic-memory__write_note`
- `mcp__basic-memory__read_note`
- `mcp__basic-memory__search_notes`
- `mcp__basic-memory__build_context`
- `mcp__basic-memory__edit_note`

## Agent Integration Patterns

### GitHub MCP Integration

#### Git Operations Agents
```yaml
# git-expert agent tools
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__github__create_pull_request,
  mcp__github__get_pull_request,
  mcp__github__merge_pull_request,
  mcp__github__get_pull_request_diff,
  mcp__github__create_branch,
  mcp__github__list_branches,
  mcp__github__get_file_contents,
  mcp__github__create_or_update_file
]
```

**Integration Pattern:**
```markdown
## GitHub MCP Integration
You have access to GitHub MCP for live repository operations:
- Use GitHub MCP tools for real-time PR management, branch operations, and file operations
- Create and manage pull requests directly through the GitHub API
- Access repository contents and diff information for conflict analysis
- Manage branches and perform repository operations remotely
- Always prefer GitHub MCP tools for repository operations when available
```

#### Code Review Agents
```yaml
# code-reviewer agent tools
tools: [
  Read, Grep, Glob, LS,
  mcp__github__get_pull_request,
  mcp__github__get_pull_request_diff,
  mcp__github__get_pull_request_files,
  mcp__github__create_and_submit_pull_request_review,
  mcp__github__add_comment_to_pending_review
]
```

#### CI/CD Pipeline Agents
```yaml
# cicd-pipeline-engineer agent tools
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__github__list_workflows,
  mcp__github__run_workflow,
  mcp__github__get_workflow_run,
  mcp__github__list_workflow_jobs,
  mcp__github__get_job_logs,
  mcp__github__cancel_workflow_run
]
```

### Task Master MCP Integration

#### Project Orchestration Agents
```yaml
# orchestrator agent tools
tools: [
  Task, Read, Glob, Grep, LS,
  mcp__task-master__initialize_project,
  mcp__task-master__get_tasks,
  mcp__task-master__add_task,
  mcp__task-master__set_task_status,
  mcp__task-master__analyze_project_complexity
]
```

**Integration Pattern:**
```markdown
## Task Master MCP Integration
You have access to Task Master MCP for comprehensive project task management:
- Use Task Master MCP tools to initialize projects, manage tasks, and track complexity
- Create structured task breakdown and dependency management
- Monitor project progress and coordinate agent assignments based on task requirements
- Always prefer Task Master MCP tools for project orchestration when available
```

#### Requirements Analysis Agents
```yaml
# project-analyst agent tools
tools: [
  Read, Grep, Glob, LS,
  mcp__task-master__parse_prd,
  mcp__task-master__add_task,
  mcp__task-master__get_tasks,
  mcp__task-master__expand_task
]
```

### Context7 MCP Integration

#### Documentation Agents
```yaml
# documentation-specialist agent tools
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__context7__resolve-library-id,
  mcp__context7__get-library-docs
]
```

**Integration Pattern:**
```markdown
## Context7 MCP Integration
You have access to Context7 MCP for retrieving up-to-date library documentation and examples:
- Use `mcp__context7__resolve-library-id` to find the correct library identifier for any framework or library
- Use `mcp__context7__get-library-docs` to fetch current documentation, API references, and code examples
- Always verify documentation accuracy by checking the latest library versions and patterns
- Integrate live examples and current best practices from Context7 into your documentation
```

#### Framework Specialist Agents
```yaml
# rails-backend-expert agent tools
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__context7__resolve-library-id,
  mcp__context7__get-library-docs
]
```

**Framework-Specific Integration:**
```markdown
## Context7 MCP Integration
You have access to Context7 MCP for retrieving up-to-date Rails documentation and gem information:
- Use `mcp__context7__resolve-library-id` to find Rails gems and their documentation
- Use `mcp__context7__get-library-docs` to fetch current Rails API references, gem usage patterns, and best practices
- Always verify gem compatibility and current Rails versions before making recommendations
- Integrate the latest Rails patterns and gem examples from Context7 into your solutions
```

### Basic Memory MCP Integration

#### All Core Development Agents
**Comprehensive Integration Pattern:**
```yaml
# Example: performance-optimizer agent tools
tools: [
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  mcp__basic-memory__write_note,
  mcp__basic-memory__read_note,
  mcp__basic-memory__search_notes,
  mcp__basic-memory__build_context,
  mcp__basic-memory__edit_note
]
```

**Universal Integration Pattern:**
```markdown
## Basic Memory MCP Integration
You have access to Basic Memory MCP for [domain] patterns and [technology] knowledge:
- Use `mcp__basic-memory__write_note` to store [domain] patterns, [specific techniques], and [expertise] insights
- Use `mcp__basic-memory__read_note` to retrieve previous [domain] implementations and solutions
- Use `mcp__basic-memory__search_notes` to find similar [domain] challenges and approaches from past projects
- Use `mcp__basic-memory__build_context` to gather [domain] context from related systems and decisions
- Use `mcp__basic-memory__edit_note` to maintain living [domain] documentation and evolution guides
- Store [specific configurations], [pattern types], and organizational [domain] knowledge
```

#### Agent-Specific Memory Categories

**Universal Specialists & Quality:**
```yaml
# documentation-specialist
Basic Memory Focus: Architectural decision tracking, project memory, documentation patterns

# code-reviewer  
Basic Memory Focus: Code review patterns, quality standards, best practices documentation

# performance-optimizer
Basic Memory Focus: Performance analysis memory, optimization patterns, benchmark tracking

# resilience-engineer
Basic Memory Focus: Fault tolerance patterns, circuit breaker configurations, resilience strategies
```

**Backend Framework Specialists:**
```yaml
# rails-expert, django-expert, laravel-expert, etc.
Basic Memory Focus: Framework patterns, ORM optimizations, language best practices

# nodejs-expert, fastify-expert
Basic Memory Focus: Async implementations, JavaScript/TypeScript patterns, performance optimizations

# gin-expert, fiber-expert  
Basic Memory Focus: Go patterns, middleware configurations, performance strategies

# prisma-expert
Basic Memory Focus: Schema designs, migration strategies, database optimization patterns
```

**Frontend Framework Specialists:**
```yaml
# angular-expert, nextjs-expert, vue-expert
Basic Memory Focus: Component architectures, framework patterns, performance optimizations

# react-component-architect
Basic Memory Focus: Component patterns, hooks patterns, React best practices
```

**Development Operations:**
```yaml
# git-expert
Basic Memory Focus: Git workflow patterns, conflict resolution strategies, branching models

# cicd-pipeline-engineer
Basic Memory Focus: Pipeline configurations, deployment strategies, automation patterns

# test-automation-expert, qa-automation-engineer
Basic Memory Focus: Testing strategies, automation patterns, QA insights and frameworks
```

**Project & Team Management:**
```yaml
# project-analyst, tech-lead-orchestrator
Basic Memory Focus: Requirements memory, architectural decisions, strategic planning

# business-analyst, product-manager
Basic Memory Focus: Business logic, stakeholder requirements, feature evolution tracking
```

## MCP Workflow Patterns

### Repository Operations Workflow
1. `@git-expert` + GitHub MCP → Live repository analysis and operations
2. `@code-reviewer` + GitHub MCP → Automated PR reviews with real-time feedback
3. `@cicd-pipeline-engineer` + GitHub MCP → Workflow management and troubleshooting

### Project Management Workflow
1. `@project-analyst` + Task Master MCP → PRD analysis and initial task generation
2. `@tech-lead-orchestrator` + Task Master MCP → Project complexity assessment and expansion
3. Task Master MCP → Continuous task tracking and dependency management across all agents

### Documentation-Driven Development Workflow
1. `@documentation-specialist` + Context7 MCP → Retrieve up-to-date library documentation
2. Framework specialists + Context7 MCP → Access current patterns and best practices
3. `@software-engineering-expert` + Context7 MCP → Validate implementation approaches

### Integrated Development Workflow
1. **Planning** → Task Master MCP generates structured tasks from requirements
2. **Research** → Context7 MCP provides current documentation and examples
3. **Development** → Framework specialists implement with GitHub MCP for live repo operations
4. **Review** → `@code-reviewer` + GitHub MCP for automated quality assurance
5. **Deployment** → `@release-manager` + GitHub MCP for orchestrated releases
6. **Tracking** → Task Master MCP maintains project progress visibility

## Configuration and Setup

### MCP Server Requirements
Each MCP server requires specific configuration and permissions:

#### GitHub MCP Configuration
- GitHub personal access token with appropriate repository permissions
- Repository access for target repositories
- Workflow permissions for CI/CD operations

#### Task Master MCP Configuration
- Project root directory access
- File system permissions for task tracking
- Configuration for AI model integration (optional)

#### Context7 MCP Configuration
- Internet access for documentation retrieval
- API access to documentation sources
- Caching configuration for performance

### Agent Tool Configuration
Agents specify MCP tools in their configuration:

```yaml
# Agent frontmatter
tools: [
  # Standard tools
  Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS,
  # MCP tools
  mcp__github__create_pull_request,
  mcp__task-master__get_tasks,
  mcp__context7__get-library-docs
]
```

### Error Handling and Fallbacks
Agents should handle MCP server unavailability gracefully:

```markdown
## MCP Error Handling
- Check MCP server availability before using MCP tools
- Provide fallback functionality when MCP servers are unavailable
- Clear error messages when MCP operations fail
- Graceful degradation to standard tools when needed
```

## Best Practices

### MCP Tool Usage
1. **Availability Check**: Always check if MCP servers are available before using MCP tools
2. **Fallback Strategy**: Provide alternative approaches when MCP tools are unavailable
3. **Error Handling**: Handle MCP errors gracefully with clear user messages
4. **Performance**: Cache MCP results when appropriate to reduce API calls

### Integration Patterns
1. **Prefer MCP**: Use MCP tools when available for enhanced functionality
2. **Complement Standard Tools**: Use MCP tools to enhance, not replace, standard capabilities
3. **Context Sharing**: Share MCP data between agents when collaborating
4. **Security**: Handle MCP credentials and data securely

### Workflow Design
1. **Sequential Operations**: Chain MCP operations logically
2. **Parallel Processing**: Use multiple MCP servers simultaneously when beneficial
3. **State Management**: Track MCP operation state across agent interactions
4. **Progress Reporting**: Provide clear progress updates for long-running MCP operations

## Advanced Integration Patterns

### Multi-MCP Workflows
Combine multiple MCP servers in single workflows:

```bash
# Example: Complete feature development workflow
"Use @project-analyst with Task Master MCP to parse PRD, then @rails-backend-expert with Context7 MCP for implementation patterns, and @git-expert with GitHub MCP for PR creation"
```

### Cross-Agent MCP Coordination
Agents share MCP data and coordinate operations:

```bash
# Example: Code review with task tracking
"Use @code-reviewer with GitHub MCP to review PR, then update task status using Task Master MCP based on review results"
```

### MCP-Enhanced Proactive Behavior
Proactive agents use MCP data for better activation decisions:

```markdown
## MCP-Enhanced Proactive Triggers
- Monitor GitHub MCP for PR events to trigger @code-reviewer
- Use Task Master MCP task status to activate relevant specialists
- Leverage Context7 MCP for framework detection to suggest appropriate agents
```

## Troubleshooting

### Common Issues

#### MCP Server Connectivity
- **Problem**: MCP server not responding
- **Solution**: Check server status, network connectivity, and authentication

#### Permission Errors
- **Problem**: Access denied for MCP operations
- **Solution**: Verify credentials, permissions, and scope access

#### Rate Limiting
- **Problem**: Too many MCP API calls
- **Solution**: Implement caching, reduce call frequency, or use batch operations

#### Data Synchronization
- **Problem**: Inconsistent data between MCP servers
- **Solution**: Implement data validation and synchronization checks

### Debugging MCP Integration
1. **Enable Debug Logging**: Turn on detailed MCP operation logging
2. **Test Individual Tools**: Verify each MCP tool works independently
3. **Check Permissions**: Ensure all required permissions are granted
4. **Validate Configuration**: Verify MCP server configuration and credentials

### Performance Optimization
1. **Caching**: Implement intelligent caching for frequently accessed MCP data
2. **Batch Operations**: Use batch MCP operations when available
3. **Async Processing**: Use asynchronous MCP calls when possible
4. **Connection Pooling**: Reuse MCP connections efficiently