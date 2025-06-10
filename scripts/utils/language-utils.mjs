/**
 * Language utilities for Velari Voyages
 * Contains mappings between language names and ISO codes
 */

// ISO 639-1 language codes mapped to language names
export const languageCodeToName = {
  aa: "Afar",
  ab: "Abkhazian",
  ae: "Avestan",
  af: "Afrikaans",
  ak: "Akan",
  am: "Amharic",
  an: "Aragonese",
  ar: "Arabic",
  as: "Assamese",
  av: "Avaric",
  ay: "Aymara",
  az: "Azerbaijani",
  ba: "Bashkir",
  be: "Belarusian",
  bg: "Bulgarian",
  bh: "Bihari",
  bi: "Bislama",
  bm: "Bambara",
  bn: "Bengali",
  bo: "Tibetan",
  br: "Breton",
  bs: "Bosnian",
  ca: "Catalan",
  ce: "Chechen",
  ch: "Chamorro",
  co: "Corsican",
  cr: "Cree",
  cs: "Czech",
  cu: "Church Slavic",
  cv: "Chuvash",
  cy: "Welsh",
  da: "Danish",
  de: "German",
  dv: "Divehi",
  dz: "Dzongkha",
  ee: "Ewe",
  el: "Greek",
  en: "English",
  eo: "Esperanto",
  es: "Spanish",
  et: "Estonian",
  eu: "Basque",
  fa: "Persian",
  ff: "Fulah",
  fi: "Finnish",
  fj: "Fijian",
  fo: "Faroese",
  fr: "French",
  fy: "Western Frisian",
  ga: "Irish",
  gd: "Gaelic",
  gl: "Galician",
  gn: "Guarani",
  gu: "Gujarati",
  gv: "Manx",
  ha: "Hausa",
  he: "Hebrew",
  hi: "Hindi",
  ho: "Hiri Motu",
  hr: "Croatian",
  ht: "Haitian",
  hu: "Hungarian",
  hy: "Armenian",
  hz: "Herero",
  ia: "Interlingua",
  id: "Indonesian",
  ie: "Interlingue",
  ig: "Igbo",
  ii: "Sichuan Yi",
  ik: "Inupiaq",
  io: "Ido",
  is: "Icelandic",
  it: "Italian",
  iu: "Inuktitut",
  ja: "Japanese",
  jv: "Javanese",
  ka: "Georgian",
  kg: "Kongo",
  ki: "Kikuyu",
  kj: "Kuanyama",
  kk: "Kazakh",
  kl: "Kalaallisut",
  km: "Central Khmer",
  kn: "Kannada",
  ko: "Korean",
  kr: "Kanuri",
  ks: "Kashmiri",
  ku: "Kurdish",
  kv: "Komi",
  kw: "Cornish",
  ky: "Kirghiz",
  la: "Latin",
  lb: "Luxembourgish",
  lg: "Ganda",
  li: "Limburgan",
  ln: "Lingala",
  lo: "Lao",
  lt: "Lithuanian",
  lu: "Luba-Katanga",
  lv: "Latvian",
  mg: "Malagasy",
  mh: "Marshallese",
  mi: "Maori",
  mk: "Macedonian",
  ml: "Malayalam",
  mn: "Mongolian",
  mr: "Marathi",
  ms: "Malay",
  mt: "Maltese",
  my: "Burmese",
  na: "Nauru",
  nb: "Norwegian Bokmål",
  nd: "North Ndebele",
  ne: "Nepali",
  ng: "Ndonga",
  nl: "Dutch",
  nn: "Norwegian Nynorsk",
  no: "Norwegian",
  nr: "South Ndebele",
  nv: "Navajo",
  ny: "Chichewa",
  oc: "Occitan",
  oj: "Ojibwa",
  om: "Oromo",
  or: "Oriya",
  os: "Ossetian",
  pa: "Punjabi",
  pi: "Pali",
  pl: "Polish",
  ps: "Pashto",
  pt: "Portuguese",
  qu: "Quechua",
  rm: "Romansh",
  rn: "Rundi",
  ro: "Romanian",
  ru: "Russian",
  rw: "Kinyarwanda",
  sa: "Sanskrit",
  sc: "Sardinian",
  sd: "Sindhi",
  se: "Northern Sami",
  sg: "Sango",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  sm: "Samoan",
  sn: "Shona",
  so: "Somali",
  sq: "Albanian",
  sr: "Serbian",
  ss: "Swati",
  st: "Southern Sotho",
  su: "Sundanese",
  sv: "Swedish",
  sw: "Swahili",
  ta: "Tamil",
  te: "Telugu",
  tg: "Tajik",
  th: "Thai",
  ti: "Tigrinya",
  tk: "Turkmen",
  tl: "Tagalog",
  tn: "Tswana",
  to: "Tonga",
  tr: "Turkish",
  ts: "Tsonga",
  tt: "Tatar",
  tw: "Twi",
  ty: "Tahitian",
  ug: "Uighur",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  ve: "Venda",
  vi: "Vietnamese",
  vo: "Volapük",
  wa: "Walloon",
  wo: "Wolof",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  za: "Zhuang",
  zh: "Chinese",
  zu: "Zulu",
};

