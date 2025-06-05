import { getDataStore } from "./data-store.mjs";
import { getLogger } from "./logger.mjs";

const logger = getLogger();
const metricsStore = getDataStore("metrics");

/**
 * Script metrics tracking system
 */
export class MetricsTracker {
  constructor(scriptName) {
    this.scriptName = scriptName;
    this.startTime = Date.now();
    this.counters = new Map();
    this.timers = new Map();
    this.gauges = new Map();
  }

  /**
   * Increment a counter
   */
  incrementCounter(name, value = 1) {
    const current = this.counters.get(name) || 0;
    this.counters.set(name, current + value);
    return current + value;
  }

  /**
   * Start a timer
   */
  startTimer(name) {
    this.timers.set(name, {
      start: Date.now(),
      end: null,
      duration: null,
    });
    return this;
  }

  /**
   * End a timer
   */
  endTimer(name) {
    const timer = this.timers.get(name);
    if (!timer) {
      logger.warn(`Timer "${name}" not found`);
      return null;
    }

    timer.end = Date.now();
    timer.duration = timer.end - timer.start;
    this.timers.set(name, timer);
    return timer.duration;
  }

  /**
   * Set a gauge value
   */
  setGauge(name, value) {
    this.gauges.set(name, value);
    return this;
  }

  /**
   * Get collected metrics
   */
  getMetrics() {
    const endTime = Date.now();
    const totalDuration = endTime - this.startTime;

    const metrics = {
      scriptName: this.scriptName,
      timestamp: new Date().toISOString(),
      duration: totalDuration,
      counters: Object.fromEntries(this.counters),
      timers: Object.fromEntries(this.timers),
      gauges: Object.fromEntries(this.gauges),
    };

    return metrics;
  }

  /**
   * Print metrics summary
   */
  printSummary() {
    const metrics = this.getMetrics();

    logger.info("Script Metrics Summary:");
    logger.info(`- Script: ${metrics.scriptName}`);
    logger.info(`- Duration: ${metrics.duration}ms`);

    if (this.counters.size > 0) {
      logger.info("- Counters:");
      for (const [name, value] of this.counters.entries()) {
        logger.info(`  - ${name}: ${value}`);
      }
    }

    if (this.timers.size > 0) {
      logger.info("- Timers:");
      for (const [name, timer] of this.timers.entries()) {
        if (timer.duration !== null) {
          logger.info(`  - ${name}: ${timer.duration}ms`);
        } else {
          logger.info(`  - ${name}: (not completed)`);
        }
      }
    }

    if (this.gauges.size > 0) {
      logger.info("- Gauges:");
      for (const [name, value] of this.gauges.entries()) {
        logger.info(`  - ${name}: ${value}`);
      }
    }
  }

  /**
   * Save metrics to persistent store
   */
  async saveMetrics() {
    const metrics = this.getMetrics();

    try {
      // Get historical metrics for this script
      const history = (await metricsStore.get(this.scriptName)) || [];

      // Add current metrics
      history.push(metrics);

      // Keep last 10 executions
      if (history.length > 10) {
        history.shift();
      }

      // Save back
      await metricsStore.set(this.scriptName, history);

      // Update aggregates
      await this.updateAggregates(metrics);

      return true;
    } catch (error) {
      logger.error(`Failed to save metrics: ${error.message}`);
      return false;
    }
  }

  /**
   * Update aggregate metrics
   */
  async updateAggregates(metrics) {
    try {
      const allScripts = (await metricsStore.get("_all")) || {
        executionCount: 0,
        totalDuration: 0,
        averageDuration: 0,
        lastExecution: null,
      };

      allScripts.executionCount += 1;
      allScripts.totalDuration += metrics.duration;
      allScripts.averageDuration =
        allScripts.totalDuration / allScripts.executionCount;
      allScripts.lastExecution = metrics.timestamp;

      await metricsStore.set("_all", allScripts);
    } catch (error) {
      logger.error(`Failed to update aggregate metrics: ${error.message}`);
    }
  }
}

// Map to hold tracker instances
const trackers = new Map();

/**
 * Get a metrics tracker for a script
 */
export function getMetricsTracker(scriptName) {
  if (!trackers.has(scriptName)) {
    trackers.set(scriptName, new MetricsTracker(scriptName));
  }
  return trackers.get(scriptName);
}
