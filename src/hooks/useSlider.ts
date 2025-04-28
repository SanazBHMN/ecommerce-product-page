import { useState } from "react";

const useSlider = (imageUrls: string[]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   move forward
  const next = () => {
    setCurrentImageIndex((i) => (i >= imageUrls.length - 1 ? i : i + 1));
  };

  //   move backward
  const back = () => {
    setCurrentImageIndex((i) => (i <= 0 ? i : i - 1));
  };

  //   go to a specific Image
  const goTo = (index: number) => {
    if (index >= 0 && index < imageUrls.length) {
      setCurrentImageIndex(index);
    }
  };

  return {
    currentImageIndex,
    currenImageUrl: imageUrls[currentImageIndex],
    next,
    back,
    goTo,
  };
};

export default useSlider;
