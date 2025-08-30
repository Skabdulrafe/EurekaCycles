
import React, { useEffect, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Update item quantity
  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item._id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate subtotal safely
  const subtotal = cart.reduce((acc, item) => {
    const price = item?.price?.offer || 0; // fallback if missing
    const qty = item?.quantity || 1;
    return acc + price * qty;
  }, 0);

  const deliveryCharge = subtotal < 500 && subtotal > 0 ? 30 : 0;
  const totalAmount = subtotal + deliveryCharge;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center p-4 mb-4 shadow-md border rounded-lg"
            >
              <img
                src={item.images?.[0] || "/placeholder.png"}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-lg font-bold">
                  ₹{item?.price?.offer?.toFixed(2) || 0}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-300 px-2"
                    onClick={() => updateQuantity(item._id, -1)}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2 text-lg">{item.quantity || 1}</span>
                  <button
                    className="bg-gray-300 px-2"
                    onClick={() => updateQuantity(item._id, 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button
                className="bg-red-500 text-white p-2"
                onClick={() => removeItem(item._id)}
              >
                <X size={20} />
              </button>
            </div>
          ))}
          <div className="mt-4 p-4 border-t">
            <p className="text-lg">Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p className="text-lg">Delivery Charge: ₹{deliveryCharge}</p>
            <p className="text-xl font-bold">
              Total Amount: ₹{totalAmount.toFixed(2)}
            </p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
              onClick={() => navigate("/checkout", {
          state: { cart, subtotal, totalAmount },
        })}
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
