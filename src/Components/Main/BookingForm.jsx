import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCartStore from "../../Utlis/USeCart";

const BookingForm = ({ tour }) => {
  const [selections, setSelections] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate(); //

  // Validate form whenever selections change
  useEffect(() => {
    setIsFormValid(
      Object.values(selections).some((selection) => selection.packageName)
    );
    
  }, [selections]);

 const handleChange = (tourId, field, value) => {
   setSelections((prevSelections) => {
     // Create a deep copy of the previous selections
     const updatedSelections = {
       ...prevSelections,
       [tourId]: {
         ...prevSelections[tourId],
         [field]: value,
       },
     };

     // Set default values if packageName is selected
     if (field === "packageName" && value) {
       updatedSelections[tourId] = {
         ...updatedSelections[tourId],
         packageName: value,
         transferOption: updatedSelections[tourId]?.transferOption || "option1",
         tourDate:
           updatedSelections[tourId]?.tourDate ||
           new Date().toISOString().split("T")[0],
         adult: updatedSelections[tourId]?.adult || "1",
         child: updatedSelections[tourId]?.child || "0",
         infant: updatedSelections[tourId]?.infant || "0",
       };
     }

     // Immediately calculate and set the total amount
     const totalAmount = calculateTotalAmount(tourId, updatedSelections);
     updatedSelections[tourId].totalAmount = totalAmount;

     console.log("Updated Selections:", updatedSelections);
     return updatedSelections;
   });
 };

 // Adjust calculateTotalAmount to accept selections as a parameter
 const calculateTotalAmount = (tourId, updatedSelections) => {
   // Use the passed-in updatedSelections
   const selection = updatedSelections[tourId] || {};
   const { adult = 1, child = 0, infant = 0, transferOption = "" } = selection;

   const transferOptions = tour?.transferOptions || [];
   const transferCharge =
     transferOptions.find((option) => option.option === transferOption)
       ?.charge || 0;

   const basePrice = tour?.basePrice || { adult: 0, child: 0, infant: 0 };
   const totalAmount =
     basePrice.adult * parseInt(adult) +
     basePrice.child * parseInt(child) +
     basePrice.infant * parseInt(infant) +
     transferCharge;

   return Number(totalAmount) || 0;
 };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert the selections object to an array of objects for cart
      const cartItems = Object.entries(selections).map(([id, selection]) => ({
        ...selection,
        title: tour.name,
        image: tour.images[0],
      }));

      console.log(cartItems);
      addToCart(cartItems);
      navigate("/cart");
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  if (!tour) return <div>Loading...</div>;
  
  return (
    <div className="border sm:p-3 md:p-5  p-1 shadow-md bg-white ">
      <h2 className="text-xl font-bold mb-4">{tour.name} Prices & Offers</h2>
      <form onSubmit={handleSubmit}>
        <Table selections={selections} onSelectionChange={handleChange} tour = {tour}/>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`mt-4 px-4 py-2 rounded  ${
            isFormValid
              ? "bg-yellow-600 hover:bg-yellow-500 text-white"
              : "bg-[#faf3e1] cursor-not-allowed text-black"
          }`}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
};

const Table = ({ selections, onSelectionChange,tour }) => {
 

  return (
    <div className="overflow-x-auto border border-yellow-200 rounded">
      <table className="min-w-full divide-y divide-yellow-200">
        <thead className="bg-[#faf3e1]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Tour Option
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Transfer Option
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Tour Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Adult
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Child
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Infant
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-yellow-200">
          {tour.packagetype.map((tour) => (
            <tr key={tour.id} className="">
              <td className="px-6 mt-1 py-4 flex gap-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="form-checkbox mt-1"
                  checked={!!selections[tour.id]?.packageName}
                  onChange={(e) =>
                    onSelectionChange(
                      tour.id,
                      "packageName",
                      e.target.checked ? tour.name : ""
                    )
                  }
                />
                <span>{tour.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  className="form-select mt-1 block w-full border  rounded-lg p-1 focus:outline-none"
                  value={selections[tour.id]?.transferOption || ""}
                  onChange={(e) =>
                    onSelectionChange(tour.id, "transferOption", e.target.value)
                  }
                >
                  {tour.transferOptions.map((optionObj, index) => (
                    <option key={index} value={optionObj.option}>
                      {optionObj.option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <DatePicker
                  selected={
                    selections[tour.id]?.tourDate
                      ? new Date(selections[tour.id].tourDate)
                      : new Date()
                  }
                  onChange={(date) =>
                    onSelectionChange(
                      tour.id,
                      "tourDate",
                      date.toISOString().split("T")[0]
                    )
                  }
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  className="form-select mt-1 block w-full border rounded-lg p-1 focus:outline-none"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  className="form-select mt-1 block w-full border rounded-lg p-1 focus:outline-none"
                  value={selections[tour.id]?.adult || "1"} // Default value to 1 if not set
                  onChange={(e) =>
                    onSelectionChange(tour.id, "adult", e.target.value)
                  }
                >
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  className="form-select mt-1 block w-full border rounded-lg p-1 focus:outline-none"
                  value={selections[tour.id]?.child || "0"}
                  onChange={(e) =>
                    onSelectionChange(tour.id, "child", e.target.value)
                  }
                >
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  className="form-select mt-1 block w-full border rounded-lg p-1 focus:outline-none"
                  value={selections[tour.id]?.infant || "0"}
                  onChange={(e) =>
                    onSelectionChange(tour.id, "infant", e.target.value)
                  }
                >
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span>
                  AED:
                  {selections[tour.id]?.totalAmount
                    ? selections[tour.id]?.totalAmount
                    : "0"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingForm;
