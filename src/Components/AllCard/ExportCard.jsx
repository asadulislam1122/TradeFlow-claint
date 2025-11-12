import React, { useRef } from "react";
import {
  Pencil,
  Trash2,
  Star,
  Package,
  Globe2,
  DollarSign,
} from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ExportCard = ({ card, exportData, setExportData }) => {
  const navigate = useNavigate();
  // console.log(card);
  // modal ar jonno
  const modalRef = useRef(null);
  // delete ar jonno
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

  // update
  const handleModalOpenUpdate = () => {
    modalRef.current.showModal();
  };
  const handleExportUpdate = (e) => {
    e.preventDefault();
    const fromData = {
      name: e.target.name.value,
      price: e.target.price.value,
      country: e.target.country.value,
      rating: e.target.rating.value,
      quantity: e.target.quantity.value,
      image: e.target.image.value,
      // createdAT: new Date(),
    };
    console.log(fromData);
    fetch(`http://localhost:3000/cards/${card._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Updated!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });

        setTimeout(() => {
          navigate("/all-Products");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Update failed!", { position: "top-right" });
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
          <button
            onClick={handleModalOpenUpdate}
            className="flex items-center gap-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg text-sm transition"
          >
            <Pencil size={16} /> Update
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Your Export data update
              </h3>
              <p className="py-4 text-center">
                Press ESC key or click the button below to close
              </p>
              {/* from filset */}

              <form onSubmit={handleExportUpdate} className="space-y-4">
                {/* Product Name */}
                <div>
                  <label className="block font-medium mb-1 dark:text-white text-gray-800">
                    Product Name
                  </label>
                  <input
                    type="text"
                    defaultValue={card.name}
                    name="name"
                    required
                    placeholder="Enter product name"
                    className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block font-medium mb-1 dark:text-white text-gray-800">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={card.price}
                    required
                    placeholder="Enter price"
                    className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Origin Country */}
                <div>
                  <label className="block font-medium mb-1 dark:text-white text-gray-800">
                    Origin Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    defaultValue={card.country}
                    required
                    placeholder="Enter country"
                    className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block font-medium mb-1 dark:text-white text-gray-800">
                    Rating (0-5)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    defaultValue={card.rating}
                    required
                    placeholder="Enter rating"
                    className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    min="0"
                    max="5"
                    step="0.1"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block font-medium mb-1 dark:text-white text-gray-800">
                    Available Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={card.quantity}
                    required
                    placeholder="Enter quantity"
                    className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block font-medium mb-1 dark:text-white text-gray-800">
                    Product Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    defaultValue={card.image}
                    placeholder="https://example.com/image.jpg"
                    className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full py-2 mt-4"
                >
                  Submit
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

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
