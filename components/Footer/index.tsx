"use client";

import Image from "next/image";
import React from "react";
import NavBarLogo from "../NavBar/components/NavBarLogo";
import useScrollToAnchor from "@/hooks/useScrollToAnchor";
import Reveal from "../Reveal";

const Footer = () => {
  const scrollToAnchor = useScrollToAnchor();
  return (
    <footer className="dark:bg-[#09090b] bg-white p-3  dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] relative shadow-inner">
      <div 
      className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"
      id="contato">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Reveal>
              <button
                onClick={() => {
                  scrollToAnchor("#home");
                }}
              >
                <NavBarLogo />
              </button>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <Reveal>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Redes
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a
                      href="https://github.com/FernandoYanez1"
                      className="hover:underline "
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/feryanez20/"
                      className="hover:underline"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div >
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contatos
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                
                  <li className="mb-4">
                    <a
                      href="https://wa.me/5561983209025?text=Ol%C3%A1,%20venho%20pelo%20link%20do%20site!!"
                      className="hover:underline"
                      target="_blank"
                    >
                      WhatsApp
                    </a>
                    </li>
                    <li>
                    <a
                      href="https://www.linkedin.com/in/fernando-ya%C3%B1ez/"
                      target="_blank"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <Reveal>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a
                href="https://www.linkedin.com/in/gustavo-lage/"
                className="hover:underline"
                target="_blank"
              >
                Fernando Yañez
              </a>
              . All Rights Reserved.
            </span>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
