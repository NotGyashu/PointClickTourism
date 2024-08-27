import React, { useState } from "react";
import axios from "axios";
import LogoBlack from "../../../public/img/logo/logoBlack.jpeg";
import { XMarkIcon } from "@heroicons/react/24/solid";

const PaymentDialogue = ({ cart, onClose,amount }) => {
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
      // await axios.post("/api/payment", {
      //   cart,
      //   ...paymentDetails,
      // });
      // alert("Payment successful!");
      // onClose();
      console.log(cart,paymentDetails)
    } catch (error) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed flex flex-col gap-3 inset-0 order bg-[#f5f3f4] z-50">
      <div className=" p-4  bg-white col-span-1 ephesis-regular md:text-3xl text-xl font-bold flex  items-center gap-2 ">
        <img
          src={LogoBlack}
          className="md:h-8 md:w-8 h-6 w-6 inline rounded-full"
        />
        Point Click Tourism
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2  gap-3 md:scrollable  box-border p-3 md:p-6 rounded-lg shadow-lg      w-full h-full  overflow-auto">
        <div className="mb-4 col-span-1 md:scrollable">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Payment</h2>
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Tour Details
          </h3>
          {cart.map((item) => (
            <div
              key={item.cartId}
              className="bg-[white] grid my-7 md:mx-4 mx-2  grid-cols-5 grid-rows-2 border rounded-lg shadow-md p-2 md:p-4"
            >
              <div className="flex col-span-4 row-span-1 gap-1 items-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
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
          className="col-span-1 bg-white grid grid-cols-2 md:p-10 p-4 border gap-4 justify-center items-center"
        >
          <div className="col-span-2 text-lg md:text-xl font-semibold ">
            Enter Details:
          </div>
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
            className={`px-4 py-2 text-white items-center rounded hover:bg-yellow-600 col-span-2 ${
              loading ? "bg-gray-400" : "bg-yellow-500"
            }`}
            disabled={loading}
          >
            {loading ? `Processing... ` : `Pay ${amount}.00 AED`}
          </button>
        </form>
        <button
          onClick={onClose}
          className="p-1 absolute top-4 right-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          aria-label="Close Payment Dialogue"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default PaymentDialogue;
