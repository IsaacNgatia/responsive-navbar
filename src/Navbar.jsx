import React, { useState } from "react";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <div className="flex md:flex-row flex-col bg-gray-200 border border-b-dark-200 drop-shadow-md items-center px-20 py-1">
        <div className="max-w-[160px]">
          <img
            src="./logo_transparent.png"
            alt="Logo"
            className="md:w-40 md:h-20  h-10 w-20"
          />
        </div>

        <div className="flex flex-row justify-between flex-1 ">
          <ul
            className={`  flex lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 flex-col mx-auto md:items-center ${
              showLinks
                ? "overflow-visible h-auto"
                : "overflow-hidden h-0 lg:h-auto"
            }`}
          >
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>

          <div className="invisible lg:visible  flex flex-row space-x-4">
            {social.map((handle) => {
              return (
                <div key={handle.id}>
                  {" "}
                  <a href={handle.url}>
                    <img src={handle.icon} alt="socials" className="w-5 h-5" />
                  </a>
                </div>
              );
            })}
          </div>
          <div>
            <button onClick={() => setShowLinks(!showLinks)}>
              <img
                src="./hamburger.png"
                className={`w-7 h-7 visible lg:invisible top-2 right-5 fixed ${
                  showLinks
                    ? "rotate-90 duration-300"
                    : "rotate-0  duration-500"
                }`}
                alt="menu"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