// Language names mapped to ISO 639-1 codes for reverse lookup
export const languageNameToCode = Object.entries(languageCodeToName).reduce(
  (acc, [code, name]) => {
    acc[name] = code;
    return acc;
  },
  {},
);

// Languages spoken in a country, including common second languages for tourism/business
export const countryLanguagesMap = {
  Argentina: [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
    { code: "it", name: "Italian" },
  ],
  Australia: [{ code: "en", name: "English" }],
  Austria: [
    { code: "de", name: "German" },
    { code: "en", name: "English" },
  ],
  Bahamas: [{ code: "en", name: "English" }],
  Bermuda: [
    // British Overseas Territory
    { code: "en", name: "English" },
  ],
  Bosnia: [
    // Bosnia and Herzegovina
    { code: "bs", name: "Bosnian" },
    { code: "hr", name: "Croatian" },
    { code: "sr", name: "Serbian" },
    { code: "en", name: "English" },
  ],
  Brazil: [
    { code: "pt", name: "Portuguese" },
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  Cambodia: [
    { code: "km", name: "Central Khmer" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
  ],
  Canada: [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
  ],
  "Cayman Islands": [
    // British Overseas Territory
    { code: "en", name: "English" },
  ],
  Chile: [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  China: [
    { code: "zh", name: "Chinese" }, // Mandarin is official
    { code: "en", name: "English" }, // Widely taught
  ],
  Colombia: [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  Croatia: [
    { code: "hr", name: "Croatian" },
    { code: "en", name: "English" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
  ],
  "Czech Republic": [
    { code: "cs", name: "Czech" },
    { code: "sk", name: "Slovak" },
    { code: "en", name: "English" },
  ],
  Denmark: [
    { code: "da", name: "Danish" },
    { code: "en", name: "English" },
    { code: "de", name: "German" },
  ],
  "Dominican Republic": [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  Ecuador: [
    { code: "es", name: "Spanish" },
    { code: "qu", name: "Quechua" },
    { code: "en", name: "English" },
  ],
  Egypt: [
    { code: "ar", name: "Arabic" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
  ],
  Fiji: [
    { code: "en", name: "English" },
    { code: "fj", name: "Fijian" },
    { code: "hi", name: "Hindi" }, // Fiji Hindi
  ],
  Finland: [
    { code: "fi", name: "Finnish" },
    { code: "sv", name: "Swedish" },
    { code: "en", name: "English" },
  ],
  France: [
    { code: "fr", name: "French" },
    { code: "en", name: "English" },
  ],
  "French Polynesia": [
    // Overseas collectivity of France
    { code: "fr", name: "French" },
    { code: "ty", name: "Tahitian" },
    { code: "en", name: "English" },
  ],
  Georgia: [
    { code: "ka", name: "Georgian" },
    { code: "ru", name: "Russian" },
    { code: "en", name: "English" },
  ],
  Germany: [
    { code: "de", name: "German" },
    { code: "en", name: "English" },
  ],
  Greece: [
    { code: "el", name: "Greek" },
    { code: "en", name: "English" },
  ],
  Honduras: [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  "Hong Kong": [
    // SAR of China
    { code: "zh", name: "Chinese" }, // Cantonese is common
    { code: "en", name: "English" },
  ],
  Hungary: [
    { code: "hu", name: "Hungarian" },
    { code: "en", name: "English" },
  ],
  Iceland: [
    { code: "is", name: "Icelandic" },
    { code: "en", name: "English" },
    { code: "da", name: "Danish" },
  ],
  India: [
    { code: "hi", name: "Hindi" },
    { code: "en", name: "English" },
    { code: "bn", name: "Bengali" },
    { code: "te", name: "Telugu" },
    { code: "mr", name: "Marathi" },
    { code: "ta", name: "Tamil" },
  ],
  Indonesia: [
    { code: "id", name: "Indonesian" },
    { code: "en", name: "English" },
    { code: "jv", name: "Javanese" },
  ],
  Ireland: [
    { code: "en", name: "English" },
    { code: "ga", name: "Irish" },
  ],
  Italy: [
    { code: "it", name: "Italian" },
    { code: "en", name: "English" },
  ],
  Jamaica: [
    { code: "en", name: "English" }, // Jamaican Patois is also spoken
  ],
  Japan: [
    { code: "ja", name: "Japanese" },
    { code: "en", name: "English" },
  ],
  Jordan: [
    { code: "ar", name: "Arabic" },
    { code: "en", name: "English" },
  ],
  Kenya: [
    { code: "sw", name: "Swahili" },
    { code: "en", name: "English" },
  ],
  Latvia: [
    { code: "lv", name: "Latvian" },
    { code: "ru", name: "Russian" },
    { code: "en", name: "English" },
  ],
  Malta: [
    { code: "mt", name: "Maltese" },
    { code: "en", name: "English" },
  ],
  Mexico: [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  Monaco: [
    { code: "fr", name: "French" },
    { code: "en", name: "English" },
    { code: "it", name: "Italian" },
  ],
  Morocco: [
    { code: "ar", name: "Arabic" }, // Moroccan Arabic (Darija)
    { code: "fr", name: "French" }, // Berber languages also official
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ],
  Nepal: [
    { code: "ne", name: "Nepali" },
    { code: "en", name: "English" },
  ],
  Netherlands: [
    { code: "nl", name: "Dutch" },
    { code: "en", name: "English" },
    { code: "fy", name: "Western Frisian" },
  ],
  "New Zealand": [
    { code: "en", name: "English" },
    { code: "mi", name: "Maori" },
  ],
  Norway: [
    { code: "no", name: "Norwegian" }, // Bokmål and Nynorsk
    { code: "en", name: "English" },
  ],
  Panama: [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  Peru: [
    { code: "es", name: "Spanish" },
    { code: "qu", name: "Quechua" },
    { code: "ay", name: "Aymara" },
    { code: "en", name: "English" },
  ],
  Portugal: [
    { code: "pt", name: "Portuguese" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ],
  "Puerto Rico": [
    // Territory of US
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  Russia: [
    { code: "ru", name: "Russian" },
    { code: "en", name: "English" }, // Common for business/tourism
  ],
  Serbia: [
    { code: "sr", name: "Serbian" },
    { code: "en", name: "English" },
  ],
  Singapore: [
    { code: "en", name: "English" },
    { code: "ms", name: "Malay" },
    { code: "zh", name: "Chinese" }, // Mandarin
    { code: "ta", name: "Tamil" },
  ],
  "Sint Maarten": [
    // Constituent country of the Kingdom of the Netherlands
    { code: "nl", name: "Dutch" },
    { code: "en", name: "English" }, // Predominant
  ],
  "South Africa": [
    { code: "af", name: "Afrikaans" },
    { code: "en", name: "English" },
    { code: "zu", name: "Zulu" },
    { code: "xh", name: "Xhosa" },
    { code: "st", name: "Southern Sotho" },
  ],
  "South Korea": [
    { code: "ko", name: "Korean" },
    { code: "en", name: "English" },
  ],
  Spain: [
    { code: "es", name: "Spanish" },
    { code: "ca", name: "Catalan" },
    { code: "eu", name: "Basque" },
    { code: "gl", name: "Galician" },
    { code: "en", name: "English" },
  ],
  Sweden: [
    { code: "sv", name: "Swedish" },
    { code: "en", name: "English" },
  ],
  Taiwan: [
    // Republic of China
    { code: "zh", name: "Chinese" }, // Mandarin
    { code: "en", name: "English" }, // Taiwanese Hokkien, Hakka also spoken
  ],
  Tanzania: [
    { code: "sw", name: "Swahili" },
    { code: "en", name: "English" },
  ],
  Thailand: [
    { code: "th", name: "Thai" },
    { code: "en", name: "English" },
  ],
  Uganda: [
    { code: "en", name: "English" },
    { code: "sw", name: "Swahili" },
    { code: "lg", name: "Ganda" },
  ],
  "United Arab Emirates": [
    { code: "ar", name: "Arabic" },
    { code: "en", name: "English" },
  ],
  "United Kingdom": [
    { code: "en", name: "English" },
    { code: "cy", name: "Welsh" },
    { code: "gd", name: "Gaelic" }, // Scottish Gaelic
  ],
  "United States": [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ],
  Uruguay: [
    { code: "es", name: "Spanish" },
    { code: "en", name: "English" },
  ],
  "US Virgin Islands": [
    // Territory of US
    { code: "en", name: "English" },
  ],
  Vanuatu: [
    { code: "bi", name: "Bislama" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
  ],
  Vietnam: [
    { code: "vi", name: "Vietnamese" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
  ],
};

// Common languages grouped by region for use in crew/destination context
export const languagesByRegion = {
  global: [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ar", name: "Arabic" },
    { code: "ru", name: "Russian" },
    { code: "pt", name: "Portuguese" },
    { code: "it", name: "Italian" },
  ],
  europe: [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "es", name: "Spanish" },
    { code: "pt", name: "Portuguese" },
    { code: "nl", name: "Dutch" },
    { code: "sv", name: "Swedish" },
    { code: "no", name: "Norwegian" },
    { code: "da", name: "Danish" },
    { code: "fi", name: "Finnish" },
    { code: "ru", name: "Russian" },
    { code: "pl", name: "Polish" },
    { code: "cs", name: "Czech" },
    { code: "el", name: "Greek" },
  ],
  asia: [
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "hi", name: "Hindi" },
    { code: "th", name: "Thai" },
    { code: "vi", name: "Vietnamese" },
    { code: "id", name: "Indonesian" },
    { code: "ms", name: "Malay" },
    { code: "tl", name: "Tagalog" },
    { code: "bn", name: "Bengali" },
    { code: "ur", name: "Urdu" },
  ],
  americas: [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "pt", name: "Portuguese" },
    { code: "fr", name: "French" },
    { code: "ht", name: "Haitian" },
    { code: "qu", name: "Quechua" },
    { code: "ay", name: "Aymara" },
    { code: "gn", name: "Guarani" },
  ],
  middleEast: [
    { code: "ar", name: "Arabic" },
    { code: "fa", name: "Persian" },
    { code: "tr", name: "Turkish" },
    { code: "he", name: "Hebrew" },
    { code: "ku", name: "Kurdish" },
  ],
  africa: [
    { code: "ar", name: "Arabic" },
    { code: "sw", name: "Swahili" },
    { code: "ha", name: "Hausa" },
    { code: "yo", name: "Yoruba" },
    { code: "ig", name: "Igbo" },
    { code: "am", name: "Amharic" },
    { code: "zu", name: "Zulu" },
    { code: "xh", name: "Xhosa" },
    { code: "ff", name: "Fulah" },
    { code: "st", name: "Southern Sotho" },
    { code: "lg", name: "Ganda" },
  ],
  oceania: [
    { code: "en", name: "English" },
    { code: "mi", name: "Maori" },
    { code: "sm", name: "Samoan" },
    { code: "to", name: "Tonga" },
    { code: "fj", name: "Fijian" },
    { code: "ty", name: "Tahitian" },
  ],
};

// Common languages for cruise personnel globally (most commonly spoken languages)
export const commonPersonnelLanguages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
  { code: "nl", name: "Dutch" },
  { code: "ko", name: "Korean" },
  { code: "hi", name: "Hindi" },
  { code: "sv", name: "Swedish" },
  { code: "no", name: "Norwegian" },
  { code: "da", name: "Danish" },
  { code: "fi", name: "Finnish" },
  { code: "el", name: "Greek" },
  { code: "tr", name: "Turkish" },
  { code: "pl", name: "Polish" },
  { code: "cs", name: "Czech" },
  { code: "hu", name: "Hungarian" },
  { code: "th", name: "Thai" },
  { code: "vi", name: "Vietnamese" },
  { code: "id", name: "Indonesian" },
  { code: "ms", name: "Malay" },
  { code: "tl", name: "Tagalog" },
  { code: "bn", name: "Bengali" },
  { code: "ur", name: "Urdu" },
  { code: "sw", name: "Swahili" },
];

// Helper function to get random languages by country, region, or globally
export function getRandomLanguages(count = 3, sourceKey = "global") {
  let sourceList = [];

  if (countryLanguagesMap[sourceKey]) {
    sourceList = countryLanguagesMap[sourceKey];
  } else if (languagesByRegion[sourceKey]) {
    sourceList = languagesByRegion[sourceKey];
  } else {
    sourceList = commonPersonnelLanguages;
  }

  const selectedLanguages = [];

  // Always try to include English for cruise personnel
  const englishLang = sourceList.find((lang) => lang.code === "en");
  if (englishLang) {
    selectedLanguages.push(englishLang);
  }

  // Create a copy to avoid modifying original array and remove English if already added
  const availableLanguages = [...sourceList].filter(
    (lang) => lang.code !== "en",
  );

  // Ensure we respect the requested count (between 1-5, as English might be one)
  // Max 5 languages total. If English is already added, we need up to 4 more.
  // Min 1 language (which could be English if no others are available or count is 1).
  const targetCount = Math.min(Math.max(count, 1), 5);

  // Add random additional languages
  while (
    selectedLanguages.length < targetCount &&
    availableLanguages.length > 0
  ) {
    const randomIndex = Math.floor(Math.random() * availableLanguages.length);
    selectedLanguages.push(availableLanguages[randomIndex]);
    availableLanguages.splice(randomIndex, 1); // Remove to avoid duplicates
  }

  // If English wasn't in the source list but we have space and need it (e.g. for crew)
  // and the target count allows, we can add it from the global list.
  // However, for crew members, we assume the source list (country/region) should ideally contain English
  // or it's acceptable if it doesn't for specific roles/contexts.
  // The current logic prioritizes English if present in the source list.

  // Ensure unique languages, just in case a source list had duplicates (though unlikely with current setup)
  const uniqueLanguages = selectedLanguages.filter(
    (lang, index, self) =>
      index === self.findIndex((l) => l.code === lang.code),
  );

  return uniqueLanguages;
}
