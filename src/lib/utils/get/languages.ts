import { Language, languages } from "@/lib/constants/info/languages";

export const getLanguageByIso = (iso: string): Language | undefined => {
  return languages.find((lang) => lang.iso639_1 === iso);
};
export const getLanguageByName = (name: string): Language | undefined => {
  return languages.find(
    (lang) => lang.name.toLowerCase() === name.toLowerCase(),
  );
};
export const getLanguagesByIsoList = (isoList: string[]): Language[] => {
  return languages.filter((lang) => isoList.includes(lang.iso639_1));
};
export const getLanguagesByNameList = (nameList: string[]): Language[] => {
  return languages.filter((lang) =>
    nameList.some((name) => lang.name.toLowerCase() === name.toLowerCase()),
  );
};
export const formatLanguagesList = (languages: string[]): string => {
  if (languages.length === 0) return "";
  if (languages.length === 1) return languages[0];

  const lastLanguage = languages[languages.length - 1];
  const otherLanguages = languages.slice(0, -1).join(", ");
  return `${otherLanguages}, and ${lastLanguage}`;
};
export const formatLanguages = (languages: Language[]): string => {
  if (languages.length === 0) return "";
  if (languages.length === 1) return languages[0].name;

  const lastLanguage = languages[languages.length - 1].name;
  const otherLanguages = languages
    .slice(0, -1)
    .map((lang) => lang.name)
    .join(", ");
  return `${otherLanguages}, and ${lastLanguage}`;
};
export const formatLanguagesWithIso = (languages: Language[]): string => {
  if (languages.length === 0) return "";
  if (languages.length === 1)
    return `${languages[0].name} (${languages[0].iso639_1})`;

  const lastLanguage = languages[languages.length - 1];
  const otherLanguages = languages
    .slice(0, -1)
    .map((lang) => `${lang.name} (${lang.iso639_1})`)
    .join(", ");
  return `${otherLanguages}, and ${lastLanguage.name} (${lastLanguage.iso639_1})`;
};
export const formatLanguagesWithIsoList = (languages: string[]): string => {
  if (languages.length === 0) return "";
  if (languages.length === 1) {
    const lang = getLanguageByIso(languages[0]);
    return lang ? `${lang.name} (${lang.iso639_1})` : languages[0];
  }

  const lastLanguage = getLanguageByIso(languages[languages.length - 1]);
  const otherLanguages = languages
    .slice(0, -1)
    .map((iso) => {
      const lang = getLanguageByIso(iso);
      return lang ? `${lang.name} (${lang.iso639_1})` : iso;
    })
    .join(", ");

  return `${otherLanguages}, and ${
    lastLanguage
      ? `${lastLanguage.name} (${lastLanguage.iso639_1})`
      : lastLanguage
  }`;
};
