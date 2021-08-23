import React from "react";

function Header({ header, textColor }: { header: string; textColor: string }) {
  return (
    <div className={`text-3xl font-medium pt-7 border-b ${textColor}`}>
      {header}
    </div>
  );
}

export default Header;
