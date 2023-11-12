import i18n from "i18next";
import enUS from "./en-US";
import zhCN from "./zh-CN";
import zhHK from "./zh-HK";
import { initReactI18next } from "react-i18next";

export const resources = {
  "en-US": {
    translation: enUS,
  },
  "zh-CN": {
    translation: zhCN,
  },
  "zh-HK": {
    translation: zhHK,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("language") || "en-US",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
