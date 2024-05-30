import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Box } from "@mui/material";

const IMAGES = [
   "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
   "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5",
   "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

const Carousel = () => {
   return (
      <Box sx={{ width: "100%", height: "30rem" }}>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
         >
            {IMAGES.map((image, index) => (
               <SwiperSlide key={index} style={{ maxHeight: "30rem" }}>
                  <img
                     src={image}
                     alt=""
                     style={{
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "bottom",
                     }}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </Box>
   );
};

export default Carousel;
