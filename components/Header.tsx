import React from "react";

function Header({ header, textColor }: { header: string; textColor: string }) {
  return (
    <div
      className={`text-3xl font-medium px-2 pt-0 sm:pt-7 border-b ${textColor}`}
    >
      {header}
    </div>
  );
}

export default Header;
