import fs from "fs";
import path from "path";
import { getDirname } from "./file-utils.mjs";
import { getLogger } from "./logger.mjs";

const logger = getLogger();
const __dirname = getDirname(import.meta.url);

/**
 * Abstract data store interface
 */
class DataStore {
  async get(key) {
    throw new Error("Not implemented");
  }
  async set(key, value) {
    throw new Error("Not implemented");
  }
  async delete(key) {
    throw new Error("Not implemented");
  }
  async has(key) {
    throw new Error("Not implemented");
  }
  async clear() {
    throw new Error("Not implemented");
  }
  async keys() {
    throw new Error("Not implemented");
  }
  async values() {
    throw new Error("Not implemented");
  }
  async entries() {
    throw new Error("Not implemented");
  }
  async count() {
    throw new Error("Not implemented");
  }
}

/**
 * File-based data store
 */
export class FileDataStore extends DataStore {
  constructor(options = {}) {
    super();
    const storageDir =
      options.directory || path.join(__dirname, "..", "..", "data");
    this.filename = options.filename || "store.json";
    this.filePath = path.join(storageDir, this.filename);
    this.data = new Map();
    this.loaded = false;

    // Ensure storage directory exists
    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }
  }

  /**
   * Load data from file
   */
  async load() {
    if (this.loaded) return;

    try {
      if (fs.existsSync(this.filePath)) {
        const fileContent = await fs.promises.readFile(this.filePath, "utf8");
        const jsonData = JSON.parse(fileContent);

        // Convert to Map
        this.data = new Map(Object.entries(jsonData));
      }

      this.loaded = true;
    } catch (error) {
      logger.error(`Failed to load data store: ${error.message}`, {
        file: this.filePath,
      });
      throw error;
    }
  }

  /**
   * Save data to file
   */
  async save() {
    try {
      // Convert Map to Object
      const jsonData = Object.fromEntries(this.data);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(jsonData, null, 2),
        "utf8"
      );
    } catch (error) {
      logger.error(`Failed to save data store: ${error.message}`, {
        file: this.filePath,
      });
      throw error;
    }
  }

  // DataStore implementation
  async get(key) {
    await this.load();
    return this.data.get(key);
  }

  async set(key, value) {
    await this.load();
    this.data.set(key, value);
    await this.save();
    return true;
  }

  async delete(key) {
    await this.load();
    const result = this.data.delete(key);
    await this.save();
    return result;
  }

  async has(key) {
    await this.load();
    return this.data.has(key);
  }

  async clear() {
    this.data.clear();
    await this.save();
  }

  async keys() {
    await this.load();
    return Array.from(this.data.keys());
  }

  async values() {
    await this.load();
    return Array.from(this.data.values());
  }

  async entries() {
    await this.load();
    return Array.from(this.data.entries());
  }

  async count() {
    await this.load();
    return this.data.size;
  }
}

/**
 * Memory-based data store
 */
export class MemoryDataStore extends DataStore {
  constructor() {
    super();
    this.data = new Map();
  }

  // Implement all DataStore methods
  async get(key) {
    return this.data.get(key);
  }
  async set(key, value) {
    this.data.set(key, value);
    return true;
  }
  async delete(key) {
    return this.data.delete(key);
  }
  async has(key) {
    return this.data.has(key);
  }
  async clear() {
    this.data.clear();
  }
  async keys() {
    return Array.from(this.data.keys());
  }
  async values() {
    return Array.from(this.data.values());
  }
  async entries() {
    return Array.from(this.data.entries());
  }
  async count() {
    return this.data.size;
  }
}

// Store registry to manage multiple data stores
const storeRegistry = new Map();

/**
 * Get a data store instance
 */
export function getDataStore(name = "default", options = {}) {
  if (storeRegistry.has(name)) {
    return storeRegistry.get(name);
  }

  const StoreClass = options.memory ? MemoryDataStore : FileDataStore;
  const storeOptions = {
    filename: `${name}.json`,
    ...options,
  };

  const store = new StoreClass(storeOptions);
  storeRegistry.set(name, store);
  return store;
}
