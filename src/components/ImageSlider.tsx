import useSlider from "../hooks/useSlider";
import p1 from "../assets/images/image-product-1.jpg";
import p2 from "../assets/images/image-product-2.jpg";
import p3 from "../assets/images/image-product-3.jpg";
import p4 from "../assets/images/image-product-4.jpg";
import p1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import p2Thumb from "../assets/images/image-product-2-thumbnail.jpg";
import p3Thumb from "../assets/images/image-product-3-thumbnail.jpg";
import p4Thumb from "../assets/images/image-product-4-thumbnail.jpg";

function ImageSlider() {
  const imageUrls = [p1, p2, p3, p4];
  const thumbnailUrls = [p1Thumb, p2Thumb, p3Thumb, p4Thumb];

  const { currentImageIndex, currenImageUrl, next, back, goTo } =
    useSlider(imageUrls);

  return (
    <div>
      <img src={currenImageUrl} width={400} height={400} alt="Product" />
      <button onClick={next}>next</button>
      <button onClick={back}>prev</button>
      {thumbnailUrls.map((thumbUrl, index) => (
        <img
          src={thumbUrl}
          key={index}
          width={80}
          height={80}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => goTo(index)}
          style={{
            cursor: "pointer",
            border: index === currentImageIndex ? "2px solid orange" : "none",
          }}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
