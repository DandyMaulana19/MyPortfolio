import { React } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Coder from "./assets/image/Coder.jpg";
import Didimo from "./assets/image/Didimo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div className="w-100 overflow-x-hidden" style={{ width: "100vw" }}>
        <div
          className="row align-items-center d-flex postion-relative justify-content-between"
          id="header"
        >
          <div className="col-md-12 col-lg-7 d-flex align-items-center justify-content-center">
            <p
              className="d-block text-black lh-sm"
              style={{
                fontWeight: 500,
              }}
              id="name"
            >
              Dandy <span className="d-inline text-black">Maulana</span>
            </p>
          </div>
          <div className="col-md-12 col-lg-5 d-block">
            <div className="mb-4">
              <svg
                stroke="#000000"
                fill="#000000"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                style={{ transform: "rotate(140deg)" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z" />
              </svg>
            </div>
            <div
              className="w-100 d-block"
              style={{
                fontSize: "16px",
              }}
            >
              Code enthusiat conjuring code magic for captivating digital
              experiences. Passionate about crafting seamless interfaces and
              powerful backend to shape the digital frontier.
            </div>
          </div>
          <div className="col-12 d-flex align-items-center mt-4 mt-xl-0 justify-content-between ">
            <div className="d-flex align-items-center gap-4">
              <a
                href="https://mailto:dandyainul19@gmail.com"
                className="rounded rounded-pill  text-center bg-black text-white"
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
                  Lets'Connect
                </div>
                {/* <p
                className="position-absolute text-danger my-5"
                style={{ top: 16, bottom: 16, right: 32, left: 16 }}
              >
                Lets'Connect
              </p> */}
              </a>
              <a
                href="github.com"
                className="text-black"
                style={{ textDecoration: "none" }}
              >
                Resume
              </a>
            </div>
            <div className="d-flex flex-column align-items-center" id="sosmed">
              <a href="https://instagram.com/dandy.may_" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" />
                </svg>
              </a>
              <a href="https://github.com/DandyMaulana19" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  {" "}
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </a>
              <a href="" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  {" "}
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="col-12 text-center justify-content-center"
            style={{ fontSize: 16, paddingTop: 40, paddingBottom: 40 }}
          >
            <a
              href="github.com"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              Scroll
            </a>
          </div>
        </div>

        <div
          className="row align-items-center gap-4 flex-row-reverse d-flex postion-relative justify-content-between"
          id="project"
        >
          <div className="col-md-12 col-lg-7 d-flex align-items-center justify-content-center">
            <p
              className="d-block text-black lh-1"
              style={{
                fontWeight: 500,
              }}
              id="title"
            >
              Selected Projects
            </p>
          </div>
          <div className="col-md-12 col-lg-3 d-block">
            <div
              className="w-100 d-block"
              style={{
                fontSize: "16px",
              }}
            >
              Have a look at some of <br /> the projects i've worked on.
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
                Coder
              </Link>
              <p className="text-black" id="desc">
                <i>Backend.</i>
                <br />
                Coder is a UKM Coder Telkom Surabaya website profile.
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
}

export default App;
