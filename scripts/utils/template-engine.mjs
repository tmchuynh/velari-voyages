import fs from "fs";
import path from "path";
import { getDirname } from "./file-utils.mjs";

const __dirname = getDirname(import.meta.url);

/**
 * Simple template engine for generating files
 */
export class TemplateEngine {
  constructor(options = {}) {
    this.templatesDir =
      options.templatesDir || path.join(__dirname, "..", "templates");
    this.cache = {};
    this.debug = options.debug || false;
  }

  /**
   * Load a template from file or cache
   */
  loadTemplate(templateName) {
    if (this.cache[templateName]) {
      return this.cache[templateName];
    }

    const templatePath = path.join(this.templatesDir, `${templateName}.tpl`);

    try {
      if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found: ${templateName}`);
      }

      const template = fs.readFileSync(templatePath, "utf8");
      this.cache[templateName] = template;
      return template;
    } catch (error) {
      if (this.debug) {
        console.error(`Failed to load template ${templateName}:`, error);
      }
      throw error;
    }
  }

  /**
   * Render a template with given data
   */
  render(templateName, data = {}) {
    let template = this.loadTemplate(templateName);

    // Replace placeholders with data values
    return template.replace(/\{\{([^}]+)\}\}/g, (_match, key) => {
      const trimmedKey = key.trim();
      const value = this.getNestedValue(data, trimmedKey);

      // Handle undefined values
      return value !== undefined ? value : `{{${trimmedKey}}}`;
    });
  }

  /**
   * Get value from nested object using dot notation
   */
  getNestedValue(obj, path) {
    const keys = path.split(".");
    return keys.reduce((prev, curr) => {
      return prev && prev[curr] !== undefined ? prev[curr] : undefined;
    }, obj);
  }

  /**
   * Register a template with given content
   */
  registerTemplate(name, content) {
    this.cache[name] = content;
    return this;
  }

  /**
   * Generate a file using a template
   */
  generateFile(templateName, data, outputPath) {
    try {
      const content = this.render(templateName, data);
      const dirPath = path.dirname(outputPath);

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(outputPath, content, "utf8");
      return true;
    } catch (error) {
      if (this.debug) {
        console.error(
          `Failed to generate file from template ${templateName}:`,
          error,
        );
      }
      throw error;
    }
  }
}

// Create and register default templates
function createDefaultTemplates(engine) {
  // Restaurant data template
  const restaurantTemplate = `import { Restaurant } from "@/lib/types/types";

export const {{cityVar}}Restaurants: Restaurant[] = {{restaurants}};
`;

  // Testimonial template
  const testimonialTemplate = `import { Testimonial } from "@/lib/interfaces/services/testimonials";

/**
 * Testimonial data for {{restaurantName}} in {{cityName}}
 */
export const {{cityVar}}{{restaurantVar}}Testimonials: Testimonial[] = {{testimonials}};
`;

  // Menu template
  const menuTemplate = `import { RestaurantMenu } from "@/lib/types/types";

/**
 * Menu data for {{restaurantName}} in {{cityName}}
 */
export const {{cityVar}}{{restaurantVar}}menu: RestaurantMenu = {
  title: "{{menuTitle}}",
  description: "{{menuDescription}}",
  category: {{categories}}
};
`;

  // Cruise template
  const cruiseTemplate = `import { Cruise } from "@/lib/interfaces/services/cruises";

export const {{cityVar}}Cruises: Cruise[] = {{cruises}};
`;

  engine.registerTemplate("restaurant", restaurantTemplate);
  engine.registerTemplate("testimonial", testimonialTemplate);
  engine.registerTemplate("menu", menuTemplate);
  engine.registerTemplate("cruise", cruiseTemplate);

  return engine;
}

// Singleton instance with default templates
let templateEngineInstance = null;

export const getTemplateEngine = (options = {}) => {
  if (!templateEngineInstance) {
    templateEngineInstance = new TemplateEngine(options);
    createDefaultTemplates(templateEngineInstance);
  }
  return templateEngineInstance;
};
