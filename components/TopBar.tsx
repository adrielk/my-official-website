import React from "react";

function NavBar({
  children,
  socials,
}: {
  children: JSX.Element;
  socials: JSX.Element;
}) {
  return (
    <div className="flex items-end py-2.5">
      <div className="text-dark w-full flex justify-left items-end gap-10 flex-grow">
        {children}
      </div>
      <div className="mx-5">{socials}</div>
    </div>
  );
}

export default NavBar;
