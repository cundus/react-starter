import React from "react";
import Carousel from "../../../components/Carousel";
import { Box } from "@mui/material";

const Dashboard = () => {
   return (
      <Box display={"flex"} gap={2} overflow={"auto"}>
         <Box maxWidth={"50%"} flex={1}>
            <Carousel />
         </Box>
         <Box maxWidth={"50%"} flex={1}>
            <Carousel />
         </Box>
      </Box>
   );
};

export default Dashboard;
