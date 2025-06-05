/**
 * Data validation system for ensuring data integrity
 */
export class Validator {
  constructor() {
    this.rules = {};
  }

  /**
   * Add validation rule for a field
   */
  addRule(field, ruleFn, message) {
    if (!this.rules[field]) {
      this.rules[field] = [];
    }
    this.rules[field].push({ test: ruleFn, message });
    return this;
  }

  /**
   * Validate object against rules
   */
  validate(data) {
    const errors = [];

    for (const [field, fieldRules] of Object.entries(this.rules)) {
      const value = this.getFieldValue(data, field);

      for (const rule of fieldRules) {
        if (!rule.test(value, data)) {
          errors.push({
            field,
            message:
              typeof rule.message === "function"
                ? rule.message(value, field, data)
                : rule.message,
          });
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Get nested field value using dot notation
   */
  getFieldValue(obj, path) {
    return path
      .split(".")
      .reduce(
        (o, key) => (o && o[key] !== undefined ? o[key] : undefined),
        obj
      );
  }
}

/**
 * Create validators for common types of data
 */
export function createRestaurantValidator() {
  const validator = new Validator();

  validator
    .addRule(
      "name",
      (v) => v && typeof v === "string" && v.length > 0,
      "Restaurant name must be a non-empty string"
    )

    .addRule(
      "cuisine",
      (v) => v && typeof v === "string" && v.length > 0,
      "Restaurant cuisine must be a non-empty string"
    )

    .addRule(
      "priceRange",
      (v) => v && ["$", "$$", "$$$", "$$$$"].includes(v),
      "Price range must be one of: $, $$, $$$, $$$$"
    )

    .addRule(
      "rating",
      (v) => v !== undefined && typeof v === "number" && v >= 1 && v <= 5,
      (v) => `Rating must be a number between 1 and 5, got ${v}`
    );

  return validator;
}

export function createMenuValidator() {
  const validator = new Validator();

  validator
    .addRule(
      "title",
      (v) => v && typeof v === "string" && v.length > 0,
      "Menu title must be a non-empty string"
    )

    .addRule(
      "category",
      (v) => Array.isArray(v) && v.length > 0,
      "Menu must have at least one category"
    )

    .addRule(
      "category",
      (v) =>
        v.every(
          (cat) => cat && typeof cat.name === "string" && cat.name.length > 0
        ),
      "Each category must have a name"
    );

  return validator;
}

export function createCruiseValidator() {
  const validator = new Validator();

  validator
    .addRule(
      "title",
      (v) => v && typeof v === "string" && v.length > 0,
      "Cruise title must be a non-empty string"
    )

    .addRule(
      "departureLocation",
      (v) => v && typeof v.city === "string",
      "Departure location must have a city"
    )

    .addRule(
      "itinerary.route",
      (v) => Array.isArray(v) && v.length >= 2,
      "Cruise route must have at least two locations"
    )

    .addRule(
      "basePrice",
      (v) => typeof v === "number" && v > 0,
      (v) => `Base price must be greater than 0, got ${v}`
    );

  return validator;
}
