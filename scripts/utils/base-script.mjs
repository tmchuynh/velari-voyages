import fs from "fs";
import path from "path";
import { getConfig } from "./config.mjs";
import { getDataStore } from "./data-store.mjs";
import { getErrorHandler } from "./error-handler.mjs";
import { getDirname, parseArgs } from "./file-utils.mjs";
import { getLogger } from "./logger.mjs";
import { ProgressTracker } from "./progress.mjs";
import { getTemplateEngine } from "./template-engine.mjs";

export class BaseScript {
  constructor(importMetaUrl, options = {}) {
    this.scriptName = path.basename(importMetaUrl);
    this.__dirname = getDirname(importMetaUrl);
    this.rootDir = path.join(this.__dirname, "..");

    // Parse arguments
    this.args = parseArgs(process.argv.slice(2), options.args || {});
    this.debug = this.args.debug || false;

    // Initialize utilities
    this.config = getConfig();
    this.errorHandler = getErrorHandler({ debug: this.debug });
    this.templateEngine = getTemplateEngine({ debug: this.debug });

    // Setup logger
    this.logger = getLogger({
      debug: this.debug,
      logToFile: this.args.log || false,
      logFilename: `${this.scriptName}.log`,
      name: options.name || this.scriptName.replace(/\.m?js$/, ""),
      context: { script: this.scriptName },
    });

    // Set up data store
    this.store = getDataStore(this.scriptName.replace(/\.m?js$/, ""));

    // Register error handlers
    this.setupErrorHandlers();

    if (this.debug) {
      this.logger.debug(`Script initialized: ${this.scriptName}`, {
        args: this.args,
      });
    }
  }

  setupErrorHandlers() {
    // Wrap critical methods with error handler
    const methodsToWrap = ["run", "initialize", "execute", "cleanup"];

    methodsToWrap.forEach((method) => {
      if (typeof this[method] === "function") {
        const originalMethod = this[method];
        this[method] = this.errorHandler.wrap(originalMethod.bind(this), {
          script: this.scriptName,
          method,
        });
      }
    });
  }

  log(message, context = {}) {
    this.logger.info(message, context);
  }

  error(message, context = {}) {
    this.logger.error(message, context);
  }

  debug(message, context = {}) {
    this.logger.debug(message, context);
  }

  warn(message, context = {}) {
    this.logger.warn(message, context);
  }

  trace(message, context = {}) {
    this.logger.trace(message, context);
  }

  createProgress(options) {
    return new ProgressTracker({
      ...options,
      silent: this.args.quiet || false,
    });
  }

  async run() {
    try {
      this.logger.info(`Starting script: ${this.scriptName}`);
      const startTime = Date.now();

      await this.initialize();
      const result = await this.execute();
      await this.cleanup();

      const duration = Date.now() - startTime;
      this.logger.info(`Script completed in ${duration}ms`, {
        duration,
        result: typeof result === "object" ? "object" : result,
      });

      return result;
    } catch (error) {
      this.error(`Script execution failed: ${error.message}`, {
        error: error.stack,
      });
      throw error;
    }
  }

  async initialize() {
    // Default implementation does nothing
    return true;
  }

  async execute() {
    throw new Error("The execute() method must be implemented by subclasses");
  }

  async cleanup() {
    // Default implementation does nothing
    return true;
  }

  resolveFilePath(...parts) {
    return path.join(this.rootDir, ...parts);
  }

  resolveSrcPath(...parts) {
    return this.resolveFilePath("src", ...parts);
  }

  resolveConstantsPath(...parts) {
    return this.resolveSrcPath("lib", "constants", ...parts);
  }

  // Utility to render and write a template file
  async writeTemplateFile(templateName, data, outputPath) {
    try {
      const content = this.templateEngine.render(templateName, data);
      await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.promises.writeFile(outputPath, content, "utf8");
      this.debug(`Created file: ${outputPath}`);
      return true;
    } catch (error) {
      this.error(`Failed to create file ${outputPath}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Store a value in script's data store
   */
  async storeData(key, value) {
    return await this.store.set(key, value);
  }

  /**
   * Retrieve a value from script's data store
   */
  async retrieveData(key) {
    return await this.store.get(key);
  }

  /**
   * Check if script has been run before
   */
  async hasRunBefore() {
    return await this.store.has("lastRun");
  }

  /**
   * Record script execution
   */
  async recordExecution(data = {}) {
    const timestamp = new Date().toISOString();

    const lastRun = {
      timestamp,
      args: this.args,
      ...data,
    };

    await this.store.set("lastRun", lastRun);

    // Maintain history of runs
    const history = (await this.store.get("history")) || [];
    history.push(lastRun);

    // Limit history size
    if (history.length > 10) {
      history.shift();
    }

    await this.store.set("history", history);
  }
}
