import React from "react";
import { Package, Layers, CalendarDays, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ImportCart = ({ importcard, onDelete }) => {
  const { cardName, image, qty, remainingQty, date, _id, cardId } = importcard;

  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="w-60 mt-6 mx-auto h-60 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={cardName}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 mt-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {cardName}
          </h3>

          <div className="flex mt-2 items-center justify-between text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <Package size={16} /> Qty:
              <span className="font-medium text-gray-900">{qty}</span>
            </span>
            <span className="flex items-center gap-1">
              <Layers size={16} /> Remaining:
              <span className="font-medium text-gray-900">{remainingQty}</span>
            </span>
          </div>

          <div className="flex items-center gap-1 mt-3 text-gray-500 text-sm">
            <CalendarDays size={16} /> {new Date(date).toLocaleDateString()}
          </div>
        </div>
        {/*remove button */}
        <div className="flex justify-between items-center gap-2 mt-6">
          <Link to={`/details/${cardId}`}>
            <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition">
              <Eye size={16} /> See Details
            </button>
          </Link>

          <button
            onClick={() => onDelete(_id)}
            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm transition"
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportCart;
