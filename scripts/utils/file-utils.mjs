import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Get current directory name (equivalent to __dirname in CommonJS)
 */
export const getDirname = (importMetaUrl) => {
  const __filename = fileURLToPath(importMetaUrl);
  return path.dirname(__filename);
};

/**
 * Get city files from the city.ts configuration
 */
export const getCityFiles = () => {
  try {
    // Read the city.ts file as text
    const cityFilePath = path.join(
      "src",
      "lib",
      "constants",
      "info",
      "city.ts",
    );

    const fileContent = fs.readFileSync(cityFilePath, "utf8");

    // Extract city names using regex
    const cityArrayMatch = fileContent.match(
      /export const cityFiles = \[([\s\S]*?)\];/,
    );
    if (!cityArrayMatch || !cityArrayMatch[1]) {
      console.error("Could not parse city files from city.ts");
      return [];
    }

    // Extract city names from the array string
    return cityArrayMatch[1]
      .split(",")
      .map((city) => city.trim().replace(/"/g, "").replace(/'/g, ""))
      .filter((city) => city.length > 0);
  } catch (error) {
    console.error("Error reading city files:", error);
    return [];
  }
};

/**
 * Ensure a directory exists, creating it if necessary
 */
export const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
};

/**
 * Convert kebab case to camel case
 */
export const kebabToCamelCase = (str) => {
  return str
    .split("-")
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join("");
};

/**
 * Convert string to kebab case
 */
export const toKebabCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

/**
 * Convert string to camel case
 */
export const toCamelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, "") // Remove spaces
    .replace(/[^\w\s]/g, ""); // Remove special characters
};

/**
 * Extract data from a TypeScript array export
 */
export const extractExportedArray = (filePath, arrayName = null) => {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }

    const content = fs.readFileSync(filePath, "utf8");
    let pattern = arrayName
      ? new RegExp(
          `export\\s+const\\s+${arrayName}\\s*:\\s*\\w+\\[\\]\\s*=\\s*(\\[\\s\\S]*?\\]);`,
        )
      : /export\s+const\s+\w+\s*:\s*\w+\[\]\s*=\s*(\[[\s\S]*?\]);/;

    const match = content.match(pattern);

    if (!match) return [];

    // Clean up the content
    let jsonStr = match[1]
      .replace(/\/\/.*$/gm, "") // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove multi-line comments
      .replace(/,\s*]/g, "]"); // Remove trailing commas

    try {
      return JSON.parse(jsonStr);
    } catch (parseError) {
      console.error("Error parsing array:", parseError);
      return [];
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
};

/**
 * Parse command line arguments with support for boolean flags and key-value pairs
 */
export const parseArgs = (args, options = {}) => {
  const result = { _: [] };
  const {
    boolean = [],
    string = [],
    number = [],
    default: defaults = {},
    alias = {},
  } = options;

  // Set defaults
  for (const key in defaults) {
    result[key] = defaults[key];
  }

  // Build reverse alias lookup
  const aliasLookup = {};
  for (const key in alias) {
    const aliases = alias[key];
    if (Array.isArray(aliases)) {
      aliases.forEach((a) => (aliasLookup[a] = key));
    } else {
      aliasLookup[aliases] = key;
    }
  }

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg.startsWith("--")) {
      // Handle --key=value
      if (arg.includes("=")) {
        const [key, value] = arg.slice(2).split("=");
        const actualKey = aliasLookup[key] || key;

        if (boolean.includes(actualKey)) {
          result[actualKey] = value === "true";
        } else if (number.includes(actualKey)) {
          result[actualKey] = Number(value);
        } else {
          result[actualKey] = value;
        }
      }
      // Handle --key
      else {
        const key = arg.slice(2);
        const actualKey = aliasLookup[key] || key;

        if (boolean.includes(actualKey)) {
          result[actualKey] = true;
        } else if (i + 1 < args.length && !args[i + 1].startsWith("-")) {
          const value = args[++i];
          if (number.includes(actualKey)) {
            result[actualKey] = Number(value);
          } else {
            result[actualKey] = value;
          }
        } else {
          result[actualKey] = true;
        }
      }
    }
    // Handle -k=value or -k
    else if (arg.startsWith("-") && arg !== "-") {
      const key = arg.slice(1);
      const actualKey = aliasLookup[key] || key;

      if (arg.includes("=")) {
        const [k, value] = arg.slice(1).split("=");
        const actualK = aliasLookup[k] || k;

        if (boolean.includes(actualK)) {
          result[actualK] = value === "true";
        } else if (number.includes(actualK)) {
          result[actualK] = Number(value);
        } else {
          result[actualK] = value;
        }
      } else if (boolean.includes(actualKey)) {
        result[actualKey] = true;
      } else if (i + 1 < args.length && !args[i + 1].startsWith("-")) {
        const value = args[++i];
        if (number.includes(actualKey)) {
          result[actualKey] = Number(value);
        } else {
          result[actualKey] = value;
        }
      } else {
        result[actualKey] = true;
      }
    }
    // Handle positional arguments
    else {
      result._.push(arg);
    }
  }

  return result;
};

export function formatKebebToTitleCase(str) {
  return str
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export function formatTitleToKebabCase(title) {
  return title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")
    .replace(/[^a-z0-9-]/g, ""); // Remove any non-alphanumeric characters except hyphens
}
