import React, { useState, useEffect } from "react";
import {capitalizeFirstLetter} from './utils/helpers';
import Header from "./components/Header";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import Lookup from "./components/Lookup";


function App() {
  const [categories] = useState(['hourly', 'daily', 'lookup']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <body>
      <Header
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Header>
      <main>
        {currentCategory === 'hourly' && 
          <Hourly></Hourly>
        }
        {currentCategory === 'daily' && 
          <Daily></Daily>
        }
        {currentCategory === 'lookup' && 
          <Lookup></Lookup>
        }
      </main>
    </body>
  );
}

export default App;
