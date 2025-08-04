# Contributing to Claude Code Agents

Thank you for your interest in contributing to the Claude Code Agents project! This guide will help you get started with contributing to our comprehensive AI agent system.

## 🚀 Quick Start for Contributors

### Prerequisites

- Git installed on your system
- Basic understanding of Claude Code
- Familiarity with Markdown syntax
- Knowledge of the technology domains you want to contribute to

### Getting Started

1. **Fork the repository**
   ```bash
   git fork https://github.com/avivl/claude-007-agents.git
   cd claude-007-agents
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-contribution-name
   ```

3. **Make your changes** following our guidelines below

4. **Test your changes** by installing locally
   ```bash
   cp -r .claude/agents/* ~/.claude/agents/
   cp .claude/agents/agents.json ~/.claude/agents/
   ```

5. **Submit a pull request** with a clear description

## 📋 Types of Contributions We Welcome

### 🤖 New Agent Contributions

- **Technology-specific agents** (new frameworks, languages, tools)
- **Domain-specific agents** (industry verticals, specialized use cases)
- **Workflow agents** (specialized development processes)
- **Integration agents** (new MCP integrations, external services)

### 📚 Documentation Improvements

- Agent usage examples and tutorials
- Workflow documentation and guides
- Installation and setup improvements
- FAQ additions and clarifications

### 🔧 Infrastructure Enhancements

- Agent system improvements
- Configuration enhancements
- Workflow optimizations
- MCP integration expansions

### 🐛 Bug Fixes and Quality Improvements

- Agent behavior corrections
- Documentation fixes
- System reliability improvements
- Performance optimizations

## 🤖 Creating New Agents

### Agent File Structure

All agents must follow this exact YAML frontmatter format:

```markdown
---
name: agent-name
description: |
  Detailed description of the agent's capabilities and specializations.
  
  Specializes in:
  - Specific capability 1
  - Specific capability 2
  - Specific capability 3
  
  Use when:
  - Situation 1
  - Situation 2
  - Situation 3
tools: [Read, Write, Edit, MultiEdit, Bash, Grep, Glob, LS, mcp__basic-memory__write_note, mcp__basic-memory__read_note, mcp__basic-memory__search_notes, mcp__basic-memory__build_context, mcp__basic-memory__edit_note]
proactive: false
triggers: ["keyword1", "keyword2", "keyword3", "specific phrases"]
---

Your agent content in markdown format...
```

### Agent Categories

Place your agent in the appropriate category directory:

- **`.claude/agents/universal/`** - Cross-cutting agents (all languages/frameworks)
- **`.claude/agents/specialized/[technology]/`** - Technology-specific agents
- **`.claude/agents/orchestrators/`** - High-level coordination agents
- **`.claude/agents/core/`** - Essential development tools
- **`.claude/agents/creative/`** - Creative problem-solving agents
- **`.claude/agents/business/`** - Business and product strategy agents
- **`.claude/agents/infrastructure/`** - Infrastructure and operations agents
- **`.claude/agents/security/`** - Security and compliance agents
- **`.claude/agents/automation/`** - CI/CD and automation agents
- **`.claude/agents/data/`** - Data engineering and analytics agents
- **`.claude/agents/ai/`** - AI and machine learning agents
- **`.claude/agents/frontend/`** - Frontend development agents

### MCP Integration Requirements

All core development agents MUST include Basic Memory MCP integration:

```markdown
## Basic Memory MCP Integration
You have access to Basic Memory MCP for [domain] patterns and [specific knowledge]:
- Use `mcp__basic-memory__write_note` to store [specific patterns and insights]
- Use `mcp__basic-memory__read_note` to retrieve [previous implementations and patterns]
- Use `mcp__basic-memory__search_notes` to find [similar challenges and solutions]
- Use `mcp__basic-memory__build_context` to gather [contextual information]
- Use `mcp__basic-memory__edit_note` to maintain [living documentation]
- Store [organizational knowledge and learning patterns]
```

### Agent Registration

When creating a new agent, you must also update `.claude/agents/agents.json`:

```json
{
  "name": "your-agent-name",
  "file": ".claude/agents/category/your-agent-name.md",
  "description": "Brief agent description",
  "category": "appropriate-category",
  "proactive": false,
  "triggers": ["trigger1", "trigger2"],
  "dependencies": ["dependent-agent-1", "dependent-agent-2"]
}
```

## 📝 Documentation Standards

### Agent Documentation Requirements

Each agent must include:

1. **Clear role definition** and responsibilities
2. **Specific expertise areas** and capabilities
3. **Usage patterns** and interaction examples
4. **Tool integration** (especially MCP where applicable)
5. **Dependencies** and relationships with other agents
6. **Example usage scenarios**

### Writing Style Guidelines

- **Concise and actionable** - Focus on practical guidance
- **Technology-specific** - Use domain terminology appropriately
- **Example-driven** - Include code examples and usage patterns
- **Comprehensive** - Cover edge cases and advanced scenarios
- **Professional tone** - Maintain technical expertise focus

## 🔍 Quality Standards

### Agent Quality Checklist

- [ ] **YAML frontmatter** is properly formatted with `---` delimiters
- [ ] **Triggers** are comprehensive and relevant
- [ ] **Tools** include all necessary capabilities
- [ ] **MCP integration** is included for core development agents
- [ ] **Dependencies** are correctly specified
- [ ] **Documentation** is clear and comprehensive
- [ ] **Examples** demonstrate practical usage
- [ ] **Agent registration** in agents.json is complete

### Code Quality Requirements

- **No malicious code** - All contributions are reviewed for security
- **Clean markup** - Proper Markdown formatting
- **Consistent naming** - Follow existing naming conventions
- **Complete documentation** - All sections properly documented

## 🔄 Pull Request Process

### PR Requirements

1. **Clear title** describing the contribution
2. **Detailed description** explaining the changes
3. **Testing evidence** showing the agent works locally
4. **Documentation updates** if applicable
5. **Agent registration** in agents.json if adding new agents

### PR Template

```markdown
## Description
Brief description of what this PR adds/changes/fixes.

## Type of Contribution
- [ ] New agent
- [ ] Agent improvement
- [ ] Documentation update
- [ ] Bug fix
- [ ] Infrastructure improvement

## Agent Details (if applicable)
- **Agent name**: `agent-name`
- **Category**: category-name
- **Technology/domain**: relevant technology
- **Key capabilities**: list main capabilities

## Testing
- [ ] Tested locally by installing agents
- [ ] Agent responds to expected triggers
- [ ] Documentation is accurate
- [ ] Examples work as described

## Checklist
- [ ] YAML frontmatter is properly formatted
- [ ] Agent registered in agents.json
- [ ] MCP integration included (if core development agent)
- [ ] Documentation follows standards
- [ ] No malicious code included
```

### Review Process

1. **Automated checks** - Formatting and structure validation
2. **Maintainer review** - Technical accuracy and fit
3. **Community feedback** - Additional input when valuable
4. **Integration testing** - Ensure no conflicts with existing agents
5. **Merge and release** - Integration into main system

## 🎯 Contribution Ideas

### High-Impact Contributions

- **Missing technology agents** - Popular frameworks not yet covered
- **Industry-specific agents** - Healthcare, finance, gaming, etc.
- **Advanced workflow agents** - Complex development processes
- **Integration agents** - Popular external services and APIs

### Documentation Needs

- **Tutorial content** - Step-by-step guides for common workflows
- **Video walkthroughs** - Visual demonstrations of agent usage
- **Case studies** - Real-world implementation examples
- **Best practices** - Proven patterns and approaches

### System Improvements

- **Performance optimizations** - Agent loading and execution efficiency
- **Configuration enhancements** - Better customization options
- **Integration expansions** - New MCP server integrations
- **Quality tools** - Better testing and validation systems

## 🤝 Community Guidelines

### Code of Conduct

- **Respectful communication** - Professional and constructive feedback
- **Collaborative spirit** - Help others learn and improve
- **Quality focus** - Prioritize user value and system reliability
- **Open source values** - Transparent and inclusive development

### Getting Help

- **GitHub Issues** - Technical questions and bug reports
- **GitHub Discussions** - Feature ideas and general discussion
- **Documentation** - Comprehensive guides in the docs/ folder
- **Examples** - Working code examples throughout the project

## 📈 Recognition

### Contributor Recognition

- **Commit attribution** - All commits include contributor recognition
- **Release notes** - Major contributions highlighted in releases
- **Documentation credit** - Contributors acknowledged in relevant docs
- **Community showcase** - Outstanding contributions featured

### Agent Attribution

All agents include attribution to their creators and maintain a history of contributions for ongoing improvement and recognition.

## 🚨 Important Notes

### Agent Commit Requirements

**CRITICAL**: All commits must include agent attribution in this exact format:
```
type(scope): description - @agent1 @agent2

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### File Structure Requirements

- **No changes to core structure** without discussion
- **Follow existing patterns** for consistency
- **Test thoroughly** before submitting
- **Document breaking changes** clearly

---

Thank you for contributing to Claude Code Agents! Your contributions help developers worldwide build better software with AI assistance. 🎉

## 📞 Contact

- **Issues**: [GitHub Issues](https://github.com/avivl/claude-007-agents/issues)
- **Discussions**: [GitHub Discussions](https://github.com/avivl/claude-007-agents/discussions)
- **Documentation**: [docs/](docs/) folder

*Let's build the future of AI-assisted development together!* 🚀