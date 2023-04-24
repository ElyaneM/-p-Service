import React from "react";
import Logo from "../../assets/img/logo2.webp";
import "../../assets/scss/Header.scss";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiUdemy } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/documention");
  };
  const home = () => {
    navigate("/");
  };

  function instagram() {
    window.open("https://www.instagram.com/mushvigsh/", "_blank");
  }

  function linkedin() {
    window.open("https://www.linkedin.com/in/mushvigsh/", "_blank");
  }

  function youtube() {
    window.open("https://www.youtube.com/@mushvigsh", "_blank");
  }

  function github() {
    window.open("https://github.com/MushvigShukurov", "_blank");
  }

  function udemy() {
    window.open("https://www.udemy.com/user/mushvigshukurov/", "_blank");
  }

  return (
    <div className="header ">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" onClick={home} />
          </div>
        </div>
        <div className="rigth">
          <div className="link">
            <p onClick={handleClick}>About me</p>
          </div>
          <div className="icon-container">
            <a href="" onClick={instagram}>
              <BsInstagram className="icon" />
            </a>
            <a href="" onClick={linkedin}>
              <FaLinkedinIn className="icon" />
            </a>
            <a href="" onClick={youtube}>
              <GrYoutube className="icon" />
            </a>
            <a href="" onClick={github}>
              <BsGithub className="icon" />
            </a>
            <a href="" onClick={udemy}>
              <SiUdemy className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
