import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Recipe = ({ recipe }) => {
  const handlefavClick = (e) => {
    console.log("Fav Clicked");
  };
  return (
    <Card sx={{ height: "100%" }}>
      <CardActionArea
        onClick={() => (window.location.href = `recipeDetails/${recipe._id}`)}
      >
        <CardMedia
          height="140"
          component="img"
          image={recipe.image}
          alt="dessert"
        />
        <CardContent sx={{ minHeight: 64 }}>
          <Typography key={recipe.id} gutterBottom variant="h5" component="div">
            {recipe.title}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <IconButton aria-label="add to favorites" onClick={handlefavClick}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Recipe;
