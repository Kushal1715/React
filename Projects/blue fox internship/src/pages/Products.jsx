import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=18&skip=18`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1 className="text-5xl font-semibold text-center pt-10">All Products</h1>
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
    </>
  );
};

export default Products;
