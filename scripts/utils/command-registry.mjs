/**
 * Command registry for managing available script commands
 */
export class CommandRegistry {
  constructor() {
    this.commands = new Map();
    this.aliases = new Map();
    this.categories = new Map();
  }

  /**
   * Register a new command
   * @param {Object} options Command options
   * @param {string} options.name Command name
   * @param {string} options.description Command description
   * @param {string[]} options.aliases Command aliases
   * @param {string} options.category Command category
   * @param {Function|Class} options.handler Command handler class or function
   */
  register(options) {
    const {
      name,
      description,
      aliases = [],
      category = "general",
      handler,
    } = options;

    if (!name || typeof name !== "string") {
      throw new Error("Command name is required and must be a string");
    }

    if (!handler) {
      throw new Error("Command handler is required");
    }

    if (this.commands.has(name)) {
      throw new Error(`Command "${name}" is already registered`);
    }

    const command = {
      name,
      description: description || "No description provided",
      aliases: [...aliases],
      category,
      handler,
    };

    this.commands.set(name, command);

    // Register aliases
    for (const alias of aliases) {
      if (this.aliases.has(alias)) {
        console.warn(
          `Alias "${alias}" is already registered for another command. It will be overridden.`,
        );
      }
      this.aliases.set(alias, name);
    }

    // Register category
    if (!this.categories.has(category)) {
      this.categories.set(category, []);
    }
    this.categories.get(category).push(name);

    return this;
  }

  /**
   * Get a command by name or alias
   */
  get(nameOrAlias) {
    // Check if it's an alias
    if (this.aliases.has(nameOrAlias)) {
      const commandName = this.aliases.get(nameOrAlias);
      return this.commands.get(commandName);
    }

    // Check if it's a command name
    if (this.commands.has(nameOrAlias)) {
      return this.commands.get(nameOrAlias);
    }

    return null;
  }

  /**
   * Execute a command by name or alias
   */
  async execute(nameOrAlias, args = {}) {
    const command = this.get(nameOrAlias);

    if (!command) {
      throw new Error(`Command "${nameOrAlias}" not found`);
    }

    try {
      // Check if it's a class constructor or a function
      if (typeof command.handler === "function") {
        if (command.handler.prototype && command.handler.prototype.run) {
          // It's a class with a run method
          const instance = new command.handler(args);
          return await instance.run();
        } else {
          // It's a plain function
          return await command.handler(args);
        }
      } else {
        throw new Error(`Invalid command handler for "${nameOrAlias}"`);
      }
    } catch (error) {
      throw new Error(
        `Error executing command "${nameOrAlias}": ${error.message}`,
      );
    }
  }

  /**
   * Get all registered commands
   */
  getAll() {
    return Array.from(this.commands.values());
  }

  /**
   * Get commands by category
   */
  getByCategory(category) {
    const commandNames = this.categories.get(category) || [];
    return commandNames.map((name) => this.commands.get(name));
  }

  /**
   * Get available categories
   */
  getCategories() {
    return Array.from(this.categories.keys());
  }

  /**
   * Generate help information
   */
  generateHelp() {
    let help = "Available commands:\n\n";

    // Group commands by category
    const categories = this.getCategories();
    categories.sort();

    for (const category of categories) {
      help += `${category.toUpperCase()}\n`;
      const commands = this.getByCategory(category);

      for (const cmd of commands) {
        const aliasText =
          cmd.aliases.length > 0 ? ` (aliases: ${cmd.aliases.join(", ")})` : "";
        help += `  ${cmd.name}${aliasText}\n    ${cmd.description}\n\n`;
      }
    }

    return help;
  }
}

// Export singleton instance
let registryInstance = null;

export function getCommandRegistry() {
  if (!registryInstance) {
    registryInstance = new CommandRegistry();
  }
  return registryInstance;
}
