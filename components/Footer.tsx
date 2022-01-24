import React from "react";
import WideContentFrame from "../components/WideContentFrame";

function Footer() {
  return (
    <WideContentFrame extraStyle="px-2 mt-5">
      <footer className="font-light py-1">
        <small>
          Copyright &copy; {new Date().getFullYear()} Adriel Kim. All Rights
          Reserved
        </small>
      </footer>
    </WideContentFrame>
  );
}

export default Footer;
