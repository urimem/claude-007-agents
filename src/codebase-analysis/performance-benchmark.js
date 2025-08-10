#!/usr/bin/env node

/**
 * Task Master - Performance Benchmarking System
 * Tests system performance under various load conditions
 */

const fs = require('fs').promises;
const path = require('path');
const { performance } = require('perf_hooks');

class TaskMasterPerformanceBenchmark {
    constructor() {
        this.benchmarkResults = [];
        this.systemMetrics = {
            startMemory: process.memoryUsage(),
            startTime: performance.now(),
            cpuUsage: process.cpuUsage()
        };
    }

    /**
     * Run comprehensive performance benchmarks
     */
    async runBenchmarks() {
        console.log('⚡ Task Master - Performance Benchmarking');
        console.log('=' .repeat(55));
        
        // System baseline
        await this.recordSystemBaseline();
        
        // Benchmark 1: Cold Start Performance
        await this.benchmarkColdStart();
        
        // Benchmark 2: Codebase Analysis Speed
        await this.benchmarkCodebaseAnalysis();
        
        // Benchmark 3: CLI Responsiveness
        await this.benchmarkCLIResponsiveness();
        
        // Benchmark 4: Memory Usage Under Load
        await this.benchmarkMemoryUsage();
        
        // Benchmark 5: Concurrent Operations
        await this.benchmarkConcurrentOperations();
        
        // Benchmark 6: Large Project Handling
        await this.benchmarkLargeProjects();
        
        // Generate performance report
        await this.generatePerformanceReport();
        
        return this.benchmarkResults;
    }

    /**
     * Record system baseline metrics
     */
    async recordSystemBaseline() {
        console.log('\n📊 System Baseline Metrics');
        console.log('-'.repeat(30));
        
        const baseline = {
            nodeVersion: process.version,
            platform: process.platform,
            arch: process.arch,
            memory: process.memoryUsage(),
            cpu: process.cpuUsage(),
            timestamp: Date.now()
        };
        
        console.log(`✅ Node.js: ${baseline.nodeVersion}`);
        console.log(`✅ Platform: ${baseline.platform} (${baseline.arch})`);
        console.log(`✅ Memory: ${Math.round(baseline.memory.heapUsed / 1024 / 1024)}MB heap`);
        
        this.systemMetrics.baseline = baseline;
    }

    /**
     * Benchmark cold start performance
     */
    async benchmarkColdStart() {
        console.log('\n🚀 Benchmark 1: Cold Start Performance');
        console.log('-'.repeat(35));
        
        const iterations = 5;
        const startTimes = [];
        
        for (let i = 0; i < iterations; i++) {
            const startTime = performance.now();
            
            // Simulate fresh module load
            delete require.cache[require.resolve('./portable-deployment.js')];
            delete require.cache[require.resolve('./codebase-analyzer.js')];
            
            const PortableDeployment = require('./portable-deployment.js');
            const deployment = new PortableDeployment();
            
            const endTime = performance.now();
            const duration = endTime - startTime;
            startTimes.push(duration);
            
            console.log(`   Run ${i + 1}: ${Math.round(duration)}ms`);
        }
        
        const avgStartTime = startTimes.reduce((sum, time) => sum + time, 0) / iterations;
        const minTime = Math.min(...startTimes);
        const maxTime = Math.max(...startTimes);
        
        console.log(`✅ Average cold start: ${Math.round(avgStartTime)}ms`);
        console.log(`   Min: ${Math.round(minTime)}ms, Max: ${Math.round(maxTime)}ms`);
        
        this.benchmarkResults.push({
            name: 'Cold Start Performance',
            metric: 'startup_time_ms',
            average: Math.round(avgStartTime),
            min: Math.round(minTime),
            max: Math.round(maxTime),
            iterations,
            threshold: 2000, // Target: under 2 seconds
            pass: avgStartTime < 2000
        });
    }

