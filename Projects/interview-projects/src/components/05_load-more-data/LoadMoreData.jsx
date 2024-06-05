import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      data &&
        data.products &&
        data.products.length &&
        setProducts(() => [...products, ...data.products]);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    products.length === 100 && setDisableButton(true);
  }, [products]);

  loading && <div>Loading! please wait</div>;
  return (
    <div className="containerBox">
      <div className="productContainer">
        {products && products.length
          ? products.map((product) => (
              <div className="products" key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="productImage"
                />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={disableButton}
        className="loadMore"
        onClick={() => setCount(count + 1)}
      >
        Load More
      </button>
    </div>
  );
}
