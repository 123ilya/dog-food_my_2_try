import React from "react";
import { Card as CardMUI } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Card = ({ itemFood }) => {
  return (
    <CardMUI sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={itemFood.picture} alt={itemFood.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemFood.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {itemFood.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" size="small">
          В корзину
        </Button>
      </CardActions>
    </CardMUI>
  );
};