    /**
     * Benchmark codebase analysis speed
     */
    async benchmarkCodebaseAnalysis() {
        console.log('\n🔍 Benchmark 2: Codebase Analysis Speed');
        console.log('-'.repeat(35));
        
        const CodebaseAnalyzer = require('./codebase-analyzer.js');
        const analyzer = new CodebaseAnalyzer();
        
        const iterations = 10;
        const analysisTimes = [];
        
        for (let i = 0; i < iterations; i++) {
            const startTime = performance.now();
            
            await analyzer.analyzeCodebase('.');
            
            const endTime = performance.now();
            const duration = endTime - startTime;
            analysisTimes.push(duration);
            
            if (i % 3 === 0) console.log(`   Run ${i + 1}: ${Math.round(duration)}ms`);
        }
        
        const avgAnalysisTime = analysisTimes.reduce((sum, time) => sum + time, 0) / iterations;
        const minTime = Math.min(...analysisTimes);
        const maxTime = Math.max(...analysisTimes);
        
        console.log(`✅ Average analysis: ${Math.round(avgAnalysisTime)}ms`);
        console.log(`   Min: ${Math.round(minTime)}ms, Max: ${Math.round(maxTime)}ms`);
        
        this.benchmarkResults.push({
            name: 'Codebase Analysis Speed',
            metric: 'analysis_time_ms',
            average: Math.round(avgAnalysisTime),
            min: Math.round(minTime),
            max: Math.round(maxTime),
            iterations,
            threshold: 5000, // Target: under 5 seconds
            pass: avgAnalysisTime < 5000
        });
    }

    /**
     * Benchmark CLI responsiveness
     */
    async benchmarkCLIResponsiveness() {
        console.log('\n🖥️  Benchmark 3: CLI Responsiveness');
        console.log('-'.repeat(35));
        
        const { execSync } = require('child_process');
        const cliCommands = [
            'node bin/tm-deploy --help',
            'node bin/tm-deploy --version',
            'node bin/tm-deploy --dry-run'
        ];
        
        const responseTimes = {};
        
        for (const command of cliCommands) {
            const times = [];
            const commandName = command.split(' ').slice(-1)[0];
            
            for (let i = 0; i < 3; i++) {
                const startTime = performance.now();
                
                try {
                    execSync(command, {
                        encoding: 'utf8',
                        timeout: 10000,
                        stdio: 'pipe'
                    });
                } catch (error) {
                    // Some commands may exit with non-zero, but still measure time
                }
                
                const endTime = performance.now();
                const duration = endTime - startTime;
                times.push(duration);
            }
            
            const avgTime = times.reduce((sum, time) => sum + time, 0) / times.length;
            responseTimes[commandName] = Math.round(avgTime);
            
            console.log(`   ${commandName}: ${Math.round(avgTime)}ms`);
        }
        
        const overallAvg = Object.values(responseTimes).reduce((sum, time) => sum + time, 0) / Object.keys(responseTimes).length;
        
        console.log(`✅ Average CLI response: ${Math.round(overallAvg)}ms`);
        
        this.benchmarkResults.push({
            name: 'CLI Responsiveness',
            metric: 'response_time_ms',
            average: Math.round(overallAvg),
            details: responseTimes,
            threshold: 3000, // Target: under 3 seconds
            pass: overallAvg < 3000
        });
    }

    /**
     * Benchmark memory usage under load
     */
    async benchmarkMemoryUsage() {
        console.log('\n🧠 Benchmark 4: Memory Usage Under Load');
        console.log('-'.repeat(35));
        
        const initialMemory = process.memoryUsage();
        console.log(`   Initial heap: ${Math.round(initialMemory.heapUsed / 1024 / 1024)}MB`);
        
        // Simulate heavy usage
        const PortableDeployment = require('./portable-deployment.js');
        const CodebaseAnalyzer = require('./codebase-analyzer.js');
        
        const operations = [];
        const memorySnapshots = [];
        
        // Perform 20 heavy operations
        for (let i = 0; i < 20; i++) {
            const deployment = new PortableDeployment();
            const analyzer = new CodebaseAnalyzer();
            
            // Run multiple analyses
            operations.push(
                analyzer.analyzeCodebase('.'),
                deployment.detectExistingSetup('.'),
                deployment.selectDeploymentMode({}, { mode: 'auto' })
            );
            
            if (i % 5 === 0) {
                const currentMemory = process.memoryUsage();
                memorySnapshots.push(currentMemory.heapUsed);
                console.log(`   After ${i + 1} operations: ${Math.round(currentMemory.heapUsed / 1024 / 1024)}MB`);
            }
        }
        
        await Promise.all(operations);
        
        const finalMemory = process.memoryUsage();
        const memoryIncrease = finalMemory.heapUsed - initialMemory.heapUsed;
        const memoryIncreaseMB = Math.round(memoryIncrease / 1024 / 1024);
        
        console.log(`   Final heap: ${Math.round(finalMemory.heapUsed / 1024 / 1024)}MB`);
        console.log(`✅ Memory increase: +${memoryIncreaseMB}MB`);
        
        this.benchmarkResults.push({
            name: 'Memory Usage Under Load',
            metric: 'memory_increase_mb',
            value: memoryIncreaseMB,
            initial: Math.round(initialMemory.heapUsed / 1024 / 1024),
            final: Math.round(finalMemory.heapUsed / 1024 / 1024),
            threshold: 100, // Target: under 100MB increase
            pass: memoryIncreaseMB < 100
        });
    }

