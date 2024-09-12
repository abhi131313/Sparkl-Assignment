import React, { useEffect, useRef, useState } from "react";
import "./SecondPage.css";

const SecondPage = () => {
  const paragraphRef = useRef(null);
  const [visibleIndexes, setVisibleIndexes] = useState(new Set());

  useEffect(() => {
    const paragraph = paragraphRef.current;
    const words = Array.from(paragraph.querySelectorAll("span"));

    // Initial animation for rendering words
    words.forEach((word, index) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => new Set(prev).add(index));
      }, index * 60);
    });

    // Scroll handler for animating words on scroll
    const handleScroll = () => {
      words.forEach((word, index) => {
        const rect = word.getBoundingClientRect();
        // Check if the word is within the viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setVisibleIndexes((prev) => new Set(prev).add(index));
        } else if (rect.bottom < 0 || rect.top > window.innerHeight) {
          setVisibleIndexes((prev) => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const longText = `The aim of Sparkl is to provide the best learning experience to the students using best-in-class tech and rockstar teachers. 
    Join Sparkl and unlock your true potential. Because in today's world, continuous learning and growth are keys to success. 
    We believe in creating a supportive and engaging environment that challenges students to think critically, communicate clearly, 
    and work collaboratively. At Sparkl, we strive to nurture the curiosity and drive that students need to pursue their passions 
    and achieve their goals. Our mission is to empower students by providing them with the tools, resources, and guidance necessary 
    to excel academically and personally. We are committed to fostering a culture of innovation, respect, and inclusivity that celebrates 
    diverse perspectives and encourages lifelong learning. Whether you're looking to boost your skills, prepare for exams, or explore 
    new interests, Sparkl is here to support you every step of the way. The world is constantly evolving, and the skills needed to 
    succeed are evolving with it. Sparkl is dedicated to helping you stay ahead of the curve by providing access to cutting-edge 
    educational content and personalized learning experiences. Our platform is designed to adapt to your unique learning style, 
    ensuring that you receive the most effective and efficient education possible. Don't just learn—Sparkl your learning journey 
    with us. Every step you take with Sparkl is a step towards unlocking your true potential and achieving your dreams.`;

  return (
    <div className="second-page">
      <p ref={paragraphRef}>
        {longText.split(" ").map((word, index) => (
          <span
            key={index}
            className={visibleIndexes.has(index) ? "visible" : ""}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default SecondPage;
