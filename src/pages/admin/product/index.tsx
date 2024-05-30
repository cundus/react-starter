import React from "react";
import Product from "../../../components/Product";
import { Box } from "@mui/material";

const PRODUCT_ITEM = [
   {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      price: 10000,
      id: 1,
   },
   {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      price: 10000,
      id: 12,
   },
   {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      price: 10000,
      id: 13,
   },
   {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      price: 10000,
      id: 14,
   },
   {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      price: 10000,
      id: 15,
   },
];

const ProductList = () => {
   return (
      <Box display={"flex"} gap={2} flexWrap={"wrap"}>
         {PRODUCT_ITEM.map((item) => (
            <Product key={item.id} product={item} />
         ))}
      </Box>
   );
};

export default ProductList;
