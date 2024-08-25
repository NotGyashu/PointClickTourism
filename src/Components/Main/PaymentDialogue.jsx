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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post("/api/payment", {
        cart,
        ...paymentDetails,
      });
      alert("Payment successful!");
      onClose();
    } catch (error) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#f5f3f4] flex gap-3 box-border scrollable p-6 rounded-lg shadow-lg w-full h-full overflow-auto">
        <div className="mb-4 w-[50%] scrollable">
          <h2 className="text-2xl font-bold mb-4">Payment</h2>
          <h3 className="text-xl font-semibold mb-2">Tour Details</h3>
          {cart.map((item) => (
            <div
              key={item.cartId}
              className="bg-[white] grid my-7 mx-4  grid-cols-5 grid-rows-2 border rounded-lg shadow-md p-4"
            >
              <div className="flex col-span-4 row-span-1 gap-1 items-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="">({item.packageName})</p>
              </div>
              <img src="" alt="img1" className="row-span-1 col-span-1 border" />
              <div className="col-span-5 flex flex-wrap gap-x-4 text-sm py-2 gap-y-2">
                <span className="text-gray-700 flex-none border rounded-md px-1">
                  Date: {item.tourDate}
                </span>
                <span className="text-gray-700 flex-none border rounded-md px-1">
                  Transfer Option: {item.transferOption}
                </span>
                <span className="text-gray-700 flex-none border rounded-md px-1">
                  Adults: {item.adult}
                </span>
                <span className="text-gray-700 flex-none border rounded-md px-1">
                  Children: {item.child}
                </span>
                <span className="text-gray-700 flex-none border rounded-md px-1">
                  Infants: {item.infant}
                </span>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[50%] bg-white grid grid-cols-2 p-10 border gap-4 justify-center items-center"
        >
          <div className="">
            <label className=" text-gray-700 text-sm" aria-label="First Name">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={paymentDetails.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded p-1 mb-2 w-full text-sm focus:outline-none"
              placeholder="Jhon"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm"
              aria-label="Last Name"
            >
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={paymentDetails.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded p-1 mb-2 w-full text-sm focus:outline-none"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm" aria-label="Email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={paymentDetails.email}
              onChange={handleChange}
              className="border border-gray-300 rounded p-1 mb-2 w-full text-sm focus:outline-none"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm"
              aria-label="Phone Number"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              name="phone"
              value={paymentDetails.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded p-1 mb-2 w-full text-sm focus:outline-none"
              placeholder="Phone Number"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm"
              aria-label="Card Number"
            >
              Card Number:
            </label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded p-1 mb-2 w-full text-sm focus:outline-none"
              placeholder="Card Number"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm"
              aria-label="Expiry Date"
            >
              Expiry Date:
            </label>
            <input
              type="text"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              className="border border-gray-300 rounded p-1 mb-2 w-full text-sm focus:outline-none"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm" aria-label="CVV">
              CVV:
            </label>
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              className="border border-gray-300 rounded p-1 mb-2 w-full text-sm focus:outline-none"
              placeholder="CVV"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 col-span-2 text-center">{error}</p>
          )}
          <button
            type="submit"
            className={`px-4 py-2 text-white rounded hover:bg-green-600 col-span-2 ${
              loading ? "bg-gray-400" : "bg-green-500"
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        </form>
        <button
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-4 bg-red-500 text-white rounded hover:bg-red-600"
          aria-label="Close Payment Dialogue"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentDialogue;
