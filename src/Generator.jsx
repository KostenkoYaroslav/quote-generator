import React from "react";
import "./generator.css";
import { IoVolumeLowSharp } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { TiSocialTwitter } from "react-icons/ti";

export default function Generator() {
  return (
    <main>
      <div className="container">
        <h1>Quote of the day</h1>
        <span>""</span>
        <span className="author">--- </span>
        <hr />
        <footer>
          <div>
            <IoVolumeLowSharp size={40} color="#0000fe" className="icon" />
            <TbCopy size={40} color="#0000fe" className="icon" />
            <TiSocialTwitter size={40} color="#0000fe" className="icon" />
          </div>
          <button>New Quote</button>
        </footer>
      </div>
    </main>
  );
}
