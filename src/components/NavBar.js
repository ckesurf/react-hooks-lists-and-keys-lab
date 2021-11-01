import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const displayNavLinks = links.map(link => {
    return <a key={link} href={"#" + link}>{link}</a>
  });

  return (
    <nav>{displayNavLinks}</nav>
  )
}

export default NavBar;
