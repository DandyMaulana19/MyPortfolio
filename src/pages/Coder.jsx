import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/image/Coder.jpg";

const Coder = () => {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div className="w-100 mb-5 overflow-x-hidden">
        <div className="container-lg px-lg-4">
          <div className="row justify-content-center" id="detail">
            <div className="col-12 postion-relative justify-content-between">
              <h1
                className="ms-0 text-black"
                id="project"
                style={{ fontWeight: 500 }}
              >
                Coder Web
              </h1>
              <p className="text-black " id="desc">
                Coder Web is a UKM Coder Telkom Surabaya website profile.
              </p>
            </div>
            <div className="col-12 gap-4 mb-3 d-flex justify-content-start align-items-center">
              <a
                href="https://github.com/DandyMaulana/CODER-web"
                className="text-black"
                style={{ textDecoration: "none" }}
              >
                Repository
              </a>
              <a
                href="https://coder.didimoforus.com"
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
                This website was created by a team for UKM Coder Telkom
                University Surabaya. The website has several features including:{" "}
                <br />
                &nbsp; - Member attendance <br /> &nbsp; - QR code generator{" "}
                <br /> &nbsp; - Google authentication <br /> &nbsp; - E-learning{" "}
                <br /> &nbsp; - Integrated with UKM Coder mobile application.
              </p>
              <p>
                Tech Stack <br /> Laravel 10, Bootstrap5, MySQL
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coder;
