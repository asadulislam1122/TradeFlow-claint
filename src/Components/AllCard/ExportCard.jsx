import React from "react";
import {
  Pencil,
  Trash2,
  Star,
  Package,
  Globe2,
  DollarSign,
} from "lucide-react";
import Swal from "sweetalert2";

const ExportCard = ({ card, exportData, setExportData }) => {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/cards/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = exportData.filter((c) => c._id !== _id);
              setExportData(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your Export Data has been deleted.",
                icon: "success",
                timer: 1000,
              });
            }
          })
          .catch((err) => console.error("Delete failed:", err));
      }
    });
  };

  return (
    <div className="bg-white mb-6 shadow-md hover:shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="w-60 mt-6 mx-auto h-60 rounded-xl overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 mt-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {card.name}
          </h3>

          <div className="flex flex-col gap-2 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <DollarSign size={16} /> Price:{" "}
              <span className="font-medium text-gray-900">${card.price}</span>
            </span>
            <span className="flex items-center gap-1">
              <Globe2 size={16} /> Country:{" "}
              <span className="font-medium text-gray-900">{card.country}</span>
            </span>
            <span className="flex items-center gap-1">
              <Star size={16} /> Rating:{" "}
              <span className="font-medium text-gray-900">{card.rating}</span>
            </span>
            <span className="flex items-center gap-1">
              <Package size={16} /> Quantity:{" "}
              <span className="font-medium text-gray-900">{card.quantity}</span>
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-2 mt-6">
          {/* Update Button */}
          <button className="flex items-center gap-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg text-sm transition">
            <Pencil size={16} /> Update
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(card._id)}
            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm transition"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportCard;
