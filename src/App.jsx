import React from "react";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [myRecipes, setMyRecipes] = useState(null)

  if(!myRecipes)
    return (
      <>
        <div>
          <h2>My Recipes</h2>
          <button>Add Recipe</button>
          <p>There are no recipes to list</p>
        </div>
      </>
    );
}

export default App;
