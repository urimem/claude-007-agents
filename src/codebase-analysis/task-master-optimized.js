
/**
 * Task Master 0.24.1 - Performance Optimized Edition
 * Production-ready with advanced performance optimizations
 */

const OptimizedCodebaseAnalyzer = require('./optimized-codebase-analyzer');
const ParallelPortableDeployment = require('./parallel-portable-deployment'); 
const MemoryOptimizedInitializer = require('./memory-optimized-initializer');
const PerformanceConfig = require('./performance-config');

class TaskMasterOptimized {
    constructor(config = {}) {
        this.config = { ...PerformanceConfig, ...config };
        this.analyzer = new OptimizedCodebaseAnalyzer(this.config);
        this.deployment = new ParallelPortableDeployment(this.config);
        this.initializer = new MemoryOptimizedInitializer(this.config);
        
        this.performanceMonitor = new PerformanceMonitor();
        this.resourceManager = new AdaptiveResourceManager();
    }
    
    async deployToProject(projectRoot, options = {}) {
        const perfId = this.performanceMonitor.start('deployment');
        
        try {
            // Adaptive performance based on project size
            const projectStats = await this.analyzer.getProjectStats(projectRoot);
            const optimizedOptions = this.optimizeForProject(projectStats, options);
            
            return await this.deployment.deployToProject(projectRoot, optimizedOptions);
            
        } finally {
            this.performanceMonitor.end(perfId);
        }
    }
    
    optimizeForProject(stats, options) {
        // Dynamic optimization based on project characteristics
        if (stats.fileCount > 1000) {
            return { ...options, parallelProcessing: true, caching: true };
        }
        
        if (stats.totalSize > 100 * 1024 * 1024) { // 100MB
            return { ...options, streaming: true, memoryOptimization: true };
        }
        
        return options;
    }
}

module.exports = TaskMasterOptimized;
