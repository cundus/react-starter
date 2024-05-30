import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
   product: {
      name: string;
      image: string;
      price: number;
      id: number;
   };
}

export default function Product({ product }: Props) {
   return (
      //   <Card
      //      sx={{ maxWidth: 345, ":hover": { boxShadow: "5px 5px 10px #ccc" } }}
      //   >
      //      <CardMedia
      //         sx={{
      //            height: 140,
      //            ":hover": {
      //               transform: "scale(1.1)",
      //               transition: "all 0.5s ease",
      //            },
      //         }}
      //         image={product.image}
      //         title="green iguana"
      //      />
      //      <CardContent>
      //         <Typography gutterBottom variant="h5" component="div">
      //            {product.name}
      //         </Typography>
      //         <Typography variant="body2" color="text.secondary">
      //            {product.price}
      //         </Typography>
      //      </CardContent>
      //      <CardActions>
      //         <Button size="small">Add To Cart</Button>
      //         <Button size="small">Wishlist</Button>
      //      </CardActions>
      //   </Card>
      <div className="product-container">
         <div className="product-image">
            <img src={product.image} alt="" />
         </div>
         <h3>{product.name}</h3>
         <p>{product.price}</p>
      </div>
   );
}
