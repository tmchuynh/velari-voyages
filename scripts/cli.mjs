#!/usr/bin/env node
import { parseArgs } from "./utils/file-utils.mjs";

// Import available commands
import CreateCityCruiseFiles from "./commands/create-city-cruise-files.mjs";
import CreateRestaurantData from "./commands/create-restaurant-data.mjs";
import CreateRestaurantMenus from "./commands/create-restaurant-menus.mjs";
import CreateRestaurantTestimonials from "./commands/create-restaurant-testimonials.mjs";
import DeleteRestaurantMenuFiles from "./commands/delete-restaurant-menu-files.mjs";

const commands = {
  "delete-restaurant-menus": DeleteRestaurantMenuFiles,
  "create-testimonials": CreateRestaurantTestimonials,
  "create-menus": CreateRestaurantMenus,
  "create-restaurants": CreateRestaurantData,
  "create-cruises": CreateCityCruiseFiles,
};

// Parse arguments
const args = parseArgs(process.argv.slice(2), {
  boolean: ["help", "h", "version", "v"],
  alias: {
    h: "help",
    v: "version",
  },
});

// Show help if requested or no command provided
if (args.help || args._.length === 0) {
  console.log(`
Velari Voyages CLI

Usage:
  npx vvcli <command> [options]

Available commands:
  delete-restaurant-menus   Delete restaurant menu files
  create-testimonials       Create restaurant testimonial files
  create-menus              Create restaurant menu files
  create-restaurants        Create restaurant data files
  create-cruises            Create city cruise files

Options:
  -h, --help                Show help information
  -v, --version             Show version information

For command-specific help, run:
  npx vvcli <command> --help
  `);
  process.exit(0);
}

// Show version if requested
if (args.version) {
  console.log("Velari Voyages CLI v1.0.0");
  process.exit(0);
}

// Get the command
const commandName = args._[0];
const CommandClass = commands[commandName];

// Check if command exists
if (!CommandClass) {
  console.error(`Unknown command: ${commandName}`);
  process.exit(1);
}

// Execute command
try {
  const command = new CommandClass(args);
  command.run().catch((err) => {
    console.error(`Error executing ${commandName}:`, err);
    process.exit(1);
  });
} catch (err) {
  console.error(`Error initializing ${commandName}:`, err);
  process.exit(1);
}
