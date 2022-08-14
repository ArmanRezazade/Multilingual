import { createContext } from "react";
import { Languages } from "../enum/LanguageEnum";
import en_labels from "../languages/en.json";

interface LabelsInterface {
  home: string;
  events: string;
  aboutUs: string;
  contactUs: string;
}

interface AppContextInterface {
  language: Languages;
  labels: LabelsInterface;
  setLanguage: (language: Languages) => void;
  setLabels: (labels: LabelsInterface) => void;
}

const AppContext = createContext<AppContextInterface>({
  language: Languages.English,
  labels: en_labels,
  setLanguage: () => {},
  setLabels: () => {},
});

export default AppContext;
