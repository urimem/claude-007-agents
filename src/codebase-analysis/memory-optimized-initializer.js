
/**
 * Memory-Optimized Project Initializer
 * Uses streaming and memory pools for efficiency
 */
class MemoryOptimizedInitializer {
    constructor(config = {}) {
        this.config = config;
        this.streamProcessor = new StreamProcessor();
        this.memoryPool = new MemoryPool();
    }

    async initializeProject(projectRoot, options = {}) {
        if (this.shouldUseStreaming(projectRoot)) {
            return this.streamingInitialize(projectRoot, options);
        }
        return this.standardInitialize(projectRoot, options);
    }

    async streamingInitialize(projectRoot, options) {
        const streams = await this.createInitializationStreams(projectRoot);
        return this.streamProcessor.processAll(streams, options);
    }
}

module.exports = MemoryOptimizedInitializer;