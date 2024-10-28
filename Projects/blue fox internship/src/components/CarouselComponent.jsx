import { Carousel } from "flowbite-react";
import product3 from "/product3.jpg";
import product6 from "/product6.jpg";
import product7 from "/product7.jpg";

export function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96  w-full p-4 sm:max-w-[1000px] md:mx-auto">
      <Carousel>
        <img src={product3} alt="..." />
        <img src={product6} alt="..." />
        <img src={product7} alt="..." />
      </Carousel>
    </div>
  );
}
