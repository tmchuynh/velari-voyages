import path from "path";
import { getDirname, parseArgs } from "./file-utils.mjs";

export class BaseScript {
  constructor(importMetaUrl, options = {}) {
    this.scriptName = path.basename(importMetaUrl);
    this.__dirname = getDirname(importMetaUrl);
    this.rootDir = path.join(this.__dirname, "..");
    this.args = parseArgs(process.argv.slice(2), options.args || {});
    this.debug = this.args.debug || false;

    if (this.debug) {
      console.log(`[DEBUG] Script: ${this.scriptName}`);
      console.log(`[DEBUG] Args: ${JSON.stringify(this.args, null, 2)}`);
    }
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

  async run() {
    throw new Error("The run() method must be implemented by subclasses");
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
}
