import { useContext } from "react";
import { useState } from "react";
import { Languages } from "../enum/LanguageEnum";
import AppContext from "../context/AppContext";
import en_labels from "../languages/en.json";
import fa_labels from "../languages/fa.json";

const LanguageSelect = () => {
  const context = useContext(AppContext);

  const [showList, setShowList] = useState(false);

  return (
    <>
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-indigo-800 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          setShowList(!showList);
        }}
      >
        {context?.language === Languages.English ? "English" : "فارسی"}
      </button>
      <div
        id="dropdown"
        className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-12 ${
          showList ? "" : "hidden"
        }`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li
            id="englishLanguage"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white select-none"
            onClick={() => {
              context?.setLanguage(Languages.English);
              context?.setLabels(en_labels);
              setShowList(!showList);
            }}
          >
            English
          </li>
          <li
            id="farsiLanguage"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white select-none"
            onClick={() => {
              context?.setLanguage(Languages.Farsi);
              context?.setLabels(fa_labels);
              setShowList(!showList);
            }}
          >
            فارسی
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageSelect;
