// import components
import LightBox from "./LightBox";
import ThumbnailList from "./ThumbnailList";
import SliderControls from "./SliderControls";
// imports from MUI
import Stack from "@mui/material/Stack";
// hooks
import useSlider from "../../hooks/useSlider";
// import assets
import p1 from "../../assets/images/image-product-1.jpg";
import p2 from "../../assets/images/image-product-2.jpg";
import p3 from "../../assets/images/image-product-3.jpg";
import p4 from "../../assets/images/image-product-4.jpg";
import p1Thumb from "../../assets/images/image-product-1-thumbnail.jpg";
import p2Thumb from "../../assets/images/image-product-2-thumbnail.jpg";
import p3Thumb from "../../assets/images/image-product-3-thumbnail.jpg";
import p4Thumb from "../../assets/images/image-product-4-thumbnail.jpg";
import useScreen from "../../hooks/useScreen";

function ImageSlider() {
  const sliderImages = [p1, p2, p3, p4];
  const thumbnailUrls = [p1Thumb, p2Thumb, p3Thumb, p4Thumb];
  const isMobile = useScreen();

  const {
    currentImageIndex,
    currentImageUrl,
    isFirstImage,
    isLastImage,
    next,
    back,
    goTo,
  } = useSlider(sliderImages);

  return (
    <Stack sx={{ width: !isMobile ? "400px" : "100%" }}>
      <LightBox
        image={sliderImages[currentImageIndex]}
        onNext={next}
        onBack={back}
        isFirst={isFirstImage}
        isLast={isLastImage}
        onSmallScreen={isMobile}
      />
      {/* <SliderControls onNext={next} onBack={back} /> */}
      {/* only on desktop and modal */}
      {!isMobile && (
        <ThumbnailList
          thumbnails={thumbnailUrls}
          currentIndex={currentImageIndex}
          onThumbnailClick={goTo}
        />
      )}
    </Stack>
  );
}

export default ImageSlider;