    /**
     * Benchmark concurrent operations
     */
    async benchmarkConcurrentOperations() {
        console.log('\n🔄 Benchmark 5: Concurrent Operations');
        console.log('-'.repeat(35));
        
        const CodebaseAnalyzer = require('./codebase-analyzer.js');
        const concurrentLevels = [1, 5, 10];
        const results = {};
        
        for (const concurrency of concurrentLevels) {
            console.log(`   Testing ${concurrency} concurrent operations...`);
            
            const startTime = performance.now();
            const promises = [];
            
            for (let i = 0; i < concurrency; i++) {
                const analyzer = new CodebaseAnalyzer();
                promises.push(analyzer.analyzeCodebase('.'));
            }
            
            await Promise.all(promises);
            
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            results[concurrency] = Math.round(duration);
            console.log(`     Completed in: ${Math.round(duration)}ms`);
        }
        
        console.log(`✅ Concurrent operations completed`);
        
        this.benchmarkResults.push({
            name: 'Concurrent Operations',
            metric: 'concurrent_time_ms',
            results,
            threshold: 15000, // Target: under 15 seconds for 10 concurrent
            pass: results[10] < 15000
        });
    }

    /**
     * Benchmark large project handling (simulated)
     */
    async benchmarkLargeProjects() {
        console.log('\n📁 Benchmark 6: Large Project Handling');
        console.log('-'.repeat(35));
        
        // Create temporary large project structure
        const testDir = path.join(process.cwd(), 'temp-large-project');
        
        try {
            await fs.mkdir(testDir, { recursive: true });
            
            // Create simulated large project structure
            const fileCount = 50;
            const createPromises = [];
            
            for (let i = 0; i < fileCount; i++) {
                const filePath = path.join(testDir, `file-${i}.js`);
                createPromises.push(
                    fs.writeFile(filePath, `// File ${i}\nmodule.exports = { id: ${i} };\n`)
                );
            }
            
            await Promise.all(createPromises);
            
            // Also create package.json to make it look like a real project
            await fs.writeFile(
                path.join(testDir, 'package.json'),
                JSON.stringify({
                    name: 'large-test-project',
                    version: '1.0.0',
                    main: 'index.js'
                }, null, 2)
            );
            
            console.log(`   Created test project with ${fileCount} files`);
            
            // Test analysis of large project
            const CodebaseAnalyzer = require('./codebase-analyzer.js');
            const analyzer = new CodebaseAnalyzer();
            
            const startTime = performance.now();
            const analysis = await analyzer.analyzeCodebase(testDir);
            const endTime = performance.now();
            
            const duration = endTime - startTime;
            
            console.log(`   Analysis completed in: ${Math.round(duration)}ms`);
            console.log(`✅ Large project handling functional`);
            
            this.benchmarkResults.push({
                name: 'Large Project Handling',
                metric: 'large_analysis_time_ms',
                value: Math.round(duration),
                fileCount,
                threshold: 10000, // Target: under 10 seconds
                pass: duration < 10000
            });
            
        } finally {
            // Cleanup
            try {
                const { execSync } = require('child_process');
                execSync(`rm -rf "${testDir}"`, { stdio: 'ignore' });
            } catch (error) {
                // Ignore cleanup errors
            }
        }
    }

