export const capitalize = (str: string) => {
  if (!str) return "";

  const normalizedStr = str.replace(/-/g, " ").replace(/_/g, " ");
  const wordsToIgnore = new Set([
    "a",
    "an",
    "and",
    "as",
    "at",
    "but",
    "by",
    "for",
    "in",
    "nor",
    "of",
    "on",
    "or",
    "the",
    "up",
  ]);

  const words = normalizedStr.split(" ");
  const capitalizedWords = words
    .filter((word) => word.length > 0) // Remove empty strings from multiple spaces
    .map((word, index, arr) => {
      const lowerWord = word.toLowerCase();
      if (
        index === 0 ||
        (index === arr.length - 1 && arr.length > 1) ||
        !wordsToIgnore.has(lowerWord)
      ) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return lowerWord;
    });

  return capitalizedWords.join(" ");
};

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatTime = (time: string): string => {
  const date = new Date(`1970-01-01T${time}`);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDuration = (duration: string): string => {
  const [weeks, days] = duration.split(" ");
  return `${weeks} weeks ${days} days`;
};

/**
 * Converts a camelCase string to a title case string.
 *
 * This function takes a camelCase formatted string and converts it to a title case string,
 * where each word is capitalized and separated by spaces.
 *
 * @param camelCase - The camelCase string to convert
 * @returns The converted title case string
 *
 * @example
 * // Returns "Hello World"
 * formatCamelCaseToTitle("helloWorld")
 *
 * @example
 * // Returns "Test Case Example"
 * formatCamelCaseToTitle("testCaseExample")
 */
export function formatCamelCaseToTitle(camelCase: string): string {
  // Add space before capital letters and convert to lowercase
  const withSpaces = camelCase.replace(/([A-Z])/g, " $1").toLowerCase();

  // Capitalize the first letter of each word
  return withSpaces
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Formats a number to a currency string.
 *
 * This function takes a number and formats it as a currency string in USD,
 * with optional minimum and maximum fraction digits.
 *
 * @param value - The number to format
 * @param min - Optional minimum number of fraction digits (default is 0)
 * @param max - Optional maximum number of fraction digits (default is 0)
 * @returns The formatted currency string
 *
 * @example
 * // Returns "$1,234.56"
 * formatNumberToCurrency(1234.56)
 *
 * @example
 * // Returns "$1,234.00"
 * formatNumberToCurrency(1234, 2, 2)
 */
export function formatNumberToCurrency(
  value: number,
  min?: number,
  max?: number
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: min || 0,
    maximumFractionDigits: max || 0,
  }).format(value);
}

/**
 * Converts a kebab-case string to camelCase.
 *
 * @param str - The kebab-case string to convert.
 * @returns The camelCase version of the string.
 *
 * @example
 * formatKebabToCamelCase("code-through-stories") // returns "codeThroughStories"
 * formatKebabToCamelCase("another-example-string") // returns "anotherExampleString"
 */
