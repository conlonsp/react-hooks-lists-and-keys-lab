import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const mapLinks = links.map(link => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })
  return (
    <nav>
      {mapLinks}
    </nav>
  )
}

export default NavBar;
