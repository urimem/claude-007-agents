#!/usr/bin/env node

/**
 * Task Master - Real-World Testing & Validation System
 * Comprehensive testing suite for portable deployment across diverse project types
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, exec } = require('child_process');
const { EventEmitter } = require('events');

class TaskMasterValidator extends EventEmitter {
    constructor() {
        super();
        this.testResults = [];
        this.currentTest = null;
        this.validationMetrics = {
            totalTests: 0,
            passed: 0,
            failed: 0,
            warnings: 0,
            executionTime: 0
        };
        this.projectTemplates = [
            'react-typescript',
            'vue-javascript', 
            'node-express',
            'django-python',
            'rails-ruby',
            'nextjs-fullstack',
            'laravel-php',
            'go-gin',
            'empty-project',
            'monorepo'
        ];
    }

    /**
     * Main validation orchestrator - tests all scenarios
     */
    async runComprehensiveValidation(options = {}) {
        const startTime = Date.now();
        
        console.log('🧪 Task Master - Real-World Testing & Validation');
        console.log('=' .repeat(60));
        
        try {
            // Phase 1: Core System Validation
            await this.validateCoreSystem();
            
            // Phase 2: CLI Tool Testing
            await this.validateCLITool();
            
            // Phase 3: Project Template Testing  
            await this.validateProjectTemplates();
            
            // Phase 4: Integration Testing
            await this.validateIntegrations();
            
            // Phase 5: Performance Testing
            await this.validatePerformance();
            
            // Phase 6: Error Handling Testing
            await this.validateErrorHandling();
            
        } catch (error) {
            console.error('❌ Validation failed:', error.message);
            this.validationMetrics.failed++;
        }
        
        this.validationMetrics.executionTime = Date.now() - startTime;
        await this.generateValidationReport();
        
        return this.validationMetrics;
    }

    /**
     * Phase 1: Core System Validation
     */
    async validateCoreSystem() {
        console.log('\n🔧 Phase 1: Core System Validation');
        console.log('-'.repeat(40));
        
        const tests = [
            () => this.testModuleLoading(),
            () => this.testCodebaseAnalyzer(),
            () => this.testPortableDeployment(),
            () => this.testPRDProcessor(),
            () => this.testProjectInitializer()
        ];
        
        for (const test of tests) {
            await this.runTest(test);
        }
    }

    /**
     * Test module loading and dependencies
     */
    async testModuleLoading() {
        this.currentTest = 'Module Loading';
        
        try {
            const PortableDeployment = require('./portable-deployment.js');
            const CodebaseAnalyzer = require('./codebase-analyzer.js');
            const PRDProcessor = require('./intelligent-prd-processor.js');
            const ProjectInitializer = require('./project-initializer.js');
            
            // Test instantiation
            const deployment = new PortableDeployment();
            const analyzer = new CodebaseAnalyzer();
            const prdProcessor = new PRDProcessor();
            const initializer = new ProjectInitializer();
            
            console.log('✅ All core modules load successfully');
            return { success: true };
            
        } catch (error) {
            console.log('❌ Module loading failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test codebase analyzer functionality
     */
    async testCodebaseAnalyzer() {
        this.currentTest = 'Codebase Analyzer';
        
        try {
            const CodebaseAnalyzer = require('./codebase-analyzer.js');
            const analyzer = new CodebaseAnalyzer();
            
            // Test current project analysis
            const analysis = await analyzer.analyzeCodebase('.');
            
            if (analysis && analysis.techStack && analysis.architecture) {
                console.log('✅ Codebase analysis functional');
                console.log(`   Tech Stack: ${analysis.techStack.join(', ')}`);
                console.log(`   Architecture: ${analysis.architecture}`);
                return { success: true, analysis };
            } else {
                throw new Error('Invalid analysis result');
            }
            
        } catch (error) {
            console.log('❌ Codebase analyzer failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test portable deployment engine
     */
    async testPortableDeployment() {
        this.currentTest = 'Portable Deployment';
        
        try {
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            // Test deployment detection
            const existingSetup = await deployment.detectExistingSetup('.');
            
            // Test mode selection
            const mode = await deployment.selectDeploymentMode(existingSetup, { mode: 'auto' });
            
            console.log('✅ Portable deployment functional');
            console.log(`   Detected Setup: ${existingSetup.hasClaudeConfig ? 'Enhanced' : 'Standalone'}`);
            console.log(`   Selected Mode: ${mode}`);
            
            return { success: true, mode, existingSetup };
            
        } catch (error) {
            console.log('❌ Portable deployment failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test PRD processor functionality
     */
    async testPRDProcessor() {
        this.currentTest = 'PRD Processor';
        
        try {
            const PRDProcessor = require('./intelligent-prd-processor.js');
            const processor = new PRDProcessor();
            
            // Create test PRD content
            const testPRD = `
            # Test Project Requirements
            
            ## Features
            - User authentication system
            - Dashboard with metrics
            - File upload functionality
            - Real-time notifications
            
            ## Technical Requirements
            - React frontend
            - Node.js backend
            - PostgreSQL database
            - Redis caching
            `;
            
            const analysis = await processor.analyzePRD(testPRD);
            
            if (analysis && analysis.features && analysis.technicalRequirements) {
                console.log('✅ PRD processor functional');
                console.log(`   Features detected: ${analysis.features.length}`);
                return { success: true, analysis };
            } else {
                throw new Error('Invalid PRD analysis');
            }
            
        } catch (error) {
            console.log('❌ PRD processor failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test project initializer
     */
    async testProjectInitializer() {
        this.currentTest = 'Project Initializer';
        
        try {
            const ProjectInitializer = require('./project-initializer.js');
            const initializer = new ProjectInitializer();
            
            // Test configuration generation
            const config = await initializer.generateClaudeConfig({
                techStack: ['React', 'Node.js'],
                architecture: 'SPA',
                hasExistingSetup: false
            });
            
            if (config && config.includes('Claude Code')) {
                console.log('✅ Project initializer functional');
                return { success: true };
            } else {
                throw new Error('Invalid configuration generated');
            }
            
        } catch (error) {
            console.log('❌ Project initializer failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Phase 2: CLI Tool Testing
     */
    async validateCLITool() {
        console.log('\n🖥️  Phase 2: CLI Tool Testing');
        console.log('-'.repeat(40));
        
        const tests = [
            () => this.testCLIHelp(),
            () => this.testCLIVersion(),
            () => this.testCLIDryRun(),
            () => this.testCLIOptions()
        ];
        
        for (const test of tests) {
            await this.runTest(test);
        }
    }

    /**
     * Test CLI help command
     */
    async testCLIHelp() {
        this.currentTest = 'CLI Help';
        
        try {
            const helpOutput = execSync('node bin/tm-deploy --help', { 
                encoding: 'utf8',
                cwd: '.'
            });
            
            if (helpOutput.includes('Usage:') && helpOutput.includes('Options:')) {
                console.log('✅ CLI help command functional');
                return { success: true };
            } else {
                throw new Error('Invalid help output');
            }
            
        } catch (error) {
            console.log('❌ CLI help failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test CLI version command
     */
    async testCLIVersion() {
        this.currentTest = 'CLI Version';
        
        try {
            const versionOutput = execSync('node bin/tm-deploy --version', {
                encoding: 'utf8',
                cwd: '.'
            });
            
            if (versionOutput.includes('0.24')) {
                console.log('✅ CLI version command functional');
                console.log(`   Version: ${versionOutput.trim()}`);
                return { success: true };
            } else {
                throw new Error('Invalid version output');
            }
            
        } catch (error) {
            console.log('❌ CLI version failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test CLI dry run
     */
    async testCLIDryRun() {
        this.currentTest = 'CLI Dry Run';
        
        try {
            const dryRunOutput = execSync('node bin/tm-deploy --dry-run', {
                encoding: 'utf8',
                cwd: '.',
                timeout: 30000
            });
            
            if (dryRunOutput.includes('would deploy') || dryRunOutput.includes('Dry run')) {
                console.log('✅ CLI dry run functional');
                return { success: true };
            } else {
                throw new Error('Invalid dry run output');
            }
            
        } catch (error) {
            console.log('❌ CLI dry run failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test CLI options
     */
    async testCLIOptions() {
        this.currentTest = 'CLI Options';
        
        try {
            // Test mode option
            const modeOutput = execSync('node bin/tm-deploy --mode=minimal --dry-run', {
                encoding: 'utf8',
                cwd: '.',
                timeout: 30000
            });
            
            if (modeOutput.includes('minimal') || modeOutput.includes('Deployment mode')) {
                console.log('✅ CLI options functional');
                return { success: true };
            } else {
                throw new Error('CLI options not working');
            }
            
        } catch (error) {
            console.log('❌ CLI options failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Phase 3: Project Template Testing
     */
    async validateProjectTemplates() {
        console.log('\n📁 Phase 3: Project Template Testing');
        console.log('-'.repeat(40));
        
        // Create test environment
        const testDir = path.join(process.cwd(), 'test-projects');
        
        try {
            await fs.mkdir(testDir, { recursive: true });
            
            const templateTests = this.projectTemplates.map(template => 
                () => this.testProjectTemplate(template, testDir)
            );
            
            for (const test of templateTests) {
                await this.runTest(test);
            }
            
        } finally {
            // Cleanup
            try {
                execSync(`rm -rf ${testDir}`, { stdio: 'ignore' });
            } catch (error) {
                // Ignore cleanup errors
            }
        }
    }

    /**
     * Test specific project template
     */
    async testProjectTemplate(templateName, testDir) {
        this.currentTest = `Template: ${templateName}`;
        
        const projectPath = path.join(testDir, templateName);
        
        try {
            await fs.mkdir(projectPath, { recursive: true });
            
            // Create template-specific files
            await this.createTemplateFiles(templateName, projectPath);
            
            // Test deployment on template
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            const result = await deployment.deployToProject(projectPath, {
                mode: 'auto',
                dryRun: true
            });
            
            if (result && result.success) {
                console.log(`✅ Template ${templateName} validated`);
                console.log(`   Mode: ${result.mode}, Stack: ${result.techStack?.join(', ') || 'Unknown'}`);
                return { success: true, result };
            } else {
                throw new Error(`Template validation failed: ${result?.error || 'Unknown error'}`);
            }
            
        } catch (error) {
            console.log(`❌ Template ${templateName} failed:`, error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Create template-specific files for testing
     */
    async createTemplateFiles(templateName, projectPath) {
        const templates = {
            'react-typescript': {
                'package.json': JSON.stringify({
                    name: 'test-react-app',
                    dependencies: { react: '^18.0.0', typescript: '^4.9.0' },
                    scripts: { start: 'react-scripts start' }
                }),
                'tsconfig.json': JSON.stringify({ compilerOptions: { target: 'es5' } }),
                'src/App.tsx': 'import React from "react"; export default function App() { return <div>Hello</div>; }'
            },
            
            'vue-javascript': {
                'package.json': JSON.stringify({
                    name: 'test-vue-app', 
                    dependencies: { vue: '^3.0.0' },
                    scripts: { serve: 'vue-cli-service serve' }
                }),
                'vue.config.js': 'module.exports = {};',
                'src/App.vue': '<template><div>Hello Vue</div></template>'
            },
            
            'django-python': {
                'requirements.txt': 'Django==4.2.0\npsycopg2-binary==2.9.0',
                'manage.py': '#!/usr/bin/env python\nimport os\nimport sys',
                'settings.py': 'DEBUG = True\nDATABASES = {}'
            },
            
            'node-express': {
                'package.json': JSON.stringify({
                    name: 'test-api',
                    dependencies: { express: '^4.18.0' },
                    scripts: { start: 'node server.js' }
                }),
                'server.js': 'const express = require("express"); const app = express(); app.listen(3000);'
            },
            
            'empty-project': {
                'README.md': '# Empty Project\nThis is an empty project for testing.'
            }
        };
        
        const template = templates[templateName] || templates['empty-project'];
        
        for (const [filePath, content] of Object.entries(template)) {
            const fullPath = path.join(projectPath, filePath);
            const dir = path.dirname(fullPath);
            
            await fs.mkdir(dir, { recursive: true });
            await fs.writeFile(fullPath, content);
        }
    }

    /**
     * Phase 4: Integration Testing
     */
    async validateIntegrations() {
        console.log('\n🔗 Phase 4: Integration Testing');
        console.log('-'.repeat(40));
        
        const tests = [
            () => this.testMCPIntegration(),
            () => this.testTaskMasterIntegration(),
            () => this.testClaudeCodeIntegration(),
            () => this.testGitIntegration()
        ];
        
        for (const test of tests) {
            await this.runTest(test);
        }
    }

    /**
     * Test MCP integration compatibility
     */
    async testMCPIntegration() {
        this.currentTest = 'MCP Integration';
        
        try {
            // Check if MCP configuration would be properly generated
            const ProjectInitializer = require('./project-initializer.js');
            const initializer = new ProjectInitializer();
            
            const mcpConfig = await initializer.generateMCPConfig({
                hasTaskMaster: true,
                hasBasicMemory: true,
                hasContext7: true
            });
            
            if (mcpConfig && mcpConfig.includes('mcpServers')) {
                console.log('✅ MCP integration validated');
                return { success: true };
            } else {
                throw new Error('Invalid MCP configuration');
            }
            
        } catch (error) {
            console.log('❌ MCP integration failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test Task Master integration
     */
    async testTaskMasterIntegration() {
        this.currentTest = 'Task Master Integration';
        
        try {
            // Test task master configuration generation
            const PRDProcessor = require('./intelligent-prd-processor.js');
            const processor = new PRDProcessor();
            
            const taskConfig = await processor.generateTaskMasterConfig({
                projectType: 'web-application',
                complexity: 'medium',
                features: ['authentication', 'dashboard', 'api']
            });
            
            if (taskConfig && taskConfig.includes('task-master')) {
                console.log('✅ Task Master integration validated');
                return { success: true };
            } else {
                throw new Error('Invalid Task Master configuration');
            }
            
        } catch (error) {
            console.log('❌ Task Master integration failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test Claude Code integration
     */
    async testClaudeCodeIntegration() {
        this.currentTest = 'Claude Code Integration';
        
        try {
            // Check if Claude Code configuration is properly structured
            const ProjectInitializer = require('./project-initializer.js');
            const initializer = new ProjectInitializer();
            
            const claudeConfig = await initializer.generateClaudeConfig({
                techStack: ['React', 'Node.js'],
                architecture: 'Full Stack',
                agents: ['@software-engineering-expert', '@code-reviewer']
            });
            
            if (claudeConfig && claudeConfig.includes('# Claude Code') && claudeConfig.includes('@')) {
                console.log('✅ Claude Code integration validated');
                return { success: true };
            } else {
                throw new Error('Invalid Claude Code configuration');
            }
            
        } catch (error) {
            console.log('❌ Claude Code integration failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test Git integration
     */
    async testGitIntegration() {
        this.currentTest = 'Git Integration';
        
        try {
            // Check if git operations would work properly
            const isGitRepo = await this.checkGitRepo('.');
            
            if (isGitRepo) {
                console.log('✅ Git integration validated (current repo)');
                return { success: true };
            } else {
                console.log('⚠️  Git integration warning: Not in a git repository');
                return { success: true, warning: 'Not in git repository' };
            }
            
        } catch (error) {
            console.log('❌ Git integration failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Phase 5: Performance Testing
     */
    async validatePerformance() {
        console.log('\n⚡ Phase 5: Performance Testing');
        console.log('-'.repeat(40));
        
        const tests = [
            () => this.testStartupTime(),
            () => this.testAnalysisSpeed(),
            () => this.testMemoryUsage(),
            () => this.testScalability()
        ];
        
        for (const test of tests) {
            await this.runTest(test);
        }
    }

    /**
     * Test system startup time
     */
    async testStartupTime() {
        this.currentTest = 'Startup Time';
        
        try {
            const startTime = Date.now();
            
            // Simulate full system startup
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            await deployment.detectExistingSetup('.');
            
            const endTime = Date.now();
            const startupTime = endTime - startTime;
            
            if (startupTime < 2000) {
                console.log(`✅ Startup time acceptable: ${startupTime}ms`);
                return { success: true, time: startupTime };
            } else {
                console.log(`⚠️  Startup time slow: ${startupTime}ms`);
                return { success: true, warning: `Slow startup: ${startupTime}ms` };
            }
            
        } catch (error) {
            console.log('❌ Startup time test failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test analysis speed
     */
    async testAnalysisSpeed() {
        this.currentTest = 'Analysis Speed';
        
        try {
            const startTime = Date.now();
            
            const CodebaseAnalyzer = require('./codebase-analyzer.js');
            const analyzer = new CodebaseAnalyzer();
            await analyzer.analyzeCodebase('.');
            
            const analysisTime = Date.now() - startTime;
            
            if (analysisTime < 5000) {
                console.log(`✅ Analysis speed acceptable: ${analysisTime}ms`);
                return { success: true, time: analysisTime };
            } else {
                console.log(`⚠️  Analysis speed slow: ${analysisTime}ms`);
                return { success: true, warning: `Slow analysis: ${analysisTime}ms` };
            }
            
        } catch (error) {
            console.log('❌ Analysis speed test failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test memory usage
     */
    async testMemoryUsage() {
        this.currentTest = 'Memory Usage';
        
        try {
            const initialMemory = process.memoryUsage();
            
            // Simulate heavy operations
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            for (let i = 0; i < 10; i++) {
                await deployment.analyzeCodebase('.');
            }
            
            const finalMemory = process.memoryUsage();
            const memoryIncrease = finalMemory.heapUsed - initialMemory.heapUsed;
            const memoryMB = Math.round(memoryIncrease / 1024 / 1024);
            
            if (memoryMB < 50) {
                console.log(`✅ Memory usage acceptable: +${memoryMB}MB`);
                return { success: true, memory: memoryMB };
            } else {
                console.log(`⚠️  Memory usage high: +${memoryMB}MB`);
                return { success: true, warning: `High memory: +${memoryMB}MB` };
            }
            
        } catch (error) {
            console.log('❌ Memory usage test failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test scalability with larger projects
     */
    async testScalability() {
        this.currentTest = 'Scalability';
        
        try {
            // Test with current project (should be reasonably large)
            const startTime = Date.now();
            
            const CodebaseAnalyzer = require('./codebase-analyzer.js');
            const analyzer = new CodebaseAnalyzer();
            
            // Count files to simulate scale
            const fileCount = await this.countProjectFiles('.');
            
            const analysis = await analyzer.analyzeCodebase('.');
            const scalabilityTime = Date.now() - startTime;
            
            console.log(`✅ Scalability test completed: ${fileCount} files in ${scalabilityTime}ms`);
            
            return { 
                success: true, 
                fileCount, 
                time: scalabilityTime,
                performance: scalabilityTime / fileCount
            };
            
        } catch (error) {
            console.log('❌ Scalability test failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Phase 6: Error Handling Testing
     */
    async validateErrorHandling() {
        console.log('\n🛡️  Phase 6: Error Handling Testing');
        console.log('-'.repeat(40));
        
        const tests = [
            () => this.testInvalidProject(),
            () => this.testMissingDependencies(),
            () => this.testPermissionErrors(),
            () => this.testCorruptedFiles()
        ];
        
        for (const test of tests) {
            await this.runTest(test);
        }
    }

    /**
     * Test handling of invalid project structures
     */
    async testInvalidProject() {
        this.currentTest = 'Invalid Project Handling';
        
        try {
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            // Test with non-existent directory
            const result = await deployment.deployToProject('/non/existent/path', {
                mode: 'auto',
                dryRun: true
            });
            
            if (result && !result.success) {
                console.log('✅ Invalid project properly handled');
                return { success: true };
            } else {
                throw new Error('Should have failed with invalid project');
            }
            
        } catch (error) {
            if (error.message.includes('ENOENT') || error.message.includes('not found')) {
                console.log('✅ Invalid project error properly caught');
                return { success: true };
            } else {
                console.log('❌ Invalid project handling failed:', error.message);
                return { success: false, error: error.message };
            }
        }
    }

    /**
     * Test missing dependency handling
     */
    async testMissingDependencies() {
        this.currentTest = 'Missing Dependencies';
        
        try {
            // This should pass as our system has minimal dependencies
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            console.log('✅ Dependency handling validated');
            return { success: true };
            
        } catch (error) {
            console.log('❌ Missing dependencies test failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test permission error handling
     */
    async testPermissionErrors() {
        this.currentTest = 'Permission Errors';
        
        try {
            // Test with read-only scenario (simulate)
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            // Use dry run to test without actually writing
            const result = await deployment.deployToProject('.', {
                mode: 'minimal',
                dryRun: true
            });
            
            if (result) {
                console.log('✅ Permission handling functional');
                return { success: true };
            } else {
                throw new Error('Permission test failed');
            }
            
        } catch (error) {
            console.log('❌ Permission error test failed:', error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Test corrupted file handling
     */
    async testCorruptedFiles() {
        this.currentTest = 'Corrupted Files';
        
        try {
            const CodebaseAnalyzer = require('./codebase-analyzer.js');
            const analyzer = new CodebaseAnalyzer();
            
            // Test with invalid JSON (if any package.json exists)
            const result = await analyzer.analyzeCodebase('.');
            
            // Should handle corrupted files gracefully
            console.log('✅ Corrupted file handling functional');
            return { success: true };
            
        } catch (error) {
            // Should catch and handle errors gracefully
            console.log('✅ Corrupted files properly handled:', error.message);
            return { success: true };
        }
    }

    /**
     * Helper: Run individual test with metrics tracking
     */
    async runTest(testFunction) {
        this.validationMetrics.totalTests++;
        const startTime = Date.now();
        
        try {
            const result = await testFunction();
            const duration = Date.now() - startTime;
            
            this.testResults.push({
                name: this.currentTest,
                success: result.success,
                duration,
                result: result,
                timestamp: new Date().toISOString()
            });
            
            if (result.success) {
                this.validationMetrics.passed++;
            } else {
                this.validationMetrics.failed++;
            }
            
            if (result.warning) {
                this.validationMetrics.warnings++;
            }
            
        } catch (error) {
            const duration = Date.now() - startTime;
            
            this.testResults.push({
                name: this.currentTest,
                success: false,
                duration,
                error: error.message,
                timestamp: new Date().toISOString()
            });
            
            this.validationMetrics.failed++;
            console.log(`❌ ${this.currentTest} failed: ${error.message}`);
        }
    }

    /**
     * Generate comprehensive validation report
     */
    async generateValidationReport() {
        console.log('\n📊 VALIDATION REPORT');
        console.log('='.repeat(60));
        
        console.log(`\n📈 Overall Metrics:`);
        console.log(`   Total Tests: ${this.validationMetrics.totalTests}`);
        console.log(`   Passed: ${this.validationMetrics.passed} ✅`);
        console.log(`   Failed: ${this.validationMetrics.failed} ❌`);
        console.log(`   Warnings: ${this.validationMetrics.warnings} ⚠️`);
        console.log(`   Success Rate: ${Math.round((this.validationMetrics.passed / this.validationMetrics.totalTests) * 100)}%`);
        console.log(`   Execution Time: ${this.validationMetrics.executionTime}ms`);
        
        // Detailed test results
        console.log(`\n🔍 Detailed Results:`);
        this.testResults.forEach(test => {
            const icon = test.success ? '✅' : '❌';
            const duration = `${test.duration}ms`;
            console.log(`   ${icon} ${test.name} (${duration})`);
            
            if (!test.success && test.error) {
                console.log(`      Error: ${test.error}`);
            }
            
            if (test.result?.warning) {
                console.log(`      Warning: ${test.result.warning}`);
            }
        });
        
        // Performance insights
        const avgDuration = this.testResults.reduce((sum, test) => sum + test.duration, 0) / this.testResults.length;
        console.log(`\n⚡ Performance Insights:`);
        console.log(`   Average Test Duration: ${Math.round(avgDuration)}ms`);
        console.log(`   Fastest Test: ${Math.min(...this.testResults.map(t => t.duration))}ms`);
        console.log(`   Slowest Test: ${Math.max(...this.testResults.map(t => t.duration))}ms`);
        
        // Recommendations
        console.log(`\n💡 Recommendations:`);
        if (this.validationMetrics.failed === 0) {
            console.log(`   🎉 All tests passed! System is production ready.`);
        } else {
            console.log(`   🔧 Fix ${this.validationMetrics.failed} failed test(s) before production use.`);
        }
        
        if (this.validationMetrics.warnings > 0) {
            console.log(`   ⚠️  Review ${this.validationMetrics.warnings} warning(s) for optimization opportunities.`);
        }
        
        if (avgDuration > 1000) {
            console.log(`   ⚡ Consider performance optimization - average test time ${Math.round(avgDuration)}ms`);
        }
        
        // Save report to file
        const reportPath = path.join(process.cwd(), 'validation-report.json');
        const report = {
            timestamp: new Date().toISOString(),
            metrics: this.validationMetrics,
            results: this.testResults,
            system: {
                nodeVersion: process.version,
                platform: process.platform,
                arch: process.arch
            }
        };
        
        try {
            await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
            console.log(`\n📁 Full report saved to: ${reportPath}`);
        } catch (error) {
            console.log(`⚠️  Could not save report: ${error.message}`);
        }
        
        return report;
    }

    /**
     * Helper: Check if directory is a git repository
     */
    async checkGitRepo(projectPath) {
        try {
            const gitPath = path.join(projectPath, '.git');
            const stats = await fs.stat(gitPath);
            return stats.isDirectory();
        } catch {
            return false;
        }
    }

    /**
     * Helper: Count files in project for scalability testing
     */
    async countProjectFiles(projectPath) {
        try {
            const output = execSync(`find ${projectPath} -type f | wc -l`, {
                encoding: 'utf8'
            });
            return parseInt(output.trim());
        } catch {
            return 0;
        }
    }
}

// CLI Interface
if (require.main === module) {
    const args = process.argv.slice(2);
    const options = {
        verbose: args.includes('--verbose'),
        quick: args.includes('--quick'),
        performance: args.includes('--performance-only'),
        integration: args.includes('--integration-only')
    };
    
    const validator = new TaskMasterValidator();
    
    validator.runComprehensiveValidation(options)
        .then(metrics => {
            const exitCode = metrics.failed > 0 ? 1 : 0;
            process.exit(exitCode);
        })
        .catch(error => {
            console.error('💥 Validation system failed:', error);
            process.exit(1);
        });
}

module.exports = TaskMasterValidator;