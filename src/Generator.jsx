import React, { useState } from "react";
import "./generator.css";
import { IoVolumeLowSharp } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { TiSocialTwitter } from "react-icons/ti";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";

export default function Generator() {
  const { speak } = useSpeechSynthesis();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function copyQuote() {
    navigator.clipboard.writeText(quote);
    alert("Copied the text: " + quote);
  }
  return (
    <main>
      <div className="container">
        <h1>Quote of the day</h1>
        <span>"{quote}"</span>
        <span className="author">--- {author}</span>
        <hr />
        <footer>
          <div>
            <IoVolumeLowSharp
              onClick={() => speak({ text: quote })}
              size={40}
              color="#0000fe"
              className="icon"
            />
            <TbCopy
              onClick={copyQuote}
              size={40}
              color="#0000fe"
              className="icon"
            />
            <a href="https://twitter.com" target="blank">
              <TiSocialTwitter size={40} color="#0000fe" className="icon" />
            </a>
          </div>
          <button onClick={getQuote}>New Quote</button>
        </footer>
      </div>
    </main>
  );
}
