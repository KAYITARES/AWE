import React from "react";
import Navbar from "../components/Navbar";
import "./queries.css";
import "./apply.css";
import graduate from "../assets/img/graduate.JPG";
import sitGraduate from "../assets/img/sitGraduate.JPG";
import cake from "../assets/img/cake.JPG";
import women from "../assets/img/aweStudentBackgroundImg.jpg";
import Footer from "../components/Footer";
const Bugesera = () => {
  return (
    <>
      <Navbar />
      <div className="bugesera-container">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Bugesera Application</h2>
        </div>
        <div className="row">
          <div className="col-1">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Academy Women Entrepreneur Bugesera
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              officiis reprehenderit provident velit distinctio itaque harum.
              Quaerat repudiandae animi quam enim fuga eos, accusamus nobis rem,
              perferendis accusantium distinctio libero.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Academy Women Entrepreneur Bugesera
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              officiis reprehenderit provident velit distinctio itaque harum.
              Quaerat repudiandae animi quam enim.
            </p>
            <a href="#" class="btn-text">
              Apply Now &rarr;
            </a>
          </div>
          <div className="col-2">
            <div className="composition">
              <img
                src={cake}
                alt="graduate img"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={sitGraduate}
                alt="sit graduate student img"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={women}
                alt="cake graduate img"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Bugesera;
