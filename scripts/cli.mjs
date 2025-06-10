#!/usr/bin/env node
import { getCommandRegistry } from "./utils/command-registry.mjs";
import { getConfig } from "./utils/config.mjs";
import { parseArgs } from "./utils/file-utils.mjs";
import { getLogger } from "./utils/logger.mjs";

import CreateCityCruiseFiles from "./create-city-cruise-files.mjs";
import CreateRestaurantData from "./create-restaurant-data.mjs";
import CreateRestaurantMenus from "./create-restaurant-menu-files.mjs";
import CreateRestaurantTestimonials from "./create-restaurant-testimonials-files.mjs";
import DeleteRestaurantMenuFiles from "./delete-restaurant-menu-files.mjs";
import CreateCityVesselFiles from "./create-city-vessel-files.mjs";
import CreateCrewMembers from "./create-crew-members.mjs";
import DeleteCrewMembers from "./commands/delete-crew-members.mjs";
import DeleteCruiseFiles from "./commands/delete-cruise-files.mjs";
import DeleteRestaurantTestimonialsFiles from "./commands/delete-restaurant-testimonials-files.mjs";
import CreateShoppingStores from "./create-shopping-stores.mjs";

const registry = getCommandRegistry();
const logger = getLogger();
const config = getConfig();

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

registry.register({
  name: "create-vessels",
  description: "Create city vessel data files",
  aliases: ["vessels", "city-vessels"],
  category: "cruise",
  handler: CreateCityVesselFiles,
});

registry.register({
  name: "create-crew",
  description: "Create crew member data files",
  aliases: ["crew-members", "crew"],
  category: "crew",
  handler: CreateCrewMembers,
});

registry.register({
  name: "delete-crew",
  description: "Delete crew member data files",
  aliases: ["delete-crew-members", "rm-crew"],
  category: "crew",
  handler: DeleteCrewMembers,
});

registry.register({
  name: "delete-city-cruises",
  description: "Delete city cruise data files",
  aliases: ["rm-city-cruises", "rm-cruises"],
  category: "cruise",
  handler: DeleteCruiseFiles,
});

registry.register({
  name: "delete-testimonials",
  description: "Delete restaurant testimonial files",
  aliases: ["delete-restaurant-testimonials", "rm-testimonials"],
  category: "restaurant",
  handler: DeleteRestaurantTestimonialsFiles,
});

registry.register({
  name: "create-shopping-stores",
  description: "Create shopping store venue files",
  aliases: ["shopping-stores", "shopping", "stores"],
  category: "venue",
  handler: CreateShoppingStores,
});

const args = parseArgs(process.argv.slice(2), {
  boolean: ["help", "h", "version", "v", "debug", "d"],
  alias: {
    h: "help",
    v: "version",
    d: "debug",
  },
});

if (args.version) {
  console.log(`Velari Voyages CLI v${config.get("version", "1.0.0")}`);
  process.exit(0);
}

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

const commandName = args._[0];
const command = registry.get(commandName);

if (!command) {
  logger.error(`Unknown command: ${commandName}`);
  console.log(`Run 'npx vvcli --help' to see available commands.`);
  process.exit(1);
}

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
