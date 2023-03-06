import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Recipe = ({ recipe }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          height="140"
          component="img"
          image={recipe.image}
          alt="dessert"
        />
        <a href={`recipeDetails/${recipe._id}`}>Test</a>

        <CardContent>
          <Typography key={recipe.id} gutterBottom variant="h5" component="div">
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
            arcu. Nullam volutpat consectetur lacus quis semper.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Recipe;
