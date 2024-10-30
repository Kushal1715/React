import React, { useEffect, useState } from "react";
import { CarouselComponent } from "../components/CarouselComponent";
import { ProductCard } from "../components/ProductCard";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products?limit=8`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="h-full md:px-[80px] bg-gray-400 pt-10 pb-10">
        <CarouselComponent />
        <div className="max-w-screen-md mx-auto p-4 mt-8 text-teal-900 text-center pb-4">
          <h1 className="font-bold text-4xl mb-4 w-full">
            From Basics to Bold – Shop It All Here
          </h1>
          <p className="font-semibold text-2xl">
            Shop the latest arrivals and elevate your style with our exclusive
            selection of beauties, electronics and more
          </p>
        </div>
      </div>
      <h1 className="text-5xl font-semibold text-center pt-10">
        Popular Products
      </h1>
      <div className="lg:px-[80px] pt-10 flex gap-8 flex-wrap justify-center items-center pb-10 md:pb-0 px-4">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.thumbnail}
              rating={product.rating}
            />
          ))}
      </div>
      <Button
        color="success"
        className="mx-auto mt-10 mb-10 bg-blue-500"
        onClick={() => navigate("/products")}
      >
        View all products
      </Button>
    </>
  );
};

export default Home;
