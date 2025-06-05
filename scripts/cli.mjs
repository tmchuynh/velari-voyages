#!/usr/bin/env node
import { getCommandRegistry } from "./utils/command-registry.mjs";
import { getConfig } from "./utils/config.mjs";
import { parseArgs } from "./utils/file-utils.mjs";
import { getLogger } from "./utils/logger.mjs";

// Import and register commands
import CreateCityCruiseFiles from './commands/create-city-cruise-files.mjs';
import CreateRestaurantData from './commands/create-restaurant-data.mjs';
import CreateRestaurantMenus from './commands/create-restaurant-menus.mjs';
import CreateRestaurantTestimonials from './commands/create-restaurant-testimonials.mjs';
import DeleteRestaurantMenuFiles from './commands/delete-restaurant-menu-files.mjs';

const registry = getCommandRegistry();
const logger = getLogger();
const config = getConfig();

// Register commands
registry.register({
  name: "delete-restaurant-menus",
  description: "Delete restaurant menu files",
  aliases: ["delete-menus", "rm-menus"],
  category: "restaurant",
  handler: DeleteRestaurantMenuFiles,
});

registry.register({
  name: "create-testimonials",
  description: "Create restaurant testimonial files",
  aliases: ["testimonials"],
  category: "restaurant",
  handler: CreateRestaurantTestimonials,
});

registry.register({
  name: "create-menus",
  description: "Create restaurant menu files",
  aliases: ["menus"],
  category: "restaurant",
  handler: CreateRestaurantMenus,
});

registry.register({
  name: "create-restaurants",
  description: "Create restaurant data files",
  aliases: ["restaurants"],
  category: "restaurant",
  handler: CreateRestaurantData,
});

registry.register({
  name: "create-cruises",
  description: "Create city cruise files",
  aliases: ["cruises"],
  category: "cruise",
  handler: CreateCityCruiseFiles,
});

// Parse arguments
const args = parseArgs(process.argv.slice(2), {
  boolean: ["help", "h", "version", "v", "debug", "d"],
  alias: {
    h: "help",
    v: "version",
    d: "debug",
  },
});

// Show version if requested
if (args.version) {
  console.log(`Velari Voyages CLI v${config.get('version', '1.0.0')}`);
  process.exit(0);
}

// Show help if requested or no command provided
if (args.help || args._.length === 0) {
  console.log(`
Velari Voyages CLI

Usage:
  npx vvcli <command> [options]

${registry.generateHelp()}

Global Options:
  -h, --help                Show help information
  -v, --version             Show version information
  -d, --debug               Enable debug logging

For command-specific help, run:
  npx vvcli <command> --help
  `);
  process.exit(0);
}

// Get the command
const commandName = args._[0];
const command = registry.get(commandName);

// Check if command exists
if (!command) {
  logger.error(`Unknown command: ${commandName}`);
  console.log(`Run 'npx vvcli --help' to see available commands.`);
  process.exit(1);
}

// Execute command
try {
  logger.debug(`Executing command: ${commandName}`, { args });
  registry
    .execute(commandName, args)
    .then(() => {
      logger.debug(`Command ${commandName} completed successfully`);
    })
    .catch((err) => {
      logger.error(`Error executing ${commandName}: ${err.message}`, {
        error: err,
      });
      process.exit(1);
    });
} catch (err) {
  logger.error(`Error initializing ${commandName}: ${err.message}`, {
    error: err,
  });
  process.exit(1);
}
