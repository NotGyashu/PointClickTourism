// src/components/PaymentDialogue.js

import React, { useState } from "react";
import axios from "axios";

const PaymentDialogue = ({ cart, onClose }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send payment details to backend
      await axios.post("/api/payment", {
        cart,
        ...paymentDetails,
      });
      alert("Payment successful!");
      onClose();
    } catch (error) {
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white flex gap-3 p-6 rounded-lg shadow-lg w-full h-full overflow-auto">
        <div className="mb-4 w-[50%] overflow-scroll">
          <h2 className="text-2xl font-bold mb-4">Payment</h2>
          <h3 className="text-xl font-semibold mb-2">Tour Details</h3>
          {cart.map((item) => (
            <div key={item.id} className="mb-2">
              <p className="text-gray-700">
                <strong>{item.title}</strong> ({item.packageName})
              </p>
              <p className="text-gray-700">Date: {item.tourDate}</p>
              <p className="text-gray-700">
                Transfer Option: {item.transferOption}
              </p>
              <p className="text-gray-700">Adults: {item.adult}</p>
              <p className="text-gray-700">Children: {item.child}</p>
              <p className="text-gray-700">Infants: {item.infant}</p>
              <p className="text-gray-700">
                Price: {item.price} AED x {item.quantity} ={" "}
                {item.price * item.quantity} AED
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="w-[50%]">
          <label className="block mb-2 text-gray-700">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={paymentDetails.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="First Name"
            required
          />
          <label className="block mb-2 text-gray-700">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={paymentDetails.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="Last Name"
            required
          />
          <label className="block mb-2 text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={paymentDetails.email}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="Email Address"
            required
          />
          <label className="block mb-2 text-gray-700">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={paymentDetails.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="Phone Number"
            required
          />
          <label className="block mb-2 text-gray-700">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="Card Number"
            required
          />
          <label className="block mb-2 text-gray-700">Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="MM/YY"
            required
          />
          <label className="block mb-2 text-gray-700">CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="CVV"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Pay
          </button>
        </form>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded mt-4 hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentDialogue;
