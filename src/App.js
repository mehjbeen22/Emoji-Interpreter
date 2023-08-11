import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "😀": "Grinning Face",
    "🥰": "Smiling Face with Hearts",
    "😉": " Winking Face",
    "😛": "Face with Tongue",
    "😮‍": "Face Exhaling",
    "😕": "Confused Face",
    "😳": "Flushed Face",
    "😠": "Angry Face",
    "💋": "Kiss Mark",
    "😞": "Disappointed Face",
    "😢": " Crying Face",
    "🤩": "Star-Struck",
    "❤️": "Love",
    "😘": "Kissing Face",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "😏": "Smirking Face",
    "😴": "Sleeping Face"
  };

  const emojiInputHandler = (e) => {
    const userInput = e.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry it's Not there 😟";
    }
    setMeaning(meaning);
  };

  const emojiWeKnowArray = Object.keys(emojiDictionary);
  const emojiKnownHandler = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="MainCase">
      <div className="EmojiCase">
        <h1> Emoticon Interpreter</h1>
        <input
          className="inputBox"
          placeholder="Put an emoji here to know the meaning"
          onChange={emojiInputHandler}
        />

        <div
          style={{
            fontSize: "2rem",
            width: "60%",
            height: "8rem",
            textAlign: "center"
          }}
        >
          👇 Meaning Of Emoji is 👇: <br />
          <span
            style={{
              color: "#ef4444",
              margin: "10px"
            }}
          >
            {" "}
            {meaning}
          </span>{" "}
        </div>

        <div className="emojiShowBox">
          {emojiWeKnowArray.map((emoji) => {
            return (
              <span
                className="emojiIcons"
                key={emoji}
                onClick={() => emojiKnownHandler(emoji)}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
