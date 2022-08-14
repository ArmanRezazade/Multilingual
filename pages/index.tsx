import type { NextPage } from "next";
import { useState } from "react";
import NavLink from "../component/NavLink";
import MobileNav from "../component/MobileNav";
import LanguageSelect from "../component/LanguageSelect";
import AppContext from "../context/AppContext";
import en_labels from "../languages/en.json";
import { Languages } from "../enum/LanguageEnum";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(Languages.English);
  const [labels, setLabels] = useState(en_labels);

  return (
    <AppContext.Provider
      value={{
        language: language,
        labels: labels,
        setLanguage: setLanguage,
        setLabels: setLabels,
      }}
    >
      <nav
        className="bg-indigo-800 shadow-lg grid grid-cols-4"
        style={{
          direction: language === Languages.English ? "ltr" : "rtl",
        }}
      >
        <MobileNav open={open} setOpen={setOpen} />
        <div className="col-span-3 p-4 flex items-center">
          <div className="flex">
            <div className="flex space-x-7">
              <div className="hidden md:flex items-center space-x-1">
                <NavLink key="home" link="/">
                  {labels.home}
                </NavLink>
                <NavLink key="events" link="/Events">
                  {labels.events}
                </NavLink>
                <NavLink key="aboutUs" link="/AboutUs">
                  {labels.aboutUs}
                </NavLink>
                <NavLink key="contactUs" link="/ContactUs">
                  {labels.contactUs}
                </NavLink>
              </div>
            </div>
            <div id="mobile-menu" className="md:hidden flex items-center">
              <button
                className="outline-none"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <svg
                  className=" w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 flex items-center justify-end">
          <LanguageSelect />
        </div>
      </nav>
    </AppContext.Provider>
  );
};

export default Home;
