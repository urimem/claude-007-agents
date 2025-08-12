#!/usr/bin/env node

/**
 * Task Master - CLI Entry Point
 * Universal task management system with AI-powered intelligence
 */

const path = require('path');
const fs = require('fs');

// Import core Task Master components
const PortableDeployment = require('../portable-deployment.js');
const AIIntegrationEngine = require('../ai-integration-engine.js');
const CommunityEcosystem = require('../community-ecosystem.js');
const PerformanceOptimizer = require('../performance-optimizer.js');

class TaskMasterCLI {
    constructor() {
        this.deployment = new PortableDeployment();
        this.version = require('../package.json').version;
    }

    async run() {
        const args = process.argv.slice(2);
        const command = args[0];

        try {
            switch (command) {
                case '--version':
                case '-v':
                    this.showVersion();
                    break;
                case '--help':
                case '-h':
                    this.showHelp();
                    break;
                case '--analyze':
                case 'analyze':
                    await this.analyzeProject(args[1] || process.cwd());
                    break;
                case '--deploy':
                case 'deploy':
                    await this.deployToProject(args[1] || process.cwd());
                    break;
                case '--ai-demo':
                case 'ai-demo':
                    await this.runAIDemo();
                    break;
                case '--test':
                case 'test':
                    await this.runTests();
                    break;
                case '--performance':
                case 'performance':
                    await this.runPerformanceBenchmark();
                    break;
                default:
                    if (!command) {
                        this.showHelp();
                    } else {
                        console.error(`Unknown command: ${command}`);
                        this.showHelp();
                        process.exit(1);
                    }
            }
        } catch (error) {
            console.error('❌ Task Master CLI Error:', error.message);
            if (process.env.DEBUG) {
                console.error(error.stack);
            }
            process.exit(1);
        }
    }

    showVersion() {
        console.log(`Task Master CLI v${this.version}`);
        console.log('AI-powered universal task management system');
    }

    showHelp() {
        console.log(`
🤖 Task Master CLI v${this.version}
AI-powered universal task management system

Usage: task-master-local <command> [options]

Commands:
  analyze [path]     Analyze project codebase and architecture
  deploy [path]      Deploy Task Master to project (default: current dir)
  ai-demo           Run AI capabilities demonstration
  test              Run Task Master test suite
  performance       Run performance benchmarks
  
Options:
  -h, --help        Show this help message
  -v, --version     Show version information

Examples:
  task-master-local analyze                    # Analyze current project
  task-master-local deploy /path/to/project    # Deploy to specific project
  task-master-local ai-demo                    # Demo AI capabilities
  task-master-local test                       # Run tests
  task-master-local performance                # Performance benchmarks

For more information, visit: https://github.com/claude-007/task-master
        `);
    }

    async analyzeProject(projectPath) {
        console.log('🔍 Task Master - Project Analysis');
        console.log('='.repeat(50));
        console.log(`Analyzing: ${projectPath}`);
        
        const analysis = await this.deployment.analyzeProject(projectPath);
        
        console.log('\n📊 Analysis Results:');
        console.log(`- Tech Stack: ${analysis.techStack || 'Unknown'}`);
        console.log(`- Architecture: ${analysis.architecture || 'Unknown'}`);
        console.log(`- Complexity: ${analysis.complexity || 'Medium'}`);
        console.log(`- File Count: ${analysis.fileCount || 0}`);
        console.log(`- Languages: ${analysis.languages ? analysis.languages.join(', ') : 'Unknown'}`);
        
        console.log('\n✅ Analysis complete!');
    }

    async deployToProject(projectPath) {
        console.log('🚀 Task Master - Universal Deployment');
        console.log('='.repeat(50));
        console.log(`Deploying to: ${projectPath}`);
        
        const deployment = await this.deployment.deployToProject(projectPath, {
            mode: 'standalone',
            createClaudeConfig: true,
            setupMCP: true
        });
        
        console.log('\n✅ Deployment Results:');
        console.log(`- Files created: ${deployment.filesCreated?.length || 0}`);
        console.log(`- Configuration: ${deployment.configType || 'minimal'}`);
        console.log(`- Mode: ${deployment.mode || 'standalone'}`);
        
        console.log('\n🎯 Next Steps:');
        console.log('1. Review CLAUDE.md for agent definitions');
        console.log('2. Create a PRD in .taskmaster/docs/prd.txt');
        console.log('3. Run Claude Code in the project directory');
        
        console.log('\n✅ Task Master deployed successfully!');
    }

    async runAIDemo() {
        console.log('🤖 Task Master - AI Capabilities Demo');
        console.log('='.repeat(50));
        
        const AITaskDemo = require('../ai-task-demo.js');
        const demo = new AITaskDemo();
        
        await demo.runDemonstration();
    }

    async runTests() {
        console.log('🧪 Task Master - Test Suite');
        console.log('='.repeat(50));
        
        const TestRunner = require('../test-runner.js');
        const tester = new TestRunner();
        
        await tester.runAllTests();
    }

    async runPerformanceBenchmark() {
        console.log('⚡ Task Master - Performance Benchmark');
        console.log('='.repeat(50));
        
        const PerformanceBenchmark = require('../performance-benchmark.js');
        const benchmark = new PerformanceBenchmark();
        
        await benchmark.runBenchmarks();
    }
}

// Run CLI if called directly
if (require.main === module) {
    const cli = new TaskMasterCLI();
    cli.run();
}

module.exports = TaskMasterCLI;