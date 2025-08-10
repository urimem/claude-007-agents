/**
 * Task Master 0.24.0 Bridge Agents - Main Entry Point
 * 
 * This is the main implementation entry point that coordinates both
 * TaskOrchestratorBridge and TaskExecutorBridge agents.
 */

const TaskOrchestratorBridge = require('./task-orchestrator-bridge');
const TaskExecutorBridge = require('./task-executor-bridge');

class BridgeAgentSystem {
  constructor(config = {}) {
    this.config = {
      // MCP Configuration
      taskMasterMCP: process.env.TASK_MASTER_MCP || 'mcp://task-master-ai',
      basicMemoryMCP: process.env.BASIC_MEMORY_MCP || 'mcp://basic-memory',
      sequentialThinkingMCP: process.env.SEQUENTIAL_THINKING_MCP || 'mcp://sequential-thinking',
      
      // Performance Configuration
      maxParallelTasks: parseInt(process.env.MAX_PARALLEL_TASKS) || 5,
      maxConcurrentTasks: parseInt(process.env.MAX_CONCURRENT_TASKS) || 10,
      orchestrationTimeout: parseInt(process.env.ORCHESTRATION_TIMEOUT) || 300000, // 5 minutes
      
      // Integration Configuration
      enableHealthChecks: process.env.ENABLE_HEALTH_CHECKS !== 'false',
      logLevel: process.env.LOG_LEVEL || 'info',
      
      ...config
    };
    
    this.orchestrator = null;
    this.executor = null;
    this.isInitialized = false;
    this.systemMetrics = {
      systemStartTime: Date.now(),
      totalOrchestrations: 0,
      totalTasksExecuted: 0,
      systemUptime: 0,
      healthScore: 1.0
    };
  }

  /**
   * Initialize the complete bridge agent system
   */
  async initialize() {
    console.log('🚀 Initializing Bridge Agent System...');
    
    try {
      // Initialize Task Orchestrator Bridge
      console.log('📋 Starting Task Orchestrator Bridge...');
      this.orchestrator = new TaskOrchestratorBridge(this.config);
      await this.waitForReady(this.orchestrator);
      
      // Initialize Task Executor Bridge (if not already initialized by orchestrator)
      if (!this.orchestrator.executorBridge) {
        console.log('⚡ Starting Task Executor Bridge...');
        this.executor = new TaskExecutorBridge(this.config);
        await this.waitForReady(this.executor);
      } else {
        this.executor = this.orchestrator.executorBridge;
      }
      
      // Setup system-level coordination
      await this.setupSystemCoordination();
      
      // Start health monitoring
      if (this.config.enableHealthChecks) {
        this.startHealthMonitoring();
      }
      
      this.isInitialized = true;
      console.log('✅ Bridge Agent System initialized successfully');
      
      return {
        status: 'initialized',
        orchestrator: this.orchestrator.getStatus(),
        executor: this.executor.getStatus(),
        systemMetrics: this.getSystemMetrics()
      };
      
    } catch (error) {
      console.error('❌ Failed to initialize Bridge Agent System:', error);
      throw error;
    }
  }

