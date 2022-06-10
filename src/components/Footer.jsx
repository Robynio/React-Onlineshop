import React from "react";
import myLogo from "../assets/images/Original on Transparent.png";

export default function Footer() {
  return (
    <footer className="shadow-lg p-4 rounded">
      <span dangerouslySetInnerHTML={{ __html: "&copy; 2022 Robin Skladny" }} />
      <div style={{ paddingLeft: "7px" }}>
        <img src={myLogo} style={{ width: "45px" }} alt="myLogo" />
      </div>
    </footer>
  );
}
