import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartItems(data);
    calculateTotal(data);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total);
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartData", JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };
  const increaseQuantity = (id) => {
    const updatedCart2 = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart2);
    localStorage.setItem("cartData", JSON.stringify(updatedCart2));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-3">
        {/* Cart Items Column */}
        <div className="w-full lg:w-2/3 px-3 mb-6 lg:mb-0">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">$ {item.price}</p>
                      <div className="flex items-center mt-2">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded mr-2"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        {/* <input
                          type="text"
                          value={item.quantity}
                          className="w-4"
                          onChange={(e) => e.target.value}
                        /> */}
                        {item.quantity}
                        <button
                          className="px-2 py-1 bg-gray-200 rounded ml-2"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold mr-4">
                      $ {item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white hover:text-black-700 bg-red-500 rounded-xl px-4 py-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Total Column */}
        <div className="w-full lg:w-1/3 px-3">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between border-b py-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">$ {total}</p>
            </div>

            <div className="flex justify-between py-2">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">$ {total}</p>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
