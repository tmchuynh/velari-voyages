/**
 * Enhanced error handling for scripts
 */
export class ScriptError extends Error {
  constructor(message, code = "SCRIPT_ERROR", details = null) {
    super(message);
    this.name = "ScriptError";
    this.code = code;
    this.details = details;
  }
}

export class FileError extends ScriptError {
  constructor(message, filePath, operation, originalError = null) {
    super(message, "FILE_ERROR", { filePath, operation });
    this.name = "FileError";
    this.originalError = originalError;
  }
}

export class ValidationError extends ScriptError {
  constructor(message, field, value, constraints) {
    super(message, "VALIDATION_ERROR", { field, value, constraints });
    this.name = "ValidationError";
  }
}

export class ConfigError extends ScriptError {
  constructor(message, configKey, value) {
    super(message, "CONFIG_ERROR", { configKey, value });
    this.name = "ConfigError";
  }
}

/**
 * Error handler to provide consistent error handling across scripts
 */
export class ErrorHandler {
  constructor(options = {}) {
    this.debug = options.debug || false;
    this.exitOnUncaught = options.exitOnUncaught !== false;
    this.errorLog = options.errorLog || [];

    if (this.exitOnUncaught) {
      this.registerGlobalHandlers();
    }
  }

  registerGlobalHandlers() {
    process.on("uncaughtException", (error) => {
      this.handleError(error);
      if (this.exitOnUncaught) {
        process.exit(1);
      }
    });

    process.on("unhandledRejection", (reason) => {
      this.handleError(new Error(`Unhandled promise rejection: ${reason}`));
      if (this.exitOnUncaught) {
        process.exit(1);
      }
    });
  }

  handleError(error, context = {}) {
    const formattedError = {
      timestamp: new Date().toISOString(),
      message: error.message,
      name: error.name,
      code: error.code || "UNKNOWN_ERROR",
      details: error.details || null,
      context,
      stack: this.debug ? error.stack : undefined,
    };

    this.errorLog.push(formattedError);

    console.error(`\n[ERROR] ${error.name}: ${error.message}`);

    if (error.code) {
      console.error(`Error code: ${error.code}`);
    }

    if (error.details) {
      console.error(`Details: ${JSON.stringify(error.details, null, 2)}`);
    }

    if (context && Object.keys(context).length > 0) {
      console.error(`Context: ${JSON.stringify(context, null, 2)}`);
    }

    if (this.debug && error.stack) {
      console.error(`\nStack trace:\n${error.stack}`);
    }

    return formattedError;
  }

  wrap(fn, context = {}) {
    return async (...args) => {
      try {
        return await fn(...args);
      } catch (error) {
        this.handleError(error, context);
        throw error;
      }
    };
  }

  getErrorSummary() {
    return {
      count: this.errorLog.length,
      errors: this.errorLog,
    };
  }
}

// Singleton instance
let errorHandlerInstance = null;

export const getErrorHandler = (options = {}) => {
  if (!errorHandlerInstance) {
    errorHandlerInstance = new ErrorHandler(options);
  }
  return errorHandlerInstance;
};
