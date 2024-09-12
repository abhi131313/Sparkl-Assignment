import React, { useState } from "react";
import "./ThirdPage.css";
import teacher from "../assets/teacher.jpg";
import students from "../assets/students.jpg";
import foods from "../assets/foods.png";

const ThirdPage = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => (prev === 1 ? 0 : 1)); // Toggle between states
  };

  return (
    <div className="third-page" onClick={handleClick}>
      <div
        className={`video-container ${clickCount === 1 ? "second-click" : ""}`}
      >
        <div
          className={`teacher-video ${clickCount === 0 ? "fade-in" : ""} ${
            clickCount === 1 ? "small-top-right" : ""
          }`}
        >
          <img src={teacher} alt="Teacher" />
        </div>

        <div
          className={`students ${clickCount === 0 ? "fade-in" : ""} ${
            clickCount === 1 ? "small-bottom" : ""
          }`}
        >
          {[...Array(4)].map((_, i) => (
            <div className="student-video" key={i}>
              <img src={students} alt={`Student ${i + 1}`} />
            </div>
          ))}
        </div>

        {clickCount >= 1 && (
          <div className={`foods-video ${clickCount === 1 ? "fade-in" : ""}`}>
            <img src={foods} alt="Foods" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdPage;
