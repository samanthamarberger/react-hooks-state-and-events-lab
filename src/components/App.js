import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [colorMode, setColorMode] = useState(false);

  function changeColor() {
    setColorMode(colorMode => !colorMode)
    //console.log(colorMode);
  }
  const appClass = !colorMode ? "App light" : "App dark"
  //console.log(appClass);

  return (
  <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {changeColor}>{colorMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
  }

export default App;