  /**
   * Wait for an agent to be ready
   */
  async waitForReady(agent) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Agent initialization timeout'));
      }, 30000); // 30 second timeout
      
      agent.once('ready', () => {
        clearTimeout(timeout);
        resolve();
      });
      
      agent.once('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  /**
   * Setup system-level coordination between bridges
   */
  async setupSystemCoordination() {
    console.log('🔗 Setting up system coordination...');
    
    // Coordinate metrics between orchestrator and executor
    this.orchestrator.on('orchestrationCompleted', (orchestration) => {
      this.systemMetrics.totalOrchestrations++;
      this.logSystemEvent('orchestration_completed', { id: orchestration.id });
    });
    
    this.orchestrator.on('orchestrationFailed', (data) => {
      this.logSystemEvent('orchestration_failed', data);
    });
    
    this.executor.on('taskFailed', (data) => {
      this.logSystemEvent('task_failed', data);
    });
    
    // Setup cross-bridge communication if needed
    this.orchestrator.bridgeSystem = this;
    this.executor.bridgeSystem = this;
    
    console.log('✅ System coordination setup complete');
  }

  /**
   * Start health monitoring
   */
  startHealthMonitoring() {
    console.log('🏥 Starting system health monitoring...');
    
    // Monitor system health every 60 seconds
    setInterval(() => {
      this.updateSystemHealth();
    }, 60000);
    
    // Log system metrics every 5 minutes
    setInterval(() => {
      this.logSystemMetrics();
    }, 300000);
    
    console.log('✅ Health monitoring started');
  }

  /**
   * Update system health metrics
   */
  updateSystemHealth() {
    const now = Date.now();
    this.systemMetrics.systemUptime = now - this.systemMetrics.systemStartTime;
    
    // Calculate health score based on various factors
    let healthScore = 1.0;
    
    // Check orchestrator health
    if (!this.orchestrator || this.orchestrator.orchestrationMetrics.orchestrationsFailed > 0) {
      healthScore -= 0.1;
    }
    
    // Check executor health  
    if (!this.executor || this.executor.executionMetrics.tasksFailed > 0) {
      healthScore -= 0.1;
    }
    
    // Check MCP connections
    const orchestratorStatus = this.orchestrator.getStatus();
    const executorStatus = this.executor.getStatus();
    
    const mcpConnections = [
      orchestratorStatus.mcpConnections?.taskMaster,
      orchestratorStatus.mcpConnections?.basicMemory,
      executorStatus.mcpConnections?.taskMaster,
      executorStatus.mcpConnections?.basicMemory
    ];
    
    const healthyConnections = mcpConnections.filter(conn => conn).length;
    const totalConnections = mcpConnections.length;
    
    if (healthyConnections < totalConnections) {
      healthScore -= (totalConnections - healthyConnections) * 0.1;
    }
    
    this.systemMetrics.healthScore = Math.max(0, healthScore);
    
    if (this.systemMetrics.healthScore < 0.8) {
      console.warn(`⚠️  System health degraded: ${this.systemMetrics.healthScore}`);
    }
  }

  /**
   * Log system event
   */
  logSystemEvent(eventType, data) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      eventType,
      data,
      systemUptime: this.systemMetrics.systemUptime
    };
    
    if (this.config.logLevel === 'debug') {
      console.log(`📝 System Event: ${JSON.stringify(logEntry)}`);
    }
  }

  /**
   * Log system metrics
   */
  logSystemMetrics() {
    console.log('📊 System Metrics:', JSON.stringify(this.getSystemMetrics(), null, 2));
  }

  /**
   * Get comprehensive system metrics
   */
  getSystemMetrics() {
    const orchestratorStatus = this.orchestrator?.getStatus();
    const executorStatus = this.executor?.getStatus();
    
    return {
      ...this.systemMetrics,
      systemStatus: this.isInitialized ? 'running' : 'initializing',
      orchestrator: orchestratorStatus || { status: 'not_initialized' },
      executor: executorStatus || { status: 'not_initialized' },
      combinedMetrics: {
        totalTasksInSystem: (orchestratorStatus?.activeOrchestrations || 0) + (executorStatus?.activeTasks || 0),
        totalAgentsRegistered: executorStatus?.registeredAgents || 0,
        averageSystemPerformance: this.calculateAverageSystemPerformance()
      }
    };
  }

  /**
   * Calculate average system performance
   */
  calculateAverageSystemPerformance() {
    if (!this.orchestrator || !this.executor) return 0;
    
    const orchestratorPerf = this.orchestrator.orchestrationMetrics.averageOrchestrationTime || 0;
    const executorPerf = this.executor.executionMetrics.averageExecutionTime || 0;
    
    // Convert to performance score (lower time = higher score)
    const maxTime = 300000; // 5 minutes maximum
    const orchestratorScore = Math.max(0, 1 - (orchestratorPerf / maxTime));
    const executorScore = Math.max(0, 1 - (executorPerf / maxTime));
    
    return (orchestratorScore + executorScore) / 2;
  }

  /**
   * Execute a complete orchestration from PRD
   */
  async orchestrateProject(prdPath, projectContext) {
    if (!this.isInitialized) {
      throw new Error('Bridge Agent System not initialized');
    }
    
    console.log(`🎯 Starting project orchestration: ${prdPath}`);
    
    try {
      const result = await this.orchestrator.orchestrateFromPRD(prdPath, projectContext);
      this.systemMetrics.totalTasksExecuted += result.tasks?.length || 0;
      
      return result;
    } catch (error) {
      console.error(`❌ Project orchestration failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Execute a single task
   */
  async executeTask(taskId, taskData) {
    if (!this.isInitialized) {
      throw new Error('Bridge Agent System not initialized');
    }
    
    console.log(`⚡ Executing single task: ${taskId}`);
    
    try {
      const result = await this.executor.executeTask(taskId, taskData);
      this.systemMetrics.totalTasksExecuted++;
      
      return result;
    } catch (error) {
      console.error(`❌ Task execution failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Graceful shutdown
   */
  async shutdown() {
    console.log('🛑 Shutting down Bridge Agent System...');
    
    try {
      // Stop accepting new work
      this.isInitialized = false;
      
      // Wait for active tasks to complete (with timeout)
      const shutdownTimeout = 60000; // 1 minute
      const shutdownStart = Date.now();
      
      while (Date.now() - shutdownStart < shutdownTimeout) {
        const orchestratorStatus = this.orchestrator?.getStatus();
        const executorStatus = this.executor?.getStatus();
        
        const activeWork = (orchestratorStatus?.activeOrchestrations || 0) + 
                          (executorStatus?.activeTasks || 0);
        
        if (activeWork === 0) {
          break;
        }
        
        console.log(`⏳ Waiting for ${activeWork} active tasks to complete...`);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
      
      console.log('✅ Bridge Agent System shutdown complete');
      
    } catch (error) {
      console.error('❌ Error during shutdown:', error);
    }
  }
}

// Export the main class
module.exports = BridgeAgentSystem;

// CLI usage
if (require.main === module) {
  const bridgeSystem = new BridgeAgentSystem();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received shutdown signal...');
    await bridgeSystem.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received termination signal...');
    await bridgeSystem.shutdown();
    process.exit(0);
  });
  
  // Initialize and start
  bridgeSystem.initialize()
    .then((status) => {
      console.log('🎉 Bridge Agent System ready!');
      console.log('Status:', JSON.stringify(status, null, 2));
      
      // Example usage - orchestrate a sample project
      if (process.argv.includes('--example')) {
        console.log('🚀 Running example orchestration...');
        
        bridgeSystem.orchestrateProject('./example-prd.txt', {
          projectType: 'web-application',
          techStack: ['Node.js', 'React', 'TypeScript'],
          environment: 'development'
        }).then(result => {
          console.log('✅ Example orchestration completed:', result.id);
          console.log('📊 Final system metrics:', JSON.stringify(bridgeSystem.getSystemMetrics(), null, 2));
        }).catch(error => {
          console.error('❌ Example orchestration failed:', error.message);
        });
      }
    })
    .catch((error) => {
      console.error('💥 Failed to initialize Bridge Agent System:', error);
      process.exit(1);
    });
}