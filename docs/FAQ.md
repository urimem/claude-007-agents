# Frequently Asked Questions (FAQ)

## 🚀 **Performance & System Questions**

### **Q: Won't having 70+ agents slow down the system?**

**A: Actually, it's faster, not slower!** Here's why:

#### **Agents Don't Run Simultaneously**
- **Reality**: Only the agents you specifically call are activated
- **Example**: When you use `@rails-expert`, only that one agent runs - not all 70
- **Think of it like**: Having 70 tools in a toolbox doesn't make the hammer heavier

#### **No Background Processing**
- Agents are **stateless** - they don't consume resources when not in use
- No memory overhead from unused agents
- Each agent is just a specialized prompt/instruction set

#### **Actually Improves Performance**
```bash
# Without agents: Generic response, multiple back-and-forth
claude "Help me build authentication"
# → Generic advice, you ask follow-ups, clarifications, etc.

# With agents: Specialized, focused response
claude "Use @rails-expert + @security-specialist for Rails authentication"
# → Immediate, specific, production-ready guidance
```

#### **Technical Reality**
- **File Size**: Agent files are just markdown text (~2-10KB each)
- **Loading**: Claude Code loads only requested agents
- **Network**: No additional API calls or external dependencies
- **Processing**: Same underlying Claude model, just with specialized context

#### **User Benefits**
- **Fewer iterations**: Get the right answer faster
- **Less context switching**: No need to research best practices
- **Focused responses**: Agent expertise prevents generic advice

**Simple Analogy**: *"Having 70 specialized agents is like having a well-organized toolbox. You don't carry all the tools at once - you just grab the specific screwdriver you need. The fact that you have 70 tools doesn't make the screwdriver any heavier or slower to use."*

**Bottom Line**: More agents = better precision = fewer iterations = faster overall workflow.

---

## 📦 **Installation & Setup Questions**

### **Q: Do I need to install all agents?**
**A:** No! You can:
- Install only the agents you need for your tech stack
- Start with a few core agents and add more later
- Use the `@team-configurator` to get recommendations for your specific project

### **Q: What's the difference between the installation methods?**
**A:** Three options:
- **Project-specific**: Copy agents to your project's `.claude/` folder (isolated)
- **Global**: Install to `~/.claude/agents/` (available everywhere)
- **Symbolic links**: Link to the repository (stays updated automatically)

### **Q: Can I customize agents for my specific needs?**
**A:** Yes! Agents are markdown files that you can:
- Edit to add your team's specific patterns
- Customize with your preferred libraries/frameworks
- Add company-specific guidelines and standards

---

## 🔧 **Usage & Features Questions**

### **Q: How do I know which agent to use?**
**A:** Several approaches:
- Use `@team-configurator` to analyze your project and get recommendations
- Check the [Agent Catalog](AGENTS.md) for descriptions
- Start with universal agents like `@software-engineering-expert`
- The system can also suggest relevant agents based on your request

### **Q: Can agents work together?**
**A:** Yes! The orchestration system can:
- Coordinate multiple agents on complex tasks
- Use `@orchestrator` for advanced multi-agent coordination
- Combine agents like `@rails-expert + @security-specialist + @performance-optimizer`

### **Q: What are MCP integrations?**
**A:** MCP (Model Context Protocol) integrations provide live access to:
- **GitHub MCP**: Real-time repository operations
- **Task Master MCP**: Project management and task tracking
- **Context7 MCP**: Up-to-date library documentation
- **Basic Memory MCP**: Persistent organizational knowledge

---

## 🛡️ **Security & Quality Questions**

### **Q: What is the "Evil Corp motivation framework"?**
**A:** It's a quality motivation system used by key agents (`@software-engineering-expert`, `@code-reviewer`, `@quality-system-engineer`, `@performance-optimizer`) to ensure extremely high code quality standards. It's clearly labeled and optional - you can modify agent files to remove it if preferred.

### **Q: Are there security considerations?**
**A:** The agents:
- Run locally through Claude Code (no external services)
- Are just markdown instruction files (no executable code)
- Follow defensive security practices
- Include security-focused agents like `@security-specialist`

### **Q: How do quality gates work?**
**A:** Quality features include:
- Pre-commit hooks integration
- Automated linting through Trunk.io integration
- Multi-dimensional code reviews (Security, Performance, Architecture, Quality)
- Structured commit attribution for traceability

---

## 🔄 **Organizational & Memory Questions**

### **Q: How does organizational memory work?**
**A:** With Basic Memory MCP configured:
- Agents can store and retrieve project patterns
- Knowledge persists across projects and team members
- Architectural decisions are tracked and referenced
- Successful patterns are reused automatically

### **Q: Can multiple team members use the same agents?**
**A:** Yes! You can:
- Share agent configurations across your team
- Use organizational memory to build shared knowledge
- Customize agents with team-specific standards
- Track decisions and patterns at the team level

---

## 🎯 **Best Practices Questions**

### **Q: How should I start using the system?**
**A:** Recommended approach:
1. Install the core universal agents first
2. Use `@team-configurator` to analyze your project
3. Add technology-specific agents as needed
4. Configure MCP integrations for enhanced features
5. Gradually expand to specialized domain agents

### **Q: Can I contribute new agents or improvements?**
**A:** Absolutely! This is an open-source project:
- Submit new agents via GitHub pull requests
- Improve existing agents based on your experience
- Share successful patterns and configurations
- Report issues and suggest enhancements

---

## 🤝 **Community & Support**

### **Q: Where can I get help?**
**A:** Several options:
- **Documentation**: Check the [docs/](.) folder for detailed guides
- **GitHub Issues**: Report bugs or ask technical questions
- **GitHub Discussions**: Community discussions and feature requests
- **Agent Catalog**: [AGENTS.md](AGENTS.md) for agent-specific help

### **Q: How do I report a bug or request a feature?**
**A:** Use GitHub:
- **Bugs**: [GitHub Issues](https://github.com/avivl/claude-007-agents/issues)
- **Features**: [GitHub Discussions](https://github.com/avivl/claude-007-agents/discussions)
- **Improvements**: Pull requests are welcome!

---

*Have a question not covered here? [Open an issue](https://github.com/avivl/claude-007-agents/issues) and we'll add it to the FAQ!*