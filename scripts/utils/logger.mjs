import fs from "fs";
import path from "path";
import { getDirname } from "./file-utils.mjs";

// Log levels
export const LOG_LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
  TRACE: 4,
};

// Color codes for terminal output
const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m",
  },

  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m",
  },
};

/**
 * Logger transport interface
 */
class Transport {
  log(level, message, context) {
    throw new Error("Transport must implement log method");
  }
}

/**
 * Console transport
 */
class ConsoleTransport extends Transport {
  constructor(options = {}) {
    super();
    this.useColors = options.colors !== false;
    this.logLevel = options.level || LOG_LEVELS.INFO;

    this.levelStyles = {
      [LOG_LEVELS.ERROR]: { color: COLORS.fg.red, label: "ERROR" },
      [LOG_LEVELS.WARN]: { color: COLORS.fg.yellow, label: "WARN" },
      [LOG_LEVELS.INFO]: { color: COLORS.fg.green, label: "INFO" },
      [LOG_LEVELS.DEBUG]: { color: COLORS.fg.cyan, label: "DEBUG" },
      [LOG_LEVELS.TRACE]: { color: COLORS.fg.magenta, label: "TRACE" },
    };
  }

  log(level, message, context = {}) {
    if (level > this.logLevel) return;

    const timestamp = new Date().toISOString();
    const style = this.levelStyles[level] || {};
    const prefix = `[${timestamp}] [${style.label || "LOG"}]`;

    let output = `${prefix} ${message}`;

    // Add context if available
    if (context && Object.keys(context).length > 0) {
      try {
        output += ` ${JSON.stringify(context)}`;
      } catch (e) {
        output += ` [Context serialization failed: ${e.message}]`;
      }
    }

    // Apply color formatting
    if (this.useColors && style.color) {
      output = `${style.color}${output}${COLORS.reset}`;
    }

    const logMethod =
      level === LOG_LEVELS.ERROR
        ? console.error
        : level === LOG_LEVELS.WARN
          ? console.warn
          : console.log;

    logMethod(output);
  }
}

/**
 * File transport
 */
class FileTransport extends Transport {
  constructor(options = {}) {
    super();
    const logDir =
      options.directory ||
      path.join(getDirname(import.meta.url), "..", "..", "logs");
    this.logLevel = options.level || LOG_LEVELS.INFO;
    this.filename = options.filename || "app.log";
    this.logPath = path.join(logDir, this.filename);

    // Ensure log directory exists
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(level, message, context = {}) {
    if (level > this.logLevel) return;

    const timestamp = new Date().toISOString();
    const levelName =
      Object.keys(LOG_LEVELS).find((key) => LOG_LEVELS[key] === level) || "LOG";

    let entry = {
      timestamp,
      level: levelName,
      message,
    };

    // Add context properties
    if (context && Object.keys(context).length > 0) {
      entry = { ...entry, ...context };
    }

    try {
      const line = JSON.stringify(entry) + "\n";
      fs.appendFileSync(this.logPath, line);
    } catch (e) {
      console.error(`Failed to write to log file: ${e.message}`);
    }
  }
}

/**
 * Logger class
 */
export class Logger {
  constructor(options = {}) {
    this.transports = options.transports || [new ConsoleTransport()];
    this.defaultContext = options.context || {};
    this.name = options.name || "app";
  }

  /**
   * Add a transport
   */
  addTransport(transport) {
    if (transport instanceof Transport) {
      this.transports.push(transport);
    } else {
      throw new Error("Transport must be an instance of Transport class");
    }
    return this;
  }

  /**
   * Log a message with a specific level
   */
  log(level, message, context = {}) {
    const extendedContext = {
      ...this.defaultContext,
      ...context,
      logger: this.name,
    };

    for (const transport of this.transports) {
      transport.log(level, message, extendedContext);
    }

    return this;
  }

  /**
   * Log methods for different levels
   */
  error(message, context = {}) {
    return this.log(LOG_LEVELS.ERROR, message, context);
  }

  warn(message, context = {}) {
    return this.log(LOG_LEVELS.WARN, message, context);
  }

  info(message, context = {}) {
    return this.log(LOG_LEVELS.INFO, message, context);
  }

  debug(message, context = {}) {
    return this.log(LOG_LEVELS.DEBUG, message, context);
  }

  trace(message, context = {}) {
    return this.log(LOG_LEVELS.TRACE, message, context);
  }

  /**
   * Create a child logger
   */
  child(options = {}) {
    const childOptions = {
      transports: this.transports,
      context: { ...this.defaultContext, ...options.context },
      name: options.name || `${this.name}:child`,
    };

    return new Logger(childOptions);
  }
}

/**
 * Create default logger
 */
let defaultLogger = null;

export function getLogger(options = {}) {
  if (!defaultLogger) {
    defaultLogger = createDefaultLogger(options);
  }
  return defaultLogger;
}

function createDefaultLogger(options = {}) {
  const transports = [
    new ConsoleTransport({
      colors: true,
      level: options.debug ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO,
    }),
  ];

  // Add file transport if enabled
  if (options.logToFile) {
    transports.push(
      new FileTransport({
        level: LOG_LEVELS.DEBUG, // Log everything to file
        filename: options.logFilename || "script.log",
      })
    );
  }

  return new Logger({
    name: options.name || "velari-scripts",
    transports,
    context: options.context || {},
  });
}
