import fs from "fs";
import path from "path";
import { getDirname } from "./file-utils.mjs";

const __dirname = getDirname(import.meta.url);
const DEFAULT_CONFIG_PATH = path.join(__dirname, "..", "config.json");

/**
 * Configuration management system
 */
export class Config {
  constructor(configPath = DEFAULT_CONFIG_PATH) {
    this.configPath = configPath;
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configPath)) {
        const content = fs.readFileSync(this.configPath, "utf8");
        return JSON.parse(content);
      }
    } catch (error) {
      console.warn(`Error loading config: ${error.message}`);
    }

    // Default configuration
    return {
      paths: {
        src: "src",
        lib: "src/lib",
        constants: "src/lib/constants",
        cruises: "src/lib/constants/cruises",
        restaurants: "src/lib/constants/cruises/restaurants",
        testimonials: "src/lib/constants/cruises/testimonials",
      },
      generation: {
        defaultCount: 5,
        maxCount: 50,
        minRating: 3.5,
        maxRating: 5.0,
      },
      fileTypes: {
        skipFiles: ["restaurants.ts"],
      },
    };
  }

  get(key, defaultValue = null) {
    const keys = key.split(".");
    let value = this.config;

    for (const k of keys) {
      if (value === undefined || value === null) return defaultValue;
      value = value[k];
    }

    return value !== undefined ? value : defaultValue;
  }

  set(key, value) {
    const keys = key.split(".");
    let current = this.config;

    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!(k in current)) {
        current[k] = {};
      }
      current = current[k];
    }

    current[keys[keys.length - 1]] = value;
    return this;
  }

  save() {
    try {
      fs.writeFileSync(
        this.configPath,
        JSON.stringify(this.config, null, 2),
        "utf8"
      );
    } catch (error) {
      console.error(`Error saving config: ${error.message}`);
    }
    return this;
  }

  // Helper method to resolve paths
  resolvePath(pathKey, ...segments) {
    const basePath = this.get(`paths.${pathKey}`);
    if (!basePath) {
      throw new Error(`Path not found for key: ${pathKey}`);
    }
    return path.join(process.cwd(), basePath, ...segments);
  }
}

// Singleton instance
let configInstance = null;

export const getConfig = (configPath) => {
  if (!configInstance) {
    configInstance = new Config(configPath);
  }
  return configInstance;
};
