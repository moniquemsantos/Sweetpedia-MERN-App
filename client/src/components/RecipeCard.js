import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
    </Card>
  );
};
export default Recipe;
