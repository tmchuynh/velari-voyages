/**
 * Progress tracking utilities for long-running operations
 */
export class ProgressTracker {
  constructor(options = {}) {
    this.total = options.total || 100;
    this.current = 0;
    this.startTime = Date.now();
    this.lastUpdateTime = this.startTime;
    this.updateInterval = options.updateInterval || 200; // ms
    this.format = options.format || "bar"; // bar, percentage, or count
    this.width = options.width || 30; // Width of the progress bar
    this.message = options.message || "";
    this.showEta = options.showEta !== false;
    this.completed = false;
    this.logFunc = options.logFunc || console.log;
    this.showPercentage = options.showPercentage !== false;
    this.silent = options.silent || false;
  }

  update(current, message = null) {
    if (this.completed || this.silent) return;

    const now = Date.now();
    this.current = current;

    if (message !== null) {
      this.message = message;
    }

    // Throttle updates
    if (now - this.lastUpdateTime < this.updateInterval) {
      return;
    }

    this.lastUpdateTime = now;
    this.render();
  }

  increment(increment = 1, message = null) {
    this.update(this.current + increment, message);
  }

  render() {
    if (this.silent) return;

    const percent = Math.min(
      100,
      Math.round((this.current / this.total) * 100)
    );
    let output = `${this.message ? `${this.message} ` : ""}`;

    if (this.format === "bar") {
      const completed = Math.floor((this.current / this.total) * this.width);
      const remaining = this.width - completed;
      output += `[${Array(completed + 1).join("█")}${Array(remaining + 1).join(" ")}]`;
    }

    if (this.showPercentage) {
      output += ` ${percent}%`;
    }

    if (this.format === "count") {
      output += ` ${this.current}/${this.total}`;
    }

    if (this.showEta && this.current > 0) {
      const elapsed = now - this.startTime;
      const rate = this.current / elapsed;
      const remaining = Math.max(0, (this.total - this.current) / rate);

      if (remaining > 0) {
        if (remaining < 60000) {
          output += ` ETA: ${Math.ceil(remaining / 1000)}s`;
        } else {
          output += ` ETA: ${Math.ceil(remaining / 60000)}m ${Math.ceil((remaining % 60000) / 1000)}s`;
        }
      }
    }

    // Use readline to overwrite previous line
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(output);
  }

  complete(message = null) {
    if (this.silent) return;

    this.current = this.total;
    this.completed = true;

    // Final render with new line
    this.lastUpdateTime = 0; // Force update
    this.update(this.total, message || "Completed");
    process.stdout.write("\n");
  }
}

/**
 * Create a simple batch processor with progress tracking
 */
export function createBatchProcessor(options = {}) {
  const {
    items = [],
    batchSize = 10,
    processItem,
    onBatchComplete = () => {},
    onComplete = () => {},
    progressOptions = {},
  } = options;

  return async function process() {
    const progress = new ProgressTracker({
      total: items.length,
      message: progressOptions.message || "Processing items",
      ...progressOptions,
    });

    const results = [];

    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);

      // Process all items in the batch concurrently
      const batchResults = await Promise.all(
        batch.map((item, index) => {
          const result = processItem(item, i + index);
          progress.update(i + index + 1);
          return result;
        })
      );

      results.push(...batchResults);
      await onBatchComplete(
        batchResults,
        i,
        Math.min(i + batchSize, items.length)
      );
    }

    progress.complete();
    onComplete(results);

    return results;
  };
}
