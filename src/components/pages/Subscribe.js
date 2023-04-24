import React from "react";
import { GrYoutube } from "react-icons/gr";
import "../../assets/scss/Subscribe.scss";

function Subscribe() {
  function handleClick() {
    window.open("https://www.youtube.com/@mushvigsh", "_blank");
  }
  return (
    <div className="subscribe">
      <div className="youtube">
        <GrYoutube />
      </div>
      <div className="text-container">
        <p>Don't forget to follow @mushvigsh on Youtube!</p>
        <p>
          Don't forget to subscribe to my youtube account to be instantly
          informed about the latest videos I have prepared!
        </p>
        <button onClick={handleClick}> Subscribe </button>
      </div>
    </div>
  );
}

export default Subscribe;
