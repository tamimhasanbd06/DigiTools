import React, { useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCardSection = ({
  products,
  cartItems,
  addToCart,
  removeFromCart,
  setCartItems,
}) => {
  const [selectedBtn, setSelectedBtn] = useState("Products");

  // Check if in cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Total Price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Checkout
  const handleCheckout = () => {
    if (setCartItems) {
      setCartItems([]);
      toast.success("Checkout Successful 🛒");
    } else {
      console.error("setCartItems is not passed!");
    }
  };

  // Add to Cart with Toast
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`Bought: ${product.name}`);
  };

  // Remove with Toast
  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.error(`Removed: ${name}`);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Premium Digital Tools
          </h2>

          <p className="mt-4 mb-6 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          {/* Toggle Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5">

            <button
              onClick={() => setSelectedBtn("Products")}
              className={`${
                selectedBtn === "Products"
                  ? " cursor-pointer bg-[#4f39f6] text-white shadow-md scale-105"
                  : " cursor-pointer border border-gray-300 hover:bg-gray-100"
              } px-5 py-2.5 rounded-full transition-all duration-200`}
            >
              Products
            </button>

            <button
              onClick={() => {
                setSelectedBtn("Cart");
                toast.info("Opened Cart 🛒");
              }}
              className={`${
                selectedBtn === "Cart"
                  ? "cursor-pointer bg-[#4f39f6] text-white shadow-md scale-105"
                  : "cursor-pointer border border-gray-300 hover:bg-gray-100"
              } px-5 py-2.5 rounded-full transition-all duration-200`}
            >
              Cart ({cartItems.length})
            </button>

          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        {selectedBtn === "Products" && (
          <div className="grid gap-6 grid-cols-1 min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3">

            {products.map((product) => (
              <div
                key={product.id}
                className="p-5 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="mb-5 w-14 h-14 md:w-16 md:h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-3xl md:text-4xl">
                  {product.icon}
                </div>

                <h2 className="text-lg md:text-[26px] font-bold mb-2">
                  {product.name}
                </h2>

                <p className="text-gray-600 text-sm mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <span className="text-2xl md:text-4xl font-bold">
                    ${product.price}
                  </span>
                  <span className="text-gray-500 ml-1">
                    /{product.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <span className="text-emerald-500"> <IoCheckmarkDone className="font-bold text-black text-xl" /></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {isInCart(product.id) ? (
                  <button
                    onClick={() =>
                      handleRemove(product.id, product.name)
                    }
                    className="w-full cursor-pointer bg-red-500 text-white py-3 rounded-2xl flex justify-center items-center gap-2 font-bold"
                  >
                  <IoCheckmarkDone className="text-xl" />  Added to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full cursor-pointer bg-[#8B2CFF] text-white font-bold py-3 rounded-2xl"
                  >
                    Buy Now
                  </button>
                )}

              </div>
            ))}

          </div>
        )}

        {/* ================= CART ================= */}
        {selectedBtn === "Cart" && (
          <div className="max-w-9xl mx-auto bg-gray-50 p-6 rounded-2xl">

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Your Cart
            </h2>

            {cartItems.length === 0 ? (
              <div className="text-center font-bold py-10">
                Your cart is empty 🛒
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-white p-4 rounded-xl mb-4"
                  >
                    <div className="flex gap-3 items-center">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-gray-600 font-bold">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        handleRemove(item.id, item.name)
                      }
                      className="text-red-500 font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Footer */}
                <div className="mt-8 border-t pt-6">
                  <div className="flex justify-between mb-4">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 rounded-full cursor-pointer"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </>
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductCardSection;