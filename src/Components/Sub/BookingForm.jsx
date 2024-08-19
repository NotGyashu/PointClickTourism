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

  // Handle changes for each tour
  const handleChange = (tourId, field, value) => {
    setSelections((prevSelections) => {
      const updatedSelections = {
        ...prevSelections,
        [tourId]: {
          ...prevSelections[tourId],
          [field]: value,
        },
      };

      // If the packageName is selected, set default values
      if (field === "packageName" && value) {
        updatedSelections[tourId] = {
          packageName: value,
          transferOption:
            updatedSelections[tourId]?.transferOption || "Transfer 1",
          tourDate:
            updatedSelections[tourId]?.tourDate ||
            new Date().toISOString().split("T")[0],
          adult: updatedSelections[tourId]?.adult || "1",
          child: updatedSelections[tourId]?.child || "0",
          infant: updatedSelections[tourId]?.infant || "0",
          totalAmount: calculateTotalAmount(
            updatedSelections[tourId],
            tour.basePrice
          ),
        };
      }

      return updatedSelections;
    });
  };

  const calculateTotalAmount = (selection, basePrice) => {
    const { adult = 1, child = 0, infant = 0 } = selection;
    return basePrice * (parseInt(adult) + parseInt(child) + parseInt(infant));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert the selections object to an array of objects for cart
      const cartItems = Object.entries(selections).map(([id, selection]) => ({
        ...selection,
        id: id,
        title: tour.title,
        price: tour.price,
      }));
    console.log(cartItems)
     addToCart(cartItems)
      navigate("/cart");
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };


  if (!tour) return <div>Loading...</div>;

  return (
    <div className="border sm:p-3 md:p-5  p-1 shadow-md bg-white ">
      <h2 className="text-xl font-bold mb-4">{tour.title} Prices & Offers</h2>
      <form onSubmit={handleSubmit}>
        <Table selections={selections} onSelectionChange={handleChange} />
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

const Table = ({ selections, onSelectionChange }) => {
  const sampleTours = [
    { activityId: 1, type: "Tour 1", basePrice: 100 },
    { activityId: 2, type: "Tour 2", basePrice: 150 },
  ];

  const calculateTotalAmount = (tour) => {
    const selection = selections[tour.activityId] || {};
    const { adult = 0, child = 0, infant = 0 } = selection;
    return (
      tour.basePrice * (parseInt(adult) + parseInt(child) + parseInt(infant))
    );
  };

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
          {sampleTours.map((tour) => (
            <tr key={tour.activityId} className="">
              <td className="px-6 mt-1 py-4 flex gap-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="form-checkbox mt-1"
                  checked={!!selections[tour.activityId]?.packageName}
                  onChange={(e) =>
                    onSelectionChange(
                      tour.activityId,
                      "packageName",
                      e.target.checked ? tour.type : ""
                    )
                  }
                />
                <span>{tour.type}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  className="form-select mt-1 block w-full border  rounded-lg p-1 focus:outline-none"
                  value={selections[tour.activityId]?.transferOption || ""}
                  onChange={(e) =>
                    onSelectionChange(
                      tour.activityId,
                      "transferOption",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select Transfer</option>
                  <option value="transfer1">Transfer 1</option>
                  <option value="transfer2">Transfer 2</option>
                  <option value="transfer3">Transfer 3</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <DatePicker
                  selected={
                    selections[tour.activityId]?.tourDate
                      ? new Date(selections[tour.activityId].tourDate)
                      : new Date()
                  }
                  onChange={(date) =>
                    onSelectionChange(
                      tour.activityId,
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
                  value={selections[tour.activityId]?.adult || "1"} // Default value to 1 if not set
                  onChange={(e) =>
                    onSelectionChange(tour.activityId, "adult", e.target.value)
                  }
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  className="form-select mt-1 block w-full border rounded-lg p-1 focus:outline-none"
                  value={selections[tour.activityId]?.child || "0"}
                  onChange={(e) =>
                    onSelectionChange(tour.activityId, "child", e.target.value)
                  }
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  className="form-select mt-1 block w-full border rounded-lg p-1 focus:outline-none"
                  value={selections[tour.activityId]?.infant || "0"}
                  onChange={(e) =>
                    onSelectionChange(tour.activityId, "infant", e.target.value)
                  }
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span>${calculateTotalAmount(tour).toFixed(2)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingForm;
