import { Divider, Typography } from "@mui/material";
import React from "react";
import { MainPaper } from "../styles/mainPaper";
function Details({ recipe, formattedIngredients = "" }) {
  return (
    <MainPaper>
      <Typography variant="h2" gutterBottom>
        {recipe?.title}
      </Typography>

      <img
        src={recipe?.image}
        alt="dessert_img"
        style={{ width: "600px", height: "700px" }}
      />

      <Typography variant="h5" gutterBottom>
        Ingredients
      </Typography>

      {formattedIngredients?.map((line) => (
        <Typography>{line}</Typography>
      ))}

      <Divider variant="middle" style={{ margin: "20px 0 10px 0px" }} />
      
      <Typography variant="h5" gutterBottom>
        Instructions
      </Typography>

      {recipe?.instructions}
      <Divider variant="middle" style={{ margin: "20px 0 10px 0px" }} />
    </MainPaper>
  );
}

export default Details;
