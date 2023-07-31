import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import "./Carousel.css";
import next from "/images/icon-next.svg";
import previous from "/images/icon-previous.svg";
import { images } from "../helpers/CarouselData";

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currentImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currentImg > 0 && setCurrentImg(currentImg - 1);
          }}
        >
          <Box
            sx={{
              width: 35,
              height: 35,
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              marginLeft: 2,
            }}
          >
            <IconButton size="small">
              <img src={previous} />
            </IconButton>
          </Box>
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
            currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
          }}
        >
          <Box
            sx={{
              width: 35,
              height: 35,
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              marginRight: 2,
            }}
          >
            <IconButton>
              <img src={next} />
            </IconButton>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
