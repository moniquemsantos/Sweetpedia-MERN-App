import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Recipe = ({ recipe }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia height="140" />

          <CardContent>
            <Typography
              key={recipe.id}
              gutterBottom
              variant="h5"
              component="div"
            >
              {recipe.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default Recipe;
