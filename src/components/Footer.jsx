import React from "react";
import myLogo from "../assets/images/Original on Transparent.png";

export default function Footer() {
  return (
    <footer className="shadow-lg p-4 rounded">
      <span>&copy; Robin Skladny 2022</span>
      <div style={{ paddingLeft: "7px" }}>
        <a href="https://www.robin-skladny.com" target="blank">
          <img src={myLogo} style={{ width: "45px" }} alt="myLogo" />
        </a>
      </div>
    </footer>
  );
}
