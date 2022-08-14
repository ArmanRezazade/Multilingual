import { FC, useContext } from "react";
import NavLink from "./NavLink";
import AppContext from "../context/AppContext";

const MobileNav: FC<{
  open: boolean;
  setOpen: (arg: boolean) => void;
}> = ({ open, setOpen }) => {
  const context = useContext(AppContext);

  return (
    <div
      id="sidebar"
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform transition-transform duration-300 ease-in-out filter drop-shadow-md ${
        open ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      {open ? (
        <ul className="divide-y divide-lightgrey">
          <li
            key="home"
            onClick={() => {
              setOpen(!open);
            }}
            className="p-2 bg-indigo-800"
          >
            <NavLink link="/">{context.labels.home}</NavLink>
          </li>
          <li
            key="events"
            onClick={() => {
              setOpen(!open);
            }}
            className="p-2 bg-indigo-800"
          >
            <NavLink link="/Events">{context.labels.events}</NavLink>
          </li>
          <li
            key="aboutUs"
            onClick={() => {
              setOpen(!open);
            }}
            className="p-2 bg-indigo-800"
          >
            <NavLink link="/AboutUs">{context.labels.aboutUs}</NavLink>
          </li>
          <li
            key="contactUs"
            onClick={() => {
              setOpen(!open);
            }}
            className="p-2 bg-indigo-800"
          >
            <NavLink link="/ContactUs">{context.labels.contactUs}</NavLink>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileNav;