export function formatKebabToCamelCase(str: string): string {
  return str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

/**
 * Converts a kebab-case string to title case.
 *
 * This function takes a kebab-case formatted string (words separated by hyphens)
 * and converts it to title case (each word capitalized, separated by spaces).
 *
 * @param str - The kebab-case string to convert
 * @returns The converted title case string
 *
 * @example
 * // Returns "Hello World"
 * formatKebebToTitleCase("hello-world")
 *
 * @example
 * // Returns "Test Case Example"
 * formatKebebToTitleCase("test-case-example")
 */
export function formatKebebToTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

/**
 * Converts a string to a URL-friendly slug format.
 *
 * This function takes a string and converts it to a slug format suitable for URLs.
 * It removes special characters, replaces spaces with hyphens, and converts the string to lowercase.
 *
 * @param str - The string to convert to a slug
 * @returns The slugified version of the string
 *
 * @example
 * // Returns "hello-world"
 * formatToSlug("Hello World!")
 *
 * @example
 * // Returns "this-is-a-test"
 * formatToSlug("This is a test.")
 */
export function formatToSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatCamelCaseToKebab(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert hyphen before uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // Handle cases like "HTMLParser"
    .toLowerCase(); // Convert to lowercase
}

/**
 * Formats an array of language strings into a grammatically correct string.
 *
 * @param languages - An array of language strings to be formatted
 * @returns A formatted string where languages are comma-separated and the last language is preceded by "and"
 * @example
 * // Returns "English"
 * formatLanguages(["English"])
 *
 * // Returns "English, and Spanish"
 * formatLanguages(["English", "Spanish"])
 *
 * // Returns "English, Spanish, and French"
 * formatLanguages(["English", "Spanish", "French"])
 *
 * // Returns empty string for empty array
 * formatLanguages([])
 */
export const formatLanguages = (languages: string[]) => {
  if (languages.length === 0) return "";
  if (languages.length === 1) return languages[0];

  const lastLanguage = languages[languages.length - 1];
  const otherLanguages = languages.slice(0, -1).join(", ");
  return `${otherLanguages}, and ${lastLanguage}`;
};

/**
 * Converts a title string to camelCase format.
 *
 * @param title - The string to convert to camelCase
 * @returns The camelCase formatted string
 *
 * @example
 * // returns "helloWorld"
 * formatTitleToCamelCase("Hello World");
 *
 * @example
 * // returns "thisIsATest"
 * formatTitleToCamelCase("This Is A Test");
 */
export function formatTitleToCamelCase(title: string): string {
  return title
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

export function formatTitleToKebabCase(title: string): string {
  return title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")
    .replace(/[^a-z0-9-]/g, ""); // Remove any non-alphanumeric characters except hyphens
}

/**
 * Removes diacritical marks (accents) from a string.
 *
 * This function converts accented characters to their base form.
 * For example, "é" becomes "e", "ç" becomes "c", "ü" becomes "u", etc.
 *
 * @param str - The string with accented characters
 * @returns The string with accents removed
 *
 * @example
 * // Returns "Draa-Tafilalet"
 * removeAccents("Drâa-Tafilalet")
 *
 * @example
 * // Returns "Hoi An"
 * removeAccents("Hội An")
 */
export function removeAccents(str: string): string {
  // Normalize to decomposed form, which separates base characters from diacritical marks
  return str
    .replaceAll(".", "")
    .replaceAll("â", "a")
    .replaceAll("Â", "A")
    .replaceAll("ê", "e")
    .replaceAll("Ê", "E")
    .replaceAll("î", "i")
    .replaceAll("Î", "I")
    .replaceAll("ô", "o")
    .replaceAll("Ô", "O")
    .replaceAll("û", "u")
    .replaceAll("Û", "U")
    .replaceAll("ç", "c")
    .replaceAll("Ç", "C")
    .replaceAll("ñ", "n")
    .replaceAll("Ñ", "N")
    .replaceAll("ü", "u")
    .replaceAll("Ü", "U")
    .replaceAll("ß", "ss")
    .replaceAll("á", "a")
    .replaceAll("Á", "A")
    .replaceAll("é", "e")
    .replaceAll("É", "E")
    .replaceAll("í", "i")
    .replaceAll("Í", "I")
    .replaceAll("ó", "o")
    .replaceAll("Ó", "O")
    .replaceAll("ú", "u")
    .replaceAll("Ú", "U")
    .replaceAll("ý", "y")
    .replaceAll("Ý", "Y")
    .replaceAll("à", "a")
    .replaceAll("À", "A")
    .replaceAll("è", "e")
    .replaceAll("È", "E")
    .replaceAll("ì", "i")
    .replaceAll("Ì", "I")
    .replaceAll("ò", "o")
    .replaceAll("Ò", "O")
    .replaceAll("ù", "u")
    .replaceAll("Ù", "U")
    .replaceAll("ä", "a")
    .replaceAll("Ä", "A")
    .replaceAll("ë", "e")
    .replaceAll("Ë", "E")
    .replaceAll("ï", "i")
    .replaceAll("æ", "ae")
    .replaceAll("Æ", "AE")
    .replaceAll("ö", "o")
    .replaceAll("Ö", "O")
    .replaceAll("ü", "u")
    .replaceAll("Ü", "U")
    .replaceAll("ø", "o")
    .replaceAll("Ø", "O")
    .replaceAll("œ", "oe")
    .replaceAll("Œ", "OE")
    .replaceAll("š", "s")
    .replaceAll("Š", "S")
    .replaceAll("ž", "z")
    .replaceAll("Ž", "Z")
    .replaceAll("ç", "c")
    .replaceAll("Ç", "C")
    .replaceAll("ğ", "g")
    .replaceAll("Ğ", "G")
    .replaceAll("ş", "s")
    .replaceAll("Ş", "S")
    .replaceAll("ý", "y")
    .replaceAll("Ý", "Y")
    .replaceAll("ÿ", "y")
    .replaceAll("Ÿ", "Y")
    .replaceAll("ł", "l")
    .replaceAll("Ł", "L")
    .replaceAll("ń", "n")
    .replaceAll("Ń", "N")
    .replaceAll("ś", "s")
    .replaceAll("Ś", "S")
    .replaceAll("ź", "z")
    .replaceAll("Ź", "Z")
    .replaceAll("ż", "z")
    .replaceAll("Ż", "Z")
    .replaceAll("đ", "d")
    .replaceAll("Đ", "D") // Remove all combining diacritical marks
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "");
}

export function normalizeString(str: string): string {
  return removeAccents(str)
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .trim() // Trim leading and trailing spaces
    .toLowerCase(); // Convert to lowercase
}