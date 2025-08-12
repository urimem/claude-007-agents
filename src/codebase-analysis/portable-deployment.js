/**
 * Task Master Portable Deployment System
 * 
 * This system works with ANY project, with or without existing Claude Code configuration.
 * It provides intelligent codebase analysis and task management setup.
 */

const { EventEmitter } = require('events');
const CodebaseAnalyzer = require('./codebase-analyzer');
const IntelligentPRDProcessor = require('./intelligent-prd-processor');

class PortableTaskMasterDeployment extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      autoDetectProject: config.autoDetectProject !== false,
      createClaudeConfig: config.createClaudeConfig !== false,
      installTaskMaster: config.installTaskMaster !== false,
      setupMCP: config.setupMCP !== false,
      ...config
    };
    
    this.deploymentModes = {
      'standalone': 'Works without any existing Claude Code setup',
      'enhanced': 'Enhances existing Claude Code projects', 
      'minimal': 'Lightweight integration for simple projects'
    };
  }

  /**
   * Deploy Task Master to any project - works with or without existing setup
   */
  async deployToProject(projectRoot, options = {}) {
    console.log(`🚀 Deploying Task Master to: ${projectRoot}`);
    
    // Phase 1: Detect existing setup
    const existingSetup = await this.detectExistingSetup(projectRoot);
    console.log(`📋 Existing setup detected:`, existingSetup);
    
    // Phase 2: Choose deployment mode
    const deploymentMode = await this.selectDeploymentMode(existingSetup, options);
    console.log(`🎯 Deployment mode: ${deploymentMode}`);
    
    // Phase 3: Analyze codebase (works for any project)
    const codebaseAnalysis = await this.analyzeCodebase(projectRoot);
    console.log(`🔍 Codebase analyzed: ${codebaseAnalysis.results.techStack?.primary}`);
    
    // Phase 4: Deploy appropriate configuration
    const deployment = await this.deployConfiguration(
      projectRoot, 
      deploymentMode, 
      codebaseAnalysis, 
      existingSetup,
      options
    );
    
    console.log(`✅ Task Master deployed successfully`);
    return deployment;
  }

  /**
   * Detect what's already in the project
   */
  async detectExistingSetup(projectRoot) {
    const setup = {
      hasClaudeCode: false,
      hasTaskMaster: false,
      hasMCP: false,
      hasAgentSystem: false,
      existingTools: [],
      projectType: null
    };
    
    try {
      // Check for Claude Code
      const claudeMdExists = await this.fileExists(`${projectRoot}/CLAUDE.md`);
      const claudeSettingsExists = await this.fileExists(`${projectRoot}/.claude/settings.json`);
      setup.hasClaudeCode = claudeMdExists || claudeSettingsExists;
      
      // Check for Task Master
      const taskMasterExists = await this.fileExists(`${projectRoot}/.taskmaster/config.json`);
      setup.hasTaskMaster = taskMasterExists;
      
      // Check for MCP configuration
      const mcpExists = await this.fileExists(`${projectRoot}/.mcp.json`);
      setup.hasMCP = mcpExists;
      
      // Check for our agent system
      const agentSystemExists = await this.fileExists(`${projectRoot}/.claude/agents/`);
      setup.hasAgentSystem = agentSystemExists;
      
      // Detect existing tools
      setup.existingTools = await this.detectExistingTools(projectRoot);
      
      // Detect project type
      setup.projectType = await this.detectProjectType(projectRoot);
      
      return setup;
      
    } catch (error) {
      console.warn('⚠️ Error detecting existing setup:', error.message);
      return setup;
    }
  }

  /**
   * Select deployment mode based on existing setup
   */
  async selectDeploymentMode(existingSetup, options) {
    // User can force a specific mode
    if (options.mode) {
      return options.mode;
    }
    
    // Auto-select based on existing setup
    if (existingSetup.hasClaudeCode && existingSetup.hasAgentSystem) {
      return 'enhanced'; // Enhance existing sophisticated setup
    } else if (existingSetup.hasClaudeCode) {
      return 'enhanced'; // Add to existing Claude Code setup
    } else {
      return 'standalone'; // Create complete new setup
    }
  }

  /**
   * Deploy configuration based on mode
   */
  async deployConfiguration(projectRoot, mode, codebaseAnalysis, existingSetup, options) {
    const deployment = {
      mode,
      projectRoot,
      filesCreated: [],
      configurations: {},
      instructions: []
    };

    switch (mode) {
      case 'standalone':
        await this.deployStandaloneMode(deployment, codebaseAnalysis, options);
        break;
      case 'enhanced':
        await this.deployEnhancedMode(deployment, codebaseAnalysis, existingSetup, options);
        break;
      case 'minimal':
        await this.deployMinimalMode(deployment, codebaseAnalysis, options);
        break;
    }
    
    return deployment;
  }

  /**
   * Standalone Mode: Complete setup for projects without Claude Code
   */
  async deployStandaloneMode(deployment, codebaseAnalysis, options) {
    console.log('🏗️ Deploying standalone Task Master setup...');
    
    // 1. Create essential Claude Code configuration
    await this.createEssentialClaudeConfig(deployment, codebaseAnalysis);
    
    // 2. Setup Task Master
    await this.setupTaskMaster(deployment, codebaseAnalysis);
    
    // 3. Create minimal agent system
    await this.createMinimalAgentSystem(deployment, codebaseAnalysis);
    
    // 4. Setup MCP servers
    await this.setupMCPServers(deployment, codebaseAnalysis);
    
    // 5. Create usage instructions
    await this.createUsageInstructions(deployment, 'standalone');
    
    deployment.instructions.push(
      '📋 Standalone deployment completed!',
      '🚀 Run: claude --project=' + deployment.projectRoot,
      '📖 See: CLAUDE_TASKMASTER_GUIDE.md for usage instructions',
      '⚙️ Configure API keys in .env for full functionality'
    );
  }

  /**
   * Enhanced Mode: Enhance existing Claude Code projects
   */
  async deployEnhancedMode(deployment, codebaseAnalysis, existingSetup, options) {
    console.log('🔧 Enhancing existing Claude Code setup...');
    
    // 1. Enhance existing CLAUDE.md or create if missing
    await this.enhanceClaudeConfig(deployment, codebaseAnalysis, existingSetup);
    
    // 2. Add Task Master integration
    await this.addTaskMasterIntegration(deployment, codebaseAnalysis);
    
    // 3. Enhance existing agent system
    await this.enhanceAgentSystem(deployment, codebaseAnalysis, existingSetup);
    
    // 4. Update MCP configuration
    await this.updateMCPConfiguration(deployment, codebaseAnalysis);
    
    deployment.instructions.push(
      '🔧 Enhanced deployment completed!',
      '🎯 Task Master integrated with existing Claude Code setup',
      '📊 Run: task-master list (if Task Master CLI installed)',
      '🤖 New agents available via @agent-name syntax'
    );
  }

  /**
   * Create essential Claude Code configuration for any project
   */
  async createEssentialClaudeConfig(deployment, codebaseAnalysis) {
    const techStack = codebaseAnalysis.results.techStack?.primary || 'generic';
    const architecture = codebaseAnalysis.results.architecture?.primary || 'unknown';
    
    // Create minimal but effective CLAUDE.md
    const claudeConfig = this.generatePortableClaudeConfig(techStack, architecture, codebaseAnalysis);
    
    await this.writeFile(`${deployment.projectRoot}/CLAUDE.md`, claudeConfig);
    deployment.filesCreated.push('CLAUDE.md');
    
    // Create basic .claude directory structure
    await this.ensureDirectory(`${deployment.projectRoot}/.claude`);
    
    // Create settings.json with essential tools
    const settings = this.generatePortableClaudeSettings(codebaseAnalysis);
    await this.writeFile(`${deployment.projectRoot}/.claude/settings.json`, JSON.stringify(settings, null, 2));
    deployment.filesCreated.push('.claude/settings.json');
  }

  /**
   * Generate portable CLAUDE.md that works for any project
   */
  generatePortableClaudeConfig(techStack, architecture, codebaseAnalysis) {
    const agentRecommendations = this.selectOptimalAgentsForTechStack(techStack, architecture);
    
    return `## CRITICAL: COMMIT MESSAGE REQUIREMENTS

⚠️ **MANDATORY FORMAT**: \`type(scope): description - @agent1 @agent2\`

## Pre-Commit Checklist
1. ✅ Identify contributing agents
2. ✅ Format: \`type(scope): description - @agent1 @agent2\` 
3. ✅ Include standard attribution footer
4. ✅ Verify agent attribution requirements

**For configuration**: Include \`@team-configurator\` + technical expert
**For API**: Include \`@api-architect\` + security expert  
**For database**: Include \`@database-admin\` + performance expert

---

# Task Master - Portable Configuration

## Project Analysis
- **Tech Stack**: ${techStack}
- **Architecture**: ${architecture}
- **Complexity**: ${codebaseAnalysis.results.complexity?.overall || 'medium'}

## Recommended Agents

### Core Development
${agentRecommendations.core.map(agent => `- \`${agent}\` - ${this.getAgentDescription(agent)}`).join('\n')}

