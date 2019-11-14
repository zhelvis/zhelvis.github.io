// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
    author: `Vladimir Zhelvis`,
  },
  de: {
    path: `de`,
    locale: `de-DE`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `de`,
    ogLanguage: `de_DE`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
    author: `Vladimir Zhelvis`,
  },
  ru: {
    path: `ru`,
    locale: `ru-RU`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `ru`,
    ogLanguage: `ru_RU`,
    defaultTitle: `Использование i18n с Gatsby`,
    defaultDescription: `Пример сайта на Gatsby с использованием MDX и i18n (без зависимостей)`,
    author: `Владимир Жельвис`,
  },
}
