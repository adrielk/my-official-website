import React from "react";
import WideContentFrame from "../components/WideContentFrame";

function Footer() {
  return (
    <WideContentFrame extraStyle="bg-dark px-2">
      <footer className="font-light text-white py-1">
        <small>
          Copyright &copy; {new Date().getFullYear()} Adriel Kim. All Rights
          Reserved
        </small>
      </footer>
    </WideContentFrame>
  );
}

export default Footer;
