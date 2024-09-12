import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import image1 from "../assets/person1.jpg";
import aiAvatar from "../assets/ElonMusk.png";
import userAvatar from "../assets/SlackLogo.png";

const chatData = [
  {
    type: "ai",
    name: "Perspective AI",
    message:
      "Hey 👋 Mike! What was challenging about the Starlink installation process?",
    sender: "Elon",
    avatar: aiAvatar,
  },
  {
    type: "user",
    name: "Mike",
    message: "The setup was easy, but the alignment was a bit tricky.",
    avatar: userAvatar,
  },
  {
    type: "ai",
    name: "Perspective AI",
    message: "I see! How did you manage to align it?",
    sender: "Elon",
    avatar: aiAvatar,
  },
  {
    type: "user",
    name: "Mike",
    message: "I used the Starlink app to help with the alignment.",
    avatar: userAvatar,
  },
];

// List of words for span content
const words = [
  "People",
  "Customers",
  "Teammates",
  "Audience",
  "Community",
  "Clients",
];

const FirstPage = () => {
  const [visibleChats, setVisibleChats] = useState(2);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChats((prev) => {
        if (prev < chatData.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="first-page">
      <div className="left-section">
        <h1>
          Gather Feedback with AI <br />
          From Your{" "}
          <span className="highlighted transition-span">
            <span key={currentWordIndex}>{words[currentWordIndex]}</span>
          </span>
        </h1>
        <p>
          Conduct quality AI-mediated conversations with customers and teammates
          to get their invaluable input.
        </p>
        <div className="buttons">
          <button className="primary-button">Create an interview</button>
          <button className="secondary-button">Try an interview</button>
        </div>
      </div>
      <div className="right-section">
        <img src={image1} alt="Chat illustration" className="personCoder" />
        <div className="chat-bubbles">
          {chatData.slice(0, visibleChats).map((chat, index) => (
            <div
              key={index}
              className={`chat-message ${chat.type} show`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="chat-avatar">
                <img src={chat.avatar} alt={`${chat.name}'s avatar`} />
              </div>
              <div className="chat-content">
                <p className="chat-name">
                  <strong>{chat.name}</strong>{" "}
                  {chat.sender && `on behalf of ${chat.sender}`}
                </p>
                <p>{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
