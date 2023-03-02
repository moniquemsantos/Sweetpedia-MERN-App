import React from "react";
import { Link } from "react-router-dom";

export default function ProfileNavegation() {
  const linkStyle = {
    margin: "8px",
  };
  return (
    <div>
      <Link to="/myaccount" style={linkStyle}>
        My Account
      </Link>
      <Link to="/myrecipes" style={linkStyle}>
        My Recipes
      </Link>
      <Link to="/addRecipe" style={linkStyle}>
        Add Recipe
      </Link>
    </div>
  );
}
