import React, { useContext } from "react";
import { createContext } from "react";

const translations = [
  {
    language: "English",
    words: {
      home: "Home",
      events: "Events",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      language: "Language",
    },
  },
  {
    language: "Persian",
    words: {
      home: "خانه",
      events: "رویداد ها",
      aboutUs: "درباره ما",
      contactUs: "تماس با ما",
      language: "زبان",
    },
  },
];
const languagecontext = createContext();
function LanguageProvider({ children }) {
  const [language, setlanguage] = React.useState("English");
  const changeLanguage = (e) => {
    setlanguage(e);
  };
  const words =
    language === "English" ? translations[0].words : translations[1].words;

  return (
    <languagecontext.Provider value={{ language, changeLanguage, words }}>
      {children}
    </languagecontext.Provider>
  );
}
const useLanguage = () => useContext(languagecontext);

export { LanguageProvider, useLanguage };
