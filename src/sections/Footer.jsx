import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="#">Terms and Conditions</a>
        </div>
        <div className="socials">
          {socialImgs.map((img, index) => (
            <a key={index} className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} alt="icon" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Carlito Pedida | Node{" "}
            <span className="text-[#d07ffc]"> ① </span> Creative, LLC | All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
