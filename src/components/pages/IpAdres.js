import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/scss/IpAdres.scss";
import Subscribe from "./Subscribe.js";

function IpAdres() {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://shukurovmushvig.pythonanywhere.com/");
    console.log(res.data);
    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ipAdres-container">
      <div className="ipAdres">
        <h2>Your IP Address is</h2>
        <h4>
          {ip ? (
            ip
          ) : (
            <i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
          )}
        </h4>
      </div>
      <div>
        <Subscribe />
      </div>
    </div>
  );
}

export default IpAdres;
