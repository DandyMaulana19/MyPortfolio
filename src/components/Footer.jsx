import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="px-lg-5 overflow-x-hidden" style={{ width: "100vw" }}>
        <div className="row mt-5 px-4 justify-content-between">
          <div className="col-7 mb-4 d-flex p-0">
            <div className="col-md-2 col-6">
              <p className="fw-bold">SiteMap</p>
              <Link
                to="/"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                to="/About"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                to="/Project"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                Project
              </Link>
            </div>
            <div className="col-md-2 col-6">
              <p className="fw-bold">Socials</p>
              <a
                href="https://www.facebook.com/dandy.maulana.5817"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                Facebook
              </a>
              <a
                href="https://github.com/DandyMaulana19"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                Github
              </a>
              <a
                href="https://instagram.com/dandy.may_"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/dandy-maulana"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                LinkedIn
              </a>
              <a
                href="https://t.me/N4tchid"
                className="mb-1 text-black d-block"
                style={{ textDecoration: "none" }}
              >
                Telegram
              </a>
            </div>
          </div>
          <div className="col-md-5 mb-4 p-0 col-5 d-flex justify-content-end">
            <ScrollLink
              to="top"
              smooth={true}
              duration={200}
              className="text-black Top"
              style={{ textDecoration: "none" }}
            >
              Back to top
              <svg
                stroke="#000000"
                fill="#000000"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z" />
              </svg>
            </ScrollLink>
          </div>
          <div className="p-0 col-12 d-flex align-items-center justify-content-between mb-3">
            <Link to="/">
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M98.5 99V100.5H1.5V99C1.5 72.2142 23.2142 50.5 50 50.5C76.7858 50.5 98.5 72.2142 98.5 99Z"
                  fill="black"
                  stroke="black"
                  stroke-width="3"
                />
                <path
                  d="M1.5 3V1.5H98.5V3C98.5 29.7858 76.7858 51.5 50 51.5C23.2142 51.5 1.5 29.7858 1.5 3Z"
                  fill="black"
                  stroke="black"
                  stroke-width="3"
                />
                <mask id="path-3-inside-1_177_19" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.3632 33.9348C43.6719 14.2014 24.9944 0 3 0H0V100H3C24.2441 100 42.3937 86.7511 49.6368 68.0652C56.3281 87.7986 75.0056 102 97 102H100V2H97C75.7559 2 57.6063 15.2489 50.3632 33.9348Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.3632 33.9348C43.6719 14.2014 24.9944 0 3 0H0V100H3C24.2441 100 42.3937 86.7511 49.6368 68.0652C56.3281 87.7986 75.0056 102 97 102H100V2H97C75.7559 2 57.6063 15.2489 50.3632 33.9348Z"
                  fill="white"
                />
                <path
                  d="M50.3632 33.9348L47.5221 34.8982L50.1748 42.7214L53.1604 35.0191L50.3632 33.9348ZM0 0V-3H-3V0H0ZM0 100H-3V103H0V100ZM49.6368 68.0652L52.4779 67.1018L49.8252 59.2786L46.8396 66.9809L49.6368 68.0652ZM100 102V105H103V102H100ZM100 2H103V-1H100V2ZM3 3C23.6701 3 41.2311 16.3452 47.5221 34.8982L53.2043 32.9715C46.1128 12.0576 26.3187 -3 3 -3V3ZM0 3H3V-3H0V3ZM3 100V0H-3V100H3ZM3 97H0V103H3V97ZM46.8396 66.9809C40.0291 84.5507 22.9647 97 3 97V103C25.5234 103 44.7583 88.9514 52.434 69.1495L46.8396 66.9809ZM97 99C76.3299 99 58.7689 85.6548 52.4779 67.1018L46.7957 69.0285C53.8872 89.9424 73.6813 105 97 105V99ZM100 99H97V105H100V99ZM97 2V102H103V2H97ZM97 5H100V-1H97V5ZM53.1604 35.0191C59.9709 17.4493 77.0353 5 97 5V-1C74.4766 -1 55.2417 13.0486 47.566 32.8505L53.1604 35.0191Z"
                  fill="black"
                  mask="url(#path-3-inside-1_177_19)"
                />
              </svg>
            </Link>
            <p>Copyright © dandymay.didimoforus.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
