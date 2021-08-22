import React from "react";

function Header({ header, textColor }: { header: string; textColor: string }) {
  return <div className={`text-2xl font-medium ${textColor}`}>{header}</div>;
}

export default Header;
