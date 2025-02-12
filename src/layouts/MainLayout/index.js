import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "components";

import "./style.scss";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>{children}</div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p className="credits">
            Made with <i className="fas fa-heart"></i> By{" "}
            <strong>WorkPack Labs</strong>, Follow Us on:{" "}
            <span className="social-media">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
