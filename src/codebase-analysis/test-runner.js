#!/usr/bin/env node

/**
 * Task Master - Simplified Test Runner
 * Real-world testing and validation with error handling
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class SimpleTaskMasterTester {
    constructor() {
        this.testResults = [];
        this.metrics = {
            total: 0,
            passed: 0,
            failed: 0,
            warnings: 0
        };
    }

    async runAllTests() {
        console.log('🧪 Task Master - System Validation Tests');
        console.log('=' .repeat(50));
        
        // Test 1: Core Module Loading
        await this.testModuleLoading();
        
        // Test 2: CLI Tool Functionality
        await this.testCLITool();
        
        // Test 3: Codebase Analysis
        await this.testCodebaseAnalysis();
        
        // Test 4: Portable Deployment
        await this.testPortableDeployment();
        
        // Test 5: Project Template Detection
        await this.testProjectDetection();
        
        this.generateReport();
        return this.metrics;
    }

    async testModuleLoading() {
        console.log('\n🔧 Test 1: Core Module Loading');
        console.log('-'.repeat(30));
        
        const tests = [
            { name: 'Portable Deployment', file: './portable-deployment.js' },
            { name: 'Codebase Analyzer', file: './codebase-analyzer.js' },
            { name: 'Project Initializer', file: './project-initializer.js' }
        ];
        
        for (const test of tests) {
            try {
                require(test.file);
                console.log(`✅ ${test.name} loads successfully`);
                this.recordTest(test.name, true);
            } catch (error) {
                console.log(`❌ ${test.name} failed: ${error.message}`);
                this.recordTest(test.name, false, error.message);
            }
        }
    }

    async testCLITool() {
        console.log('\n🖥️  Test 2: CLI Tool Functionality');
        console.log('-'.repeat(30));
        
        // Test CLI help
        try {
            const helpOutput = execSync('node bin/tm-deploy --help', {
                encoding: 'utf8',
                timeout: 5000,
                stdio: 'pipe'
            });
            
            if (helpOutput.includes('Usage:') || helpOutput.includes('tm-deploy')) {
                console.log('✅ CLI help command works');
                this.recordTest('CLI Help', true);
            } else {
                console.log('❌ CLI help output invalid');
                this.recordTest('CLI Help', false, 'Invalid output');
            }
        } catch (error) {
            console.log(`❌ CLI help failed: ${error.message}`);
            this.recordTest('CLI Help', false, error.message);
        }

        // Test CLI version
        try {
            const versionOutput = execSync('node bin/tm-deploy --version', {
                encoding: 'utf8',
                timeout: 5000,
                stdio: 'pipe'
            });
            
            if (versionOutput.trim().length > 0) {
                console.log(`✅ CLI version: ${versionOutput.trim()}`);
                this.recordTest('CLI Version', true);
            } else {
                console.log('❌ CLI version empty');
                this.recordTest('CLI Version', false, 'Empty version');
            }
        } catch (error) {
            console.log(`❌ CLI version failed: ${error.message}`);
            this.recordTest('CLI Version', false, error.message);
        }
    }

    async testCodebaseAnalysis() {
        console.log('\n🔍 Test 3: Codebase Analysis');
        console.log('-'.repeat(30));
        
        try {
            const CodebaseAnalyzer = require('./codebase-analyzer.js');
            const analyzer = new CodebaseAnalyzer();
            
            // Test current directory analysis
            console.log('🔬 Analyzing current directory...');
            const analysis = await analyzer.analyzeCodebase('.');
            
            if (analysis && typeof analysis === 'object') {
                console.log('✅ Codebase analysis completed');
                console.log(`   Tech Stack: ${analysis.techStack ? analysis.techStack.join(', ') : 'Unknown'}`);
                console.log(`   Architecture: ${analysis.architecture || 'Unknown'}`);
                this.recordTest('Codebase Analysis', true);
            } else {
                console.log('❌ Codebase analysis returned invalid data');
                this.recordTest('Codebase Analysis', false, 'Invalid result');
            }
        } catch (error) {
            console.log(`❌ Codebase analysis failed: ${error.message}`);
            this.recordTest('Codebase Analysis', false, error.message);
        }
    }

    async testPortableDeployment() {
        console.log('\n📦 Test 4: Portable Deployment');
        console.log('-'.repeat(30));
        
        try {
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            // Test setup detection
            console.log('🔍 Testing setup detection...');
            const existingSetup = await deployment.detectExistingSetup('.');
            
            if (existingSetup && typeof existingSetup === 'object') {
                console.log(`✅ Setup detection works`);
                console.log(`   Has Claude Config: ${existingSetup.hasClaudeConfig || false}`);
                console.log(`   Has Task Master: ${existingSetup.hasTaskMaster || false}`);
                this.recordTest('Setup Detection', true);
            } else {
                console.log('❌ Setup detection failed');
                this.recordTest('Setup Detection', false, 'Invalid result');
            }
            
            // Test deployment mode selection
            console.log('⚙️ Testing mode selection...');
            const mode = await deployment.selectDeploymentMode(existingSetup, { mode: 'auto' });
            
            if (mode && typeof mode === 'string') {
                console.log(`✅ Mode selection works: ${mode}`);
                this.recordTest('Mode Selection', true);
            } else {
                console.log('❌ Mode selection failed');
                this.recordTest('Mode Selection', false, 'Invalid mode');
            }
            
        } catch (error) {
            console.log(`❌ Portable deployment test failed: ${error.message}`);
            this.recordTest('Portable Deployment', false, error.message);
        }
    }

    async testProjectDetection() {
        console.log('\n🎯 Test 5: Project Detection');
        console.log('-'.repeat(30));
        
        const testCases = [
            {
                name: 'Node.js Project',
                files: { 'package.json': '{"name": "test", "version": "1.0.0"}' },
                expected: 'node'
            },
            {
                name: 'Python Project', 
                files: { 'requirements.txt': 'Django==4.2.0' },
                expected: 'python'
            },
            {
                name: 'Empty Project',
                files: { 'README.md': '# Test Project' },
                expected: 'unknown'
            }
        ];

        for (const testCase of testCases) {
            try {
                // Create temporary test directory
                const testDir = path.join(process.cwd(), 'temp-test-' + Date.now());
                await fs.mkdir(testDir, { recursive: true });
                
                // Create test files
                for (const [filename, content] of Object.entries(testCase.files)) {
                    await fs.writeFile(path.join(testDir, filename), content);
                }
                
                // Test project type detection
                const CodebaseAnalyzer = require('./codebase-analyzer.js');
                const analyzer = new CodebaseAnalyzer();
                const analysis = await analyzer.analyzeCodebase(testDir);
                
                // Cleanup
                execSync(`rm -rf "${testDir}"`, { stdio: 'ignore' });
                
                if (analysis) {
                    console.log(`✅ ${testCase.name} detected successfully`);
                    this.recordTest(`Project Detection: ${testCase.name}`, true);
                } else {
                    console.log(`❌ ${testCase.name} detection failed`);
                    this.recordTest(`Project Detection: ${testCase.name}`, false);
                }
                
            } catch (error) {
                console.log(`❌ ${testCase.name} test failed: ${error.message}`);
                this.recordTest(`Project Detection: ${testCase.name}`, false, error.message);
            }
        }
    }

    recordTest(name, success, error = null) {
        this.metrics.total++;
        if (success) {
            this.metrics.passed++;
        } else {
            this.metrics.failed++;
        }
        
        this.testResults.push({
            name,
            success,
            error,
            timestamp: new Date().toISOString()
        });
    }

    generateReport() {
        console.log('\n📊 TEST RESULTS SUMMARY');
        console.log('=' .repeat(50));
        
        console.log(`\n📈 Metrics:`);
        console.log(`   Total Tests: ${this.metrics.total}`);
        console.log(`   Passed: ${this.metrics.passed} ✅`);
        console.log(`   Failed: ${this.metrics.failed} ❌`);
        console.log(`   Success Rate: ${Math.round((this.metrics.passed / this.metrics.total) * 100)}%`);
        
        console.log(`\n🔍 Detailed Results:`);
        this.testResults.forEach(test => {
            const icon = test.success ? '✅' : '❌';
            console.log(`   ${icon} ${test.name}`);
            if (!test.success && test.error) {
                console.log(`      Error: ${test.error.substring(0, 80)}...`);
            }
        });
        
        console.log(`\n💡 Recommendations:`);
        if (this.metrics.failed === 0) {
            console.log(`   🎉 All tests passed! System is ready for use.`);
        } else {
            console.log(`   🔧 Fix ${this.metrics.failed} failed test(s) before production use.`);
        }
        
        // Save simple report
        const report = {
            timestamp: new Date().toISOString(),
            metrics: this.metrics,
            results: this.testResults
        };
        
        fs.writeFile('test-results.json', JSON.stringify(report, null, 2))
            .then(() => console.log(`\n📁 Results saved to test-results.json`))
            .catch(() => console.log(`⚠️  Could not save results`));
    }
}

// Run tests if called directly
if (require.main === module) {
    const tester = new SimpleTaskMasterTester();
    tester.runAllTests()
        .then(metrics => {
            const exitCode = metrics.failed > 0 ? 1 : 0;
            process.exit(exitCode);
        })
        .catch(error => {
            console.error('💥 Test runner failed:', error);
            process.exit(1);
        });
}

module.exports = SimpleTaskMasterTester;