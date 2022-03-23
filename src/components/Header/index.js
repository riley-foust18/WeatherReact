import React from "react";
import Nav from "../Nav";

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <header>
      <h1>Weather React</h1>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
    </header>
  )
}

export default Header;