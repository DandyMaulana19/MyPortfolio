import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/image/Portfolio.jpg";

const Portfolio = () => {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div className="w-100 overflow-x-hidden mb-5">
        <div className="container-lg px-lg-4">
          <div className="row justify-content-center" id="detail">
            <div className="col-12 postion-relative justify-content-between">
              <h1
                className="ms-0 text-black"
                id="project"
                style={{ fontWeight: 500 }}
              >
                My Website
              </h1>
              <p className="text-black " id="desc">
                Didimo is a health checking website.
              </p>
            </div>
            <div className="col-12 gap-4 mb-3 d-flex justify-content-start align-items-center">
              <a
                href="https://github.com/DandyMaulana/MyPortfolio"
                className="text-black"
                style={{ textDecoration: "none" }}
              >
                Repository
              </a>
              <a
                href="https://dandymay.didimoforus.com"
                className="text-black"
                style={{ textDecoration: "none" }}
              >
                Visit
              </a>
            </div>
            <div className="mb-4 col-12 d-flex justify-content-center align-items-center overflow-hidden">
              <img src={Image} className="" alt="" />
            </div>
            <div className="col-12">
              <p className="mb-4">
                This SPA website i created with the intention of serving as both
                a showcase and a portfolio. I hosted this website on niagahoster
                and purchased a domain (didimoforus.com) to make a more
                professional impression.
              </p>
              <p>
                Tech Stack <br /> React.JS, Bootstrap5
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
