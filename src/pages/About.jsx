import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState } from "react";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div id="top"></div>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className={`w-100 overflow-x-hidden ${darkMode ? "dark-mode" : ""}`}>
        <div
          className="row align-items-center mb-3 d-flex postion-relative justify-content-between"
          id="header"
        >
          <div className="col-md-12 col-lg-7 align-items-center justify-content-center">
            <p
              className="d-block text-black lh-sm"
              style={{
                fontWeight: 500,
              }}
              id="about"
            >
              About <span className="d-inline d-md-block text-black">Me</span>
            </p>
          </div>
          <div className="col-md-12 col-lg-3 d-block">
            <div
              className="w-100 d-block mb-3"
              style={{
                fontSize: "16px",
              }}
            >
              Unveiling the Wizard Behind the Code: My Journey, My Passion, My
              Story.
            </div>
            <div>
              <svg
                stroke="#000000"
                fill="#000000"
                stroke-width="0"
                viewBox="0 0 24 24"
                class=" hidden lg:block"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.75 8.5a.75.75 0 0 1 .75.75v7.19L16.72 6.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L7.56 17.5h7.19a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z" />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="row align-items-start d-flex postion-relative justify-content-between"
          id="content"
        >
          <div className="col-md-12 col-lg-4 align-items-start justify-content-between">
            <p>(Summary)</p>
          </div>
          <div className="col-md-12 col-lg-8 align-items-start">
            <p>
              Hi, i'm Dandy 👋 <br /> I'm a fullstack developer who learns
              quickly and has a strong interest in acquiring new skills. I'm
              passionate about crafting seamless interfaces and powerful
              backends to shape the digital frontier. I'm proficient in modern
              frameworks and libraries like React.js, Express.js, TypeScript,
              Tailwind CSS, Bootstrap, Laravel, and more.
            </p>
          </div>
          {/* <div className="row"> */}
          <div className="col-md-12 col-lg-4 align-items-start justify-content-between">
            <p>(Education)</p>
          </div>
          <div className="col-md-12 col-lg-8 align-items-start justify-content-between ">
            <p>
              I'm a student at Telkom University Surabaya majoring in software
              engineering
            </p>
          </div>
          {/* </div> */}
          <div className="col-md-12 col-lg-4 align-items-start justify-content-between">
            <p>(Skills)</p>
          </div>
          <div className="col-md-12 col-lg-8 align-items-start">
            <div className="col-lg-3 col-md-12 align-items-center ">
              <b>Programming Languages</b>
            </div>
            <div className="col-lg-9 col-md-12  ">
              <p>JavaScript, TypeScript, Java, C++, PHP</p>
            </div>
            <div className="col-lg-3 col-md-12 align-items-center ">
              <b>Framework & Library</b>
            </div>
            <div className="col-lg-9 col-md-12  ">
              <p>
                React.Js, Express.Js, Laravel, Bootstrap, Tailwind CSS, MySQL,
                MongoDB
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
