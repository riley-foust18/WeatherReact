import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li>
            <a href={`#${category}`} onClick={() => {setCurrentCategory(category)}}>
              {capitalizeFirstLetter(category)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;