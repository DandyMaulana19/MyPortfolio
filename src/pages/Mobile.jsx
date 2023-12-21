import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/image/Mobile.jpg";

const Portfolio = () => {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div className="w-100 mb-5">
        <div className="container-lg px-lg-4">
          <div className="row justify-content-center" id="detail">
            <div className="col-12 postion-relative justify-content-between">
              <h1
                className="ms-0 text-black"
                id="project"
                style={{ fontWeight: 500 }}
              >
                Sikeang
              </h1>
              <p className="text-black " id="desc">
                Sikeang is a UKM Coder Telkom University Surabaya mobile apps.
              </p>
            </div>
            <div className="col-12 mb-3 d-flex justify-content-start align-items-center">
              <a
                href="https://github.com/DandyMaulana/sikeang-coder-android"
                className="text-black"
                style={{ textDecoration: "none" }}
              >
                Repository
              </a>
            </div>
            <div className="mb-4 col-12 d-flex justify-content-center align-items-center overflow-hidden">
              <img src={Image} className="" alt="" />
            </div>
            <div className="col-12">
              <p className="mb-4">
                This application was created by UKM Coder Mobile Development
                division team at Telkom University Surabaya. The application is
                integrated with the UKM Coder website.
              </p>
              <p>
                Tech Stack <br /> React Native, Express.Js, MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
