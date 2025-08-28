import React from "react";
import Navbar from "./Navbar";

function Header() {

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-transparent text-primary font-light">
      <Navbar />
    </header>
  );
}

export default Header;