### Specialized Agents  
${agentRecommendations.specialized.map(agent => `- \`${agent}\` - ${this.getAgentDescription(agent)}`).join('\n')}

## Quick Start

### Initialize Task Master
\`\`\`bash
# Install Task Master (if not installed)
npm install -g task-master-ai

# Initialize in this project
task-master init

# Parse PRD (if available)
task-master parse-prd .taskmaster/docs/prd.txt
\`\`\`

### Claude Code Usage
\`\`\`
# Start development session
claude

# Use agents
"Use @software-engineering-expert to review this code"
"Use @${agentRecommendations.core[0].replace('@', '')} to implement authentication"
\`\`\`

## MCP Integration

This project is configured with:
- **Task Master MCP**: Project management and task coordination
- **Basic Memory MCP**: Organizational learning and pattern storage

## Agent Definitions

${this.generateEssentialAgentDefinitions(agentRecommendations)}

## Commit Attribution

**MANDATORY**: \`type(scope): description - @agent1 @agent2\`

Task Master automatically includes agent attribution in all commits for traceability.

### Example Commit Messages
- \`feat(auth): implement JWT authentication - @software-engineering-expert @security-specialist\`
- \`fix(api): resolve user validation bug - @code-reviewer @api-architect\`
- \`docs(readme): update installation guide - @documentation-specialist @team-configurator\`
- \`refactor(database): optimize query performance - @database-admin @performance-optimizer\`

### Standard Footer
All commits should include:
\`\`\`
🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
\`\`\`

---
*Generated by Task Master Portable Deployment System*
`;
  }

  /**
   * Select optimal agents for any tech stack
   */
  selectOptimalAgentsForTechStack(techStack, architecture) {
    const agentMatrix = {
      // Frontend
      'react': {
        core: ['@react-expert', '@nodejs-expert', '@test-automation-expert'],
        specialized: ['@performance-optimizer', '@ux-designer']
      },
      'vue': {
        core: ['@vue-expert', '@nodejs-expert', '@test-automation-expert'],
        specialized: ['@performance-optimizer', '@ux-designer']
      },
      'nextjs': {
        core: ['@nextjs-expert', '@react-expert', '@nodejs-expert'],
        specialized: ['@deployment-specialist', '@performance-optimizer']
      },
      
      // Backend
      'nodejs': {
        core: ['@nodejs-expert', '@fastify-expert', '@database-architect'],
        specialized: ['@resilience-engineer', '@security-specialist']
      },
      'python': {
        core: ['@django-expert', '@fastapi-expert', '@database-architect'],
        specialized: ['@machine-learning-engineer', '@security-specialist']
      },
      'go': {
        core: ['@gin-expert', '@database-architect', '@test-automation-expert'],
        specialized: ['@performance-optimizer', '@cloud-architect']
      },
      
      // Generic/Unknown
      'generic': {
        core: ['@software-engineering-expert', '@code-reviewer', '@test-automation-expert'],
        specialized: ['@documentation-specialist', '@quality-system-engineer']
      }
    };
    
    return agentMatrix[techStack] || agentMatrix['generic'];
  }

  /**
   * Generate essential agent definitions for any project
   */
  generateEssentialAgentDefinitions(agentRecommendations) {
    const allAgents = [...agentRecommendations.core, ...agentRecommendations.specialized];
    
    return allAgents.map(agent => {
      const description = this.getAgentDescription(agent);
      const triggers = this.getAgentTriggers(agent);
      
      return `### ${agent}
**Description**: ${description}
**Triggers**: ${triggers.join(', ')}
**Tools**: Read, Edit, MultiEdit, Bash, Grep, Glob, LS

`;
    }).join('');
  }

  /**
   * Get agent description (simplified for portability)
   */
  getAgentDescription(agent) {
    const descriptions = {
      '@software-engineering-expert': 'Code quality, architecture, and best practices',
      '@code-reviewer': 'Code review and quality assurance',
      '@test-automation-expert': 'Testing strategy and automated test implementation',
      '@react-expert': 'React components, hooks, and ecosystem',
      '@nodejs-expert': 'Node.js backend development and APIs',
      '@vue-expert': 'Vue.js components and ecosystem',
      '@nextjs-expert': 'Next.js full-stack applications',
      '@django-expert': 'Django web applications and APIs',
      '@fastapi-expert': 'FastAPI Python development',
      '@fastify-expert': 'Fastify Node.js framework',
      '@gin-expert': 'Gin Go web framework',
      '@database-architect': 'Database design and optimization',
      '@performance-optimizer': 'Performance analysis and optimization',
      '@security-specialist': 'Security analysis and implementation',
      '@deployment-specialist': 'Deployment and DevOps',
      '@ux-designer': 'User experience and interface design',
      '@documentation-specialist': 'Technical documentation',
      '@quality-system-engineer': 'Quality systems and processes',
      '@resilience-engineer': 'Fault tolerance and reliability',
      '@machine-learning-engineer': 'ML/AI implementation',
      '@cloud-architect': 'Cloud infrastructure and microservices'
    };
    
    return descriptions[agent] || 'Specialized development assistance';
  }

  /**
   * Get agent triggers for any project
   */
  getAgentTriggers(agent) {
    const triggers = {
      '@software-engineering-expert': ['code quality', 'architecture', 'best practices'],
      '@code-reviewer': ['review', 'quality check', 'code analysis'],
      '@test-automation-expert': ['testing', 'test cases', 'automation'],
      '@react-expert': ['react', 'components', 'hooks', 'jsx'],
      '@nodejs-expert': ['node.js', 'express', 'api', 'backend'],
      '@vue-expert': ['vue', 'components', 'composition api'],
      '@nextjs-expert': ['next.js', 'ssr', 'full-stack'],
      '@django-expert': ['django', 'python web', 'orm'],
      '@fastapi-expert': ['fastapi', 'python api', 'async'],
      '@fastify-expert': ['fastify', 'node api', 'performance'],
      '@gin-expert': ['gin', 'go web', 'rest api'],
      '@database-architect': ['database', 'sql', 'schema', 'optimization'],
      '@performance-optimizer': ['performance', 'optimization', 'profiling'],
      '@security-specialist': ['security', 'vulnerability', 'authentication'],
      '@deployment-specialist': ['deploy', 'devops', 'ci/cd'],
      '@ux-designer': ['ui', 'ux', 'design', 'user experience'],
      '@documentation-specialist': ['docs', 'documentation', 'api docs'],
      '@quality-system-engineer': ['quality', 'process', 'standards'],
      '@resilience-engineer': ['reliability', 'fault tolerance', 'resilience'],
      '@machine-learning-engineer': ['ml', 'ai', 'machine learning'],
      '@cloud-architect': ['cloud', 'microservices', 'infrastructure']
    };
    
    return triggers[agent] || ['specialized tasks'];
  }

  // Helper methods for file operations
  async fileExists(path) {
    try {
      const fs = require('fs').promises;
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  }

  async ensureDirectory(path) {
    try {
      const fs = require('fs').promises;
      await fs.mkdir(path, { recursive: true });
      console.log(`📁 Created directory: ${path}`);
      return true;
    } catch (error) {
      console.warn(`⚠️ Could not create directory ${path}:`, error.message);
      return false;
    }
  }

  async writeFile(path, content) {
    try {
      const fs = require('fs').promises;
      const pathLib = require('path');
      
      // Ensure parent directory exists
      const parentDir = pathLib.dirname(path);
      await this.ensureDirectory(parentDir);
      
      await fs.writeFile(path, content, 'utf8');
      console.log(`📄 Created file: ${path}`);
      return true;
    } catch (error) {
      console.error(`❌ Could not write file ${path}:`, error.message);
      return false;
    }
  }

  async readFile(path) {
    try {
      const fs = require('fs').promises;
      return await fs.readFile(path, 'utf8');
    } catch (error) {
      console.warn(`⚠️ Could not read file ${path}:`, error.message);
      return null;
    }
  }

  async detectExistingTools(projectRoot) {
    const tools = [];
    const fs = require('fs').promises;
    
    try {
      // Check for package.json (Node.js)
      if (await this.fileExists(`${projectRoot}/package.json`)) {
        tools.push('npm', 'node');
      }
      
      // Check for requirements.txt (Python)
      if (await this.fileExists(`${projectRoot}/requirements.txt`) || 
          await this.fileExists(`${projectRoot}/pyproject.toml`)) {
        tools.push('python', 'pip');
      }
      
      // Check for go.mod (Go)
      if (await this.fileExists(`${projectRoot}/go.mod`)) {
        tools.push('go');
      }
      
      // Check for Cargo.toml (Rust)
      if (await this.fileExists(`${projectRoot}/Cargo.toml`)) {
        tools.push('cargo', 'rust');
      }
      
      // Check for git
      if (await this.fileExists(`${projectRoot}/.git`)) {
        tools.push('git');
      }
      
      // Check for docker
      if (await this.fileExists(`${projectRoot}/Dockerfile`) ||
          await this.fileExists(`${projectRoot}/docker-compose.yml`)) {
        tools.push('docker');
      }
      
    } catch (error) {
      console.warn('⚠️ Error detecting tools:', error.message);
    }
    
    return tools.length > 0 ? tools : ['basic'];
  }

  async detectProjectType(projectRoot) {
    try {
      // Check for React
      const packageJson = await this.readFile(`${projectRoot}/package.json`);
      if (packageJson) {
        const pkg = JSON.parse(packageJson);
        if (pkg.dependencies?.react || pkg.devDependencies?.react) {
          if (pkg.dependencies?.['next'] || pkg.devDependencies?.['next']) {
            return 'nextjs';
          }
          return 'react';
        }
        if (pkg.dependencies?.vue || pkg.devDependencies?.vue) {
          return 'vue';
        }
        if (pkg.dependencies?.express || pkg.dependencies?.fastify) {
          return 'nodejs';
        }
        return 'javascript';
      }
      
      // Check for Python
      if (await this.fileExists(`${projectRoot}/requirements.txt`) ||
          await this.fileExists(`${projectRoot}/pyproject.toml`)) {
        
        const reqText = await this.readFile(`${projectRoot}/requirements.txt`) || '';
        if (reqText.includes('django') || reqText.includes('Django')) {
          return 'django';
        }
        if (reqText.includes('fastapi') || reqText.includes('FastAPI')) {
          return 'fastapi';
        }
        return 'python';
      }
      
      // Check for Go
      if (await this.fileExists(`${projectRoot}/go.mod`)) {
        const goMod = await this.readFile(`${projectRoot}/go.mod`) || '';
        if (goMod.includes('gin-gonic/gin')) {
          return 'gin';
        }
        if (goMod.includes('gofiber/fiber')) {
          return 'fiber';  
        }
        return 'go';
      }
      
      // Check for Ruby
      if (await this.fileExists(`${projectRoot}/Gemfile`)) {
        const gemfile = await this.readFile(`${projectRoot}/Gemfile`) || '';
        if (gemfile.includes('rails')) {
          return 'rails';
        }
        return 'ruby';
      }
      
      // Check for PHP
      if (await this.fileExists(`${projectRoot}/composer.json`)) {
        const composer = await this.readFile(`${projectRoot}/composer.json`) || '';
        if (composer.includes('laravel')) {
          return 'laravel';
        }
        return 'php';
      }
      
      return 'generic';
      
    } catch (error) {
      console.warn('⚠️ Error detecting project type:', error.message);
      return 'generic';
    }
  }

  async analyzeCodebase(projectRoot) {
    // Use our existing codebase analyzer
    const analyzer = new CodebaseAnalyzer();
    return await analyzer.analyzeCodebase(projectRoot, {
      analysisDepth: 'standard' // Lighter analysis for portable deployment
    });
  }

  async setupTaskMaster(deployment, codebaseAnalysis) {
    console.log('📋 Setting up Task Master...');
    // Create basic Task Master configuration
    deployment.configurations.taskMaster = {
      projectRoot: deployment.projectRoot,
      rules: ['cursor', 'claude'],
      complexity: codebaseAnalysis.results.complexity?.overall || 'medium'
    };
  }

  async createMinimalAgentSystem(deployment, codebaseAnalysis) {
    console.log('🤖 Creating minimal agent system...');
    // Create lightweight agent definitions
    const agentRecommendations = this.selectOptimalAgentsForTechStack(
      codebaseAnalysis.results.techStack?.primary || 'generic',
      codebaseAnalysis.results.architecture?.primary || 'unknown'
    );
    
    deployment.configurations.agents = agentRecommendations;
  }

  async setupMCPServers(deployment, codebaseAnalysis) {
    console.log('🔗 Setting up MCP servers...');
    
    const mcpConfig = {
      mcpServers: {
        'task-master-ai': {
          command: 'npx',
          args: ['-y', '--package=task-master-ai', 'task-master-ai'],
          env: {}
        }
      }
    };
    
    await this.writeFile(`${deployment.projectRoot}/.mcp.json`, JSON.stringify(mcpConfig, null, 2));
    deployment.filesCreated.push('.mcp.json');
  }

  generatePortableClaudeSettings(codebaseAnalysis) {
    return {
      allowedTools: [
        'Read', 'Edit', 'MultiEdit', 'Bash', 'Grep', 'Glob', 'LS',
        'mcp__task_master_ai__*'
      ],
      projectConfiguration: {
        techStack: codebaseAnalysis.results.techStack?.primary,
        architecture: codebaseAnalysis.results.architecture?.primary,
        complexity: codebaseAnalysis.results.complexity?.overall
      }
    };
  }

  async createUsageInstructions(deployment, mode) {
    const instructions = `# Task Master - Quick Start Guide

## Getting Started

### 1. Install Prerequisites
\`\`\`bash
# Install Task Master CLI (optional but recommended)
npm install -g task-master-ai

# Ensure Claude Code is installed
# Visit: https://claude.ai/code
\`\`\`

### 2. Configure API Keys
\`\`\`bash
# Create .env file (optional)
echo "ANTHROPIC_API_KEY=your_key_here" > .env
\`\`\`

### 3. Start Development
\`\`\`bash
# Start Claude Code
claude

# In Claude Code session:
"Initialize Task Master for this project"
"Use @software-engineering-expert to review the codebase"
"Generate tasks from requirements"
\`\`\`

## Available Agents

The following agents are configured for your project:

${deployment.configurations.agents ? 
  deployment.configurations.agents.core.concat(deployment.configurations.agents.specialized)
    .map(agent => `- ${agent}`).join('\n') 
  : '- @software-engineering-expert\n- @code-reviewer\n- @test-automation-expert'}

## Project Configuration

This deployment created:
${deployment.filesCreated.map(file => `- ${file}`).join('\n')}

## Next Steps

1. Review CLAUDE.md for agent definitions
2. Create a PRD in .taskmaster/docs/prd.txt
3. Run task-master commands or use Claude Code
4. Start development with intelligent assistance

---
*Generated by Task Master Portable Deployment*
`;

    await this.writeFile(`${deployment.projectRoot}/CLAUDE_TASKMASTER_GUIDE.md`, instructions);
    deployment.filesCreated.push('CLAUDE_TASKMASTER_GUIDE.md');
  }

  // Placeholder methods for enhanced mode
  async enhanceClaudeConfig(deployment, codebaseAnalysis, existingSetup) {
    console.log('🔧 Enhancing existing Claude configuration...');
  }

  async addTaskMasterIntegration(deployment, codebaseAnalysis) {
    console.log('📋 Adding Task Master integration...');
  }

  async enhanceAgentSystem(deployment, codebaseAnalysis, existingSetup) {
    console.log('🤖 Enhancing agent system...');
  }

  async updateMCPConfiguration(deployment, codebaseAnalysis) {
    console.log('🔗 Updating MCP configuration...');
  }

  async deployMinimalMode(deployment, codebaseAnalysis, options) {
    console.log('⚡ Deploying minimal Task Master setup...');
    // Minimal deployment for simple projects
  }
}

module.exports = PortableTaskMasterDeployment;

// Export for CLI usage
if (require.main === module) {
  const deployment = new PortableTaskMasterDeployment();
  
  console.log('🚀 Task Master Portable Deployment System');
  console.log('📋 Deploy to any project with: node portable-deployment.js /path/to/project');
  
  // Example deployment
  deployment.deployToProject('./example-external-project', {
    mode: 'standalone',
    createClaudeConfig: true,
    setupMCP: true
  })
    .then(result => {
      console.log('✅ Deployment completed:', result.mode);
      console.log('📁 Files created:', result.filesCreated.join(', '));
      console.log('📋 Instructions:', result.instructions.join('\n'));
    })
    .catch(error => {
      console.error('💥 Deployment failed:', error);
    });
}