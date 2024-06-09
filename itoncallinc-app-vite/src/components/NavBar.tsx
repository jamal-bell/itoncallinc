import React from "react";
import ReactDOM from "react-dom/client";

const NavBar = () => {
  const menuLinks = [
    { label: "home", href: "/" },
    { label: "R&D", href: "/" },
    { label: "Strategy Planning & Execution", href: "/" },
    { label: "Resource Management", href: "/" },
    { label: "Qualified Candidate Managment", href: "/" },
    { label: "Our Company", href: "/" },
  ];

  return (
    <>
      <nav className="space-x-20 border-b mb-5 px-5 h-20 items-center grid grid-cols-3">
        <div className="md:h-20 md:w-40 w-40 h-15 relative"></div>
        <div>Placeholder</div>
        <ul className="flex space-x-6 mr-20">
        {menuLinks.map((link) => {
          return <li><a className="no-underline hover:underline" href={link.href}>{link.label}</a></li>;
        })}
      </ul>
      </nav>

    </>
  );
};

export default NavBar;
