import React from "react";

const CartCard = ({ item, onRemove, onEdit, isSelected, onCheckboxChange }) => {
  return (
    <div
      key={item.cartId}
      className="bg-[white] grid grid-cols-5 grid-rows-3 rounded-lg shadow-md p-4 "
    >
      <div className="flex col-span-4 row-span-1 gap-1 items-center ">
        <input
          type="checkbox"
          checked={!!isSelected}
          onChange={() => onCheckboxChange(item.cartId)}
          className=""
        />
        <h3 className="text-xl font-semibold ">{item.title}</h3>
        <p className="">({item.packageName})</p>
      </div>
      <img src="" alt="img1" className=" row-span-1 col-span-1 border" />
      <div className="col-span-5  flex flex-wrap gap-x-4 text-sm py-2 gap-y-2">
        <span className="text-gray-700 flex-none border rounded-md px-1">
          Date: {item.tourDate}
        </span>
        <span className="text-gray-700 flex-none border rounded-md px-1">
          Transfer: {item.transferOption}
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

      <div className="flex justify-between items-center col-span-5 ">
        <div className="flex gap-2 ">
          <button
            className="px-2  bg-yellow-500 text-white rounded"
            onClick={() => onEdit(item.cartId)}
          >
            Edit
          </button>
          <button
            className="px-2  bg-yellow-500 text-white rounded"
            onClick={() => onRemove(item.cartId)}
          >
            Remove
          </button>
        </div>
        <p className="text-lg font-bold">Price: {item.totalAmount}</p>
      </div>
    </div>
  );
};

export default CartCard;
