import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ThemeContext} from '../contexts/theme'
import { useContext } from 'react';





export default function Header() {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  console.log(useContext(ThemeContext));
  return (
    <header>
      <nav className="flex flex-wrap items-center px-3 bg-[#13005A] py-2">
        <Link className="inline-flex items-center px-2 mr-5" href="/">
          <Image
            src="/assets/cookei.png"
            width={60}
            height={60}
            alt="/"
            className="mr-3"
          ></Image>
          <span className="text-xl font-bold tracking-wide text-[#FADE9C] uppercase">
            {" "}
            Cookies Store{" "}
          </span>
        </Link>
        <section>
          <section>
            <Link
              className="items-center text-xl justify-center w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="items-center text-xl justify-center w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="items-center text-xl justify-center w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]"
              href="/about"
            >
              About Us
            </Link>
            <button
              type="button"
              className="items-center justify-center text-xl w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]"
              onClick={toggleThemeHandler}
            >
              Change Theme
            </button>
          </section>
        </section>
      </nav>
    </header>
  );
}
