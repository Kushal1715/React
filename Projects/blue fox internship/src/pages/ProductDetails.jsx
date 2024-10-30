import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchSingleProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleAddtoCart = (name) => {
    const data = JSON.parse(localStorage.getItem("cartData")) ?? []; //null or undefined : nullish collescing operator
    const found = data.find((prod) => prod.id === product.id);
    if (found) {
      found.quantity += 1;

      toast(`${name} x${found.quantity} is added to cart `, {
        position: "top-center",
      });
    } else {
      data.push({ ...product, quantity: 1 });

      toast(`${name} x1 is added to cart`, {
        position: "top-center",
      });
    }
    localStorage.setItem("cartData", JSON.stringify(data));
    setCartItems(data);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <>
      <ToastContainer />

      <div className="container mx-auto p-8 lg:px-[80px]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
          </div>

          {/* Product Information */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
              {product.title}
            </h1>
            <p className="text-xl font-semibold text-cyan-700 my-2">
              ${product.price}
            </p>
            <p className="text-sm font-semibold text-gray-600">
              Availability:{" "}
              <span className="text-green-600">
                {product.availabilityStatus}
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-1">SKU: {product.sku}</p>

            <p className="mt-4 text-gray-700 dark:text-gray-400 text-2xl">
              {product.description}
            </p>

            {/* Rating */}
            <div className="mt-4 flex items-center text-xl">
              <span className="text-yellow-500 font-semibold">
                {product.rating}
              </span>
              <span className="ml-2 text-gray-500">
                ({product.reviews.length} reviews)
              </span>
            </div>

            {/* Tags */}
            <div className="mt-4 text-xl">
              <span className="text-xl font-semibold text-gray-600">Tags:</span>
              <div className="flex gap-2 mt-1">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-6 w-full bg-cyan-700 text-white py-3 rounded-lg text-sm font-semibold hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300"
              onClick={() => handleAddtoCart(product.title)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Product Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-400">
            <div>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>
            </div>
            <div>
              <p>
                <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
                {product.dimensions.height} x {product.dimensions.depth} cm
              </p>
              <p>
                <strong>Weight:</strong> {product.weight} kg
              </p>
              <p>
                <strong>Minimum Order:</strong> {product.minimumOrderQuantity}
              </p>
              <p>
                <strong>Discount:</strong> {product.discountPercentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Customer Reviews
          </h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="mb-6">
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
