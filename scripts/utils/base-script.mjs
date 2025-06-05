import path from "path";
import { getConfig } from "./config.mjs";
import { getErrorHandler } from "./error-handler.mjs";
import { getDirname, parseArgs } from "./file-utils.mjs";
import { ProgressTracker } from "./progress.mjs";
import { getTemplateEngine } from "./template-engine.mjs";

export class BaseScript {
  constructor(importMetaUrl, options = {}) {
    this.scriptName = path.basename(importMetaUrl);
    this.__dirname = getDirname(importMetaUrl);
    this.rootDir = path.join(this.__dirname, "..");
    this.args = parseArgs(process.argv.slice(2), options.args || {});
    this.debug = this.args.debug || false;

    // Initialize utilities
    this.config = getConfig();
    this.errorHandler = getErrorHandler({ debug: this.debug });
    this.templateEngine = getTemplateEngine({ debug: this.debug });

    // Register error handlers
    this.setupErrorHandlers();

    if (this.debug) {
      this.log(`[DEBUG] Script: ${this.scriptName}`);
      this.log(`[DEBUG] Args: ${JSON.stringify(this.args, null, 2)}`);
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

  log(message) {
    console.log(message);
  }

  error(message) {
    console.error(`[ERROR] ${message}`);
  }

  debug(message) {
    if (this.debug) {
      console.log(`[DEBUG] ${message}`);
    }
  }

  warn(message) {
    console.warn(`[WARN] ${message}`);
  }

  createProgress(options) {
    return new ProgressTracker({
      ...options,
      silent: this.args.quiet || false,
    });
  }

  async run() {
    try {
      await this.initialize();
      const result = await this.execute();
      await this.cleanup();
      return result;
    } catch (error) {
      this.error(`Script execution failed: ${error.message}`);
      if (this.debug) {
        this.error(error.stack);
      }
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
}
