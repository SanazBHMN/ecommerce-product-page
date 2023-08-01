import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MainContent from "./components/MainContent";
import { content } from "./helpers/Content";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  const {
    product: {
      title,
      description,
      price: { original, discounted, discountPercentage },
    },
  } = content;
  return (
    <>
      <Navbar count={count} title={title} discounted={discounted} />
      <Carousel />
      <MainContent
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        title={title}
        description={description}
        original={original}
        discounted={discounted}
        discountPercentage={discountPercentage}
      />
    </>
  );
}

export default App;
