import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Coder from "../assets/image/Coder.jpg";
import Didimo from "../assets/image/Didimo.jpg";
import Portfolio from "../assets/image/Portfolio.jpg";
import Mobile from "../assets/image/Mobile.jpg";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div className="w-100">
        <div
          className="row align-items-center d-flex postion-relative justify-content-between"
          id="header"
        >
          <div className="col-md-12 col-lg-8 d-flex align-items-center justify-content-center">
            <p
              className="d-block text-black lh-sm"
              style={{
                fontWeight: 500,
              }}
              id="name"
            >
              Project <span className="d-inline text-black">Showcase</span>
            </p>
          </div>
          <div className="col-md-12 col-lg-3 d-block">
            <div
              className="w-100 d-block mb-3"
              style={{
                fontSize: "16px",
              }}
            >
              Tech Tales: A Journey <br /> Through My Project Showcase.
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
          className="row gap-3 gap-md-5 py-5 d-flex justify-content-between"
          id="project"
        >
          <div className="col-12 flex-column flex-md-row gap-2 d-flex">
            <div className="col-md-7 col-12 overflow-hidden">
              <div className="w-100 h-100 position-relative" id="wrapper">
                <img src={Coder} className="" alt="" id="gambar" />
                <div className="position-absolute rounded-4" id="view">
                  <Link to="/Project/Coder" id="viewText">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-auto ps-2">
              <Link
                to="/Project/Coder"
                className="ms-0 text-black"
                id="project"
                style={{ fontWeight: 500 }}
              >
                Coder Web
              </Link>
              <p className="text-black" id="desc">
                <i>Backend.</i>
                <br />
                Coder Web is a UKM Coder Telkom University Surabaya website
                profile.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-12 flex-column flex-md-row-reverse gap-2 d-flex">
            <div className="col-md-7 col-12 overflow-hidden">
              <div className="w-100 h-100 position-relative" id="wrapper">
                <img src={Didimo} className="" alt="" id="gambar" />
                <div className="position-absolute rounded-4" id="view">
                  <Link to="/Project/Didimo" id="viewText">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-auto pe-2">
              <Link
                to="/Project/Didimo"
                className="ms-0 text-black"
                id="project"
                style={{ fontWeight: 500 }}
              >
                Didimo
              </Link>
              <p className="text-black" id="desc">
                <i>Backend.</i>
                <br />
                Didimo is a health checking website with IoT integration.
              </p>
            </div>
          </div>
          <div className="col-12 flex-column flex-md-row gap-2 d-flex">
            <div className="col-md-7 col-12 overflow-hidden">
              <div className="w-100 h-100 position-relative" id="wrapper">
                <img src={Portfolio} className="" alt="" id="gambar" />
                <div className="position-absolute rounded-4" id="view">
                  <Link to="/Project/Portfolio" id="viewText">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-auto ps-2">
              <Link
                to="/Project/Portfolio"
                className="ms-0 text-black"
                id="project"
                style={{ fontWeight: 500 }}
              >
                My Website
              </Link>
              <p className="text-black" id="desc">
                <i>Frontend.</i>
                <br />
                My portfolio website that includes all my projects.
              </p>
              <p></p>
            </div>
          </div>
          <div className="col-12 flex-column flex-md-row-reverse gap-2 d-flex">
            <div className="col-md-7 col-12 overflow-hidden">
              <div className="w-100 h-100 position-relative" id="wrapper">
                <img src={Mobile} className="" alt="" id="gambar" />
                <div className="position-absolute rounded-4" id="view">
                  <Link to="/Project/Sikeang" id="viewText">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-auto pe-2">
              <Link
                to="/Project/Sikeang"
                className="ms-0 text-black"
                id="project"
                style={{ fontWeight: 500 }}
              >
                Sikeang
              </Link>
              <p className="text-black" id="desc">
                <i>Frontend.</i>
                <br />
                Sikeang is a UKM Coder Telkom University Surabaya mobile apps.
              </p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center gap-4">
            <a
              href="https://github.com/DandyMaulana19"
              className="rounded-5 text-center bg-black text-white"
              style={{
                paddingTop: 16,
                paddingBottom: 16,
                paddingRight: 32,
                paddingLeft: 32,
                fontSize: 16,
                textDecoration: "none",
              }}
              id="button"
            >
              <div className="" id="p1">
                Explore All Projects. &nbsp;
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(90deg)" }}
                >
                  <path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z" />
                </svg>
              </div>
              {/* <p
                className="position-absolute text-danger my-5"
                style={{ top: 16, bottom: 16, right: 32, left: 16 }}
              >
                Lets'Connect
              </p> */}
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Project;
