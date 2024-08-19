import React, { useState } from "react";
import useCartStore from "../../Utlis/USeCart";

const CartMain = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const updateCart = useCartStore((state) => state.updateCart);
  const total = useCartStore((state) => state.total);

  const [editableItemId, setEditableItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  const handleEditClick = (item) => {
    setEditableItemId(item.id);
    setEditedItem({ ...item });
  };

  const handleSaveClick = () => {
    updateCart(editedItem);
    setEditableItemId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (itemId, change) => {
    const newQuantity = Math.max(1, change);
    updateQuantity(itemId, newQuantity);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className=" rounded flex-grow px-14 py-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-[white] rounded-lg shadow-md p-4">
              <div className="flex gap-1 items-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className=" mb-2">({item.packageName})</p>
              </div>
              <div className="">
                <div className=" font-medium text-gray-500"> Details:</div>
                {editableItemId === item.id ? (
                  <>
                    <label className="text-gray-700">Date: </label>
                    <input
                      type="date"
                      name="tourDate"
                      value={editedItem.tourDate}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1 mb-2"
                    />
                    <label className="text-gray-700">Transfer Option: </label>
                    <input
                      type="text"
                      name="transferOption"
                      value={editedItem.transferOption}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1 mb-2"
                    />
                    <label className="text-gray-700">Adults: </label>
                    <input
                      type="number"
                      name="adult"
                      value={editedItem.adult}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1 mb-2"
                    />
                    <label className="text-gray-700">Children: </label>
                    <input
                      type="number"
                      name="child"
                      value={editedItem.child}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1 mb-2"
                    />
                    <label className="text-gray-700">Infants: </label>
                    <input
                      type="number"
                      name="infant"
                      value={editedItem.infant}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1 mb-2"
                    />
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded mt-2"
                      onClick={handleSaveClick}
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-700">Date: {item.tourDate}</p>
                    <p className="text-gray-700">
                      Transfer Option: {item.transferOption}
                    </p>
                    <p className="text-gray-700">Adults: {item.adult}</p>
                    <p className="text-gray-700">Children: {item.child}</p>
                    <p className="text-gray-700">Infants: {item.infant}</p>
                    <button
                      className="px-3 py-1 bg-yellow-500 text-white rounded mt-2"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2 mt-4">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-bold mt-2">
                  Price: {item.price} AED x {item.quantity} ={" "}
                  {item.price * item.quantity} AED
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3 className="text-2xl font-bold mt-4">Total: {total()} AED</h3>
      <button
        className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartMain;