    /**
     * Generate comprehensive performance report
     */
    async generatePerformanceReport() {
        console.log('\n📊 PERFORMANCE BENCHMARK RESULTS');
        console.log('=' .repeat(55));
        
        const passedBenchmarks = this.benchmarkResults.filter(b => b.pass).length;
        const totalBenchmarks = this.benchmarkResults.length;
        const overallPass = passedBenchmarks === totalBenchmarks;
        
        console.log(`\n📈 Overall Performance:`);
        console.log(`   Benchmarks Passed: ${passedBenchmarks}/${totalBenchmarks}`);
        console.log(`   Overall Status: ${overallPass ? '✅ PASS' : '❌ FAIL'}`);
        
        console.log(`\n🔍 Detailed Benchmark Results:`);
        this.benchmarkResults.forEach(benchmark => {
            const status = benchmark.pass ? '✅' : '❌';
            console.log(`   ${status} ${benchmark.name}`);
            
            if (benchmark.average !== undefined) {
                console.log(`      Average: ${benchmark.average}ms (threshold: ${benchmark.threshold}ms)`);
            } else if (benchmark.value !== undefined) {
                console.log(`      Value: ${benchmark.value} (threshold: ${benchmark.threshold})`);
            }
            
            if (!benchmark.pass) {
                console.log(`      ⚠️  Performance below target threshold`);
            }
        });
        
        // Performance insights
        console.log(`\n💡 Performance Insights:`);
        
        const coldStartBenchmark = this.benchmarkResults.find(b => b.name === 'Cold Start Performance');
        if (coldStartBenchmark && coldStartBenchmark.average < 1000) {
            console.log(`   🚀 Excellent cold start performance: ${coldStartBenchmark.average}ms`);
        }
        
        const memoryBenchmark = this.benchmarkResults.find(b => b.name === 'Memory Usage Under Load');
        if (memoryBenchmark && memoryBenchmark.value < 50) {
            console.log(`   🧠 Excellent memory efficiency: +${memoryBenchmark.value}MB`);
        }
        
        const analysisBenchmark = this.benchmarkResults.find(b => b.name === 'Codebase Analysis Speed');
        if (analysisBenchmark && analysisBenchmark.average < 100) {
            console.log(`   ⚡ Lightning fast analysis: ${analysisBenchmark.average}ms`);
        }
        
        console.log(`\n🎯 Recommendations:`);
        if (overallPass) {
            console.log(`   🎉 All performance benchmarks passed!`);
            console.log(`   ✅ System is ready for production workloads`);
        } else {
            const failedBenchmarks = this.benchmarkResults.filter(b => !b.pass);
            console.log(`   🔧 Optimize ${failedBenchmarks.length} performance area(s):`);
            failedBenchmarks.forEach(benchmark => {
                console.log(`      • ${benchmark.name}: improve by ~${Math.round(((benchmark.average || benchmark.value) - benchmark.threshold) / benchmark.threshold * 100)}%`);
            });
        }
        
        // System resource utilization
        const endMetrics = {
            memory: process.memoryUsage(),
            cpu: process.cpuUsage(),
            totalTime: performance.now() - this.systemMetrics.startTime
        };
        
        console.log(`\n💻 System Resource Utilization:`);
        console.log(`   Total Benchmark Time: ${Math.round(endMetrics.totalTime)}ms`);
        console.log(`   Final Memory Usage: ${Math.round(endMetrics.memory.heapUsed / 1024 / 1024)}MB`);
        console.log(`   Memory Efficiency: ${Math.round(endMetrics.memory.heapUsed / endMetrics.totalTime * 1000)} bytes/ms`);
        
        // Save performance report
        const report = {
            timestamp: new Date().toISOString(),
            system: this.systemMetrics,
            benchmarks: this.benchmarkResults,
            summary: {
                totalBenchmarks,
                passedBenchmarks,
                overallPass,
                totalTime: Math.round(endMetrics.totalTime)
            }
        };
        
        try {
            await fs.writeFile('performance-report.json', JSON.stringify(report, null, 2));
            console.log(`\n📁 Full performance report saved to: performance-report.json`);
        } catch (error) {
            console.log(`⚠️  Could not save performance report: ${error.message}`);
        }
        
        return report;
    }
}

// CLI Interface
if (require.main === module) {
    const benchmark = new TaskMasterPerformanceBenchmark();
    
    benchmark.runBenchmarks()
        .then(results => {
            const allPassed = results.every(r => r.pass);
            const exitCode = allPassed ? 0 : 1;
            process.exit(exitCode);
        })
        .catch(error => {
            console.error('💥 Performance benchmark failed:', error);
            process.exit(1);
        });
}

module.exports = TaskMasterPerformanceBenchmark;