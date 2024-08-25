import React, { useState } from "react";
import useCartStore from "../../Utlis/USeCart";
import PaymentDialogue from "./PaymentDialogue";
import CartCard from "../Sub/CartCard";

const CartMain = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [showPaymentDialogue, setShowPaymentDialogue] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  // Calculate total based on selected items
  const calculateTotal = () => {
    return cart
      .filter((item) => selectedItems[item.cartId]) // Filter selected items
      .reduce((total, item) => {
        const price = Number(item.totalAmount) || 0;
       
        return total + price ;
      }, 0);
  };

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleCheckout = () => {
    const itemsToPay = cart.filter((item) => selectedItems[item.cartId]);
    if (itemsToPay.length === 0) {
      alert("Select at least one item");
    } else {
      setShowPaymentDialogue(true);
    }
  };

  const handleCloseDialogue = () => {
    setShowPaymentDialogue(false);
  };

  const handleEdit = (itemId) => {
    console.log("Edit item with ID:", itemId);
  };

  return (
    <div className="rounded flex-grow px-14 py-6 shadow-md scrollable">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 border">
          {cart.map((item) => (
            <CartCard
              key={item.cartId}
              item={item}
              onRemove={removeFromCart}
              onEdit={handleEdit}
              isSelected={!!selectedItems[item.cartId]}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      )}
      <h3 className="text-2xl font-bold mt-4">Total: {calculateTotal()} AED</h3>
      <button
        className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>

      {showPaymentDialogue && (
        <PaymentDialogue
          cart={cart.filter((item) => selectedItems[item.cartId])}
          onClose={handleCloseDialogue}
        />
      )}
    </div>
  );
};

export default CartMain;
