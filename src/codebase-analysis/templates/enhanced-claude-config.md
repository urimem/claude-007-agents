## CRITICAL: COMMIT MESSAGE REQUIREMENTS

⚠️ **MANDATORY FORMAT**: `type(scope): description - @agent1 @agent2`

## Pre-Commit Checklist
1. ✅ Identify contributing agents
2. ✅ Format: `type(scope): description - @agent1 @agent2` 
3. ✅ Include standard attribution footer

---

# Task Master - Enhanced Configuration Template

*This template enhances existing Claude Code projects with Task Master capabilities and codebase-aware intelligence.*

## Enhanced Agent System

### Core Development (Enhanced)
- `@software-engineering-expert` - Enhanced with codebase analysis capabilities
- `@code-reviewer` - Enhanced with architectural pattern awareness
- `@test-automation-expert` - Enhanced with tech-stack specific testing strategies

### Codebase-Aware Specialists
- `@codebase-analyzer` - Deep codebase analysis and pattern recognition
- `@intelligent-prd-processor` - Requirements processing with architectural alignment
- `@project-initializer` - Codebase-aware project setup and configuration

### Tech-Specific Agents (Auto-detected)
{{TECH_STACK_AGENTS}}

### Advanced Specialists
{{SPECIALIZED_AGENTS}}

## Codebase Analysis Integration

### Analysis Results
- **Primary Tech Stack**: {{TECH_STACK}}
- **Architecture Pattern**: {{ARCHITECTURE}}
- **Complexity Score**: {{COMPLEXITY}}/10
- **Performance Score**: {{PERFORMANCE_SCORE}}/100
- **Security Score**: {{SECURITY_SCORE}}/100

### Intelligent Features
- ✅ **Codebase-Aware Task Generation**: Tasks aligned with existing architecture
- ✅ **Context-Aware Agent Selection**: Agents selected based on codebase patterns
- ✅ **Intelligent Dependency Mapping**: Advanced dependency analysis and resolution
- ✅ **Performance-Driven Prioritization**: Priority assignment based on codebase impact
- ✅ **Architectural Alignment**: All recommendations aligned with existing patterns

## Enhanced Workflows

### Codebase Analysis Workflow
```
1. "Analyze this codebase architecture and patterns"
2. "Generate tasks from PRD with architectural alignment" 
3. "Select optimal agents based on codebase analysis"
4. "Execute tasks with full architectural context"
```

### Intelligent Task Management
```
1. "Create hierarchical task organization"
2. "Apply AI-driven status transitions"
3. "Optimize dependency mapping"  
4. "Enable real-time synchronization"
```

### Advanced Agent Orchestration  
```
1. "Use @codebase-analyzer to analyze project patterns"
2. "Use @intelligent-prd-processor for aligned task generation"
3. "Use @project-initializer for optimal configuration"
```

## Agent Definitions (Enhanced)

### @codebase-analyzer
**Description**: Comprehensive codebase analysis with architectural pattern recognition, tech stack detection, and performance insights
**Triggers**: analyze codebase, architecture patterns, tech stack analysis, performance analysis
**Tools**: Read, Edit, MultiEdit, Bash, Grep, Glob, LS, mcp__basic-memory__*
**Enhanced Features**: Multi-language AST parsing, architectural pattern scoring, dependency graph analysis

### @intelligent-prd-processor  
**Description**: Advanced PRD processing with architectural alignment assessment and context-aware task generation
**Triggers**: process prd, requirements analysis, task generation, architectural alignment
**Tools**: Read, Edit, MultiEdit, Bash, Grep, Glob, LS, mcp__task-master__*, mcp__basic-memory__*
**Enhanced Features**: Architecture-aligned task strategies, agent capability matching, dependency optimization

### @project-initializer
**Description**: Codebase-aware project initialization with template selection and optimal configuration generation
**Triggers**: project initialization, setup optimization, configuration generation
**Tools**: Read, Edit, MultiEdit, Bash, Grep, Glob, LS, mcp__task-master__*, mcp__basic-memory__*
**Enhanced Features**: Template compatibility scoring, configuration customization, validation workflows

{{CORE_AGENT_DEFINITIONS}}

{{SPECIALIZED_AGENT_DEFINITIONS}}

## MCP Integration (Enhanced)

### Task Master MCP (Enhanced)
```json
{
  "mcpServers": {
    "task-master-ai": {
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "your_key_here",
        "PERPLEXITY_API_KEY": "your_key_here"
      }
    },
    "basic-memory": {
      "command": "npx", 
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {}
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "sequential-thinking-mcp"],
      "env": {}
    }
  }
}
```

### Integration Features
- **Codebase Analysis**: Real-time analysis results stored in Basic Memory MCP
- **Task Coordination**: Enhanced task management with architectural awareness
- **Sequential Reasoning**: Complex multi-step analysis with adaptive planning
- **Organizational Learning**: Pattern recognition and knowledge accumulation

## Configuration Optimizations

### Development Configuration
```json
{
  "optimizations": {
    "enableHotReload": {{HOT_RELOAD}},
    "enableTypeChecking": {{TYPE_CHECKING}},
    "enableSourceMaps": true,
    "enableLinting": true,
    "enableCodeAnalysis": true
  },
  "codebaseAware": {
    "techStackOptimizations": {{TECH_OPTIMIZATIONS}},
    "architectureAligned": {{ARCH_ALIGNED}},
    "complexityThreshold": {{COMPLEXITY_THRESHOLD}},
    "performanceTargets": {{PERFORMANCE_TARGETS}}
  }
}
```

### Quality Configuration
```json
{
  "codeReview": "{{CODE_REVIEW_LEVEL}}",
  "testCoverage": {{TEST_COVERAGE}},
  "performanceThresholds": {
    "responseTime": {{RESPONSE_TIME}},
    "bundleSize": "{{BUNDLE_SIZE}}"
  },
  "securityScanning": "automated",
  "architecturalValidation": "enabled"
}
```

## Advanced Usage Examples

### Codebase Analysis
```
"Use @codebase-analyzer to provide comprehensive analysis of this {{TECH_STACK}} project"
"Analyze architectural patterns and suggest improvements"
"Generate performance optimization recommendations"
```

### Intelligent Task Generation
```
"Use @intelligent-prd-processor to process requirements.txt with architectural alignment"
"Generate tasks optimized for {{ARCHITECTURE}} architecture"
"Create agent assignments based on codebase complexity"
```

### Enhanced Project Management
```
"Initialize hierarchical task organization with intelligent nesting"
"Enable AI-driven status transitions based on codebase changes"
"Setup real-time synchronization with performance monitoring"
```

## Getting Started (Enhanced)

1. **Verify Enhanced Setup**
   ```bash
   # Check if Task Master is installed
   task-master --version
   
   # Verify MCP connections
   claude --check-mcp
   ```

2. **Run Codebase Analysis**
   ```
   # In Claude Code session
   "Use @codebase-analyzer to analyze this project comprehensively"
   ```

3. **Process Requirements** 
   ```
   "Use @intelligent-prd-processor to generate tasks from ./requirements.txt"
   ```

4. **Begin Enhanced Development**
   ```
   "Use @software-engineering-expert with codebase context to review architecture"
   "Enable intelligent task management with real-time synchronization"
   ```

## Project Statistics

- **Analysis Depth**: {{ANALYSIS_DEPTH}}
- **Agent Count**: {{AGENT_COUNT}} 
- **MCP Servers**: {{MCP_COUNT}}
- **Configuration Templates**: {{TEMPLATE_COUNT}}
- **Estimated Setup Time**: {{SETUP_TIME}} minutes
- **Performance Improvement**: {{PERFORMANCE_IMPROVEMENT}}%

## Commit Attribution

**MANDATORY**: `type(scope): description - @agent1 @agent2`

### Enhanced Commit Examples
- `feat(codebase): implement analysis engine - @codebase-analyzer @software-engineering-expert`
- `enhance(prd): add architectural alignment - @intelligent-prd-processor @project-analyst`
- `optimize(performance): improve initialization speed - @performance-optimizer @system-architect`
- `integrate(mcp): add Task Master coordination - @orchestrator @team-configurator`

### Standard Footer
All commits should include:
```
🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

---
*Enhanced by Task Master Codebase-Aware Intelligence System*
*Compatible with existing Claude Code projects - adds advanced capabilities*