import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full  bottom-0 border-t-2 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="cursor-pointer">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Mini-Games
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://icons8.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Icons
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Reach The Developer
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="mailto:develop.with.lalit@gmail.com"
                    className="hover:underline "
                  >
                    E-Mail
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/developwithlalit/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/develop-with-lalit/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            No Rights Reserved, Enjoy!
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
