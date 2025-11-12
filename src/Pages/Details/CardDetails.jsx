import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import {
  Star,
  Globe2,
  Package,
  Mail,
  Calendar,
  ShoppingCart,
  X,
} from "lucide-react";

const CardDetails = () => {
  const data = useLoaderData();
  const card = data.result;
  // console.log(card);

  const navigate = useNavigate();

  const [availableQty, setAvailableQty] = useState(Number(card.quantity));
  const [showModal, setShowModal] = useState(false);
  const [importQty, setImportQty] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const parsed = parseInt(importQty, 10);
  const invalid = isNaN(parsed) || parsed <= 0;
  const tooMany = !invalid && parsed > availableQty;
  const submitDisabled = isSubmitting || invalid || tooMany;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitDisabled) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `http://localhost:3000/cards/${card._id}/import`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ qty: parsed }),
        }
      );
      const json = await res.json();
      if (!res.ok) {
        alert(json.message || "Import failed");
      } else {
        setAvailableQty(json.card.quantity);
        setShowModal(false);
        alert("Imported successfully!");
        navigate("/all-Products");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="flex-1 flex relative justify-center">
          <img
            src={card.image}
            alt={card.name}
            className=" w-[400px] text-center object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Details */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{card.name}</h2>

          <p className="text-xl text-green-600 font-semibold">
            ৳ {Number(card.price).toLocaleString()}
          </p>

          <div className="flex items-center gap-2 text-gray-600">
            <Globe2 size={20} />
            <span className="font-medium">Origin:</span> {card.country}
          </div>

          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-500" />
              <span className="font-medium">Rating:</span> {card.rating}
            </div>
            <div className="flex items-center gap-2">
              <Package size={20} />
              <span className="font-medium">Available:</span> {availableQty}
            </div>
          </div>

          <div className="border-t pt-4 text-gray-500 text-sm space-y-1">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>Added by: {card.created_by}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                Added on: {new Date(card.createdAT).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Import Button */}
          <div className="pt-4 text-right">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
              <ShoppingCart size={20} />
              Import Now
            </button>
          </div>
        </div>
      </div>

      {/* ===== Modal ===== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h3 className="text-xl font-semibold mb-4">Import {card.name}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity to import (max {availableQty})
                </label>
                <input
                  type="number"
                  min="1"
                  value={importQty}
                  onChange={(e) => setImportQty(e.target.value)}
                  className="w-full border rounded-md p-2 mt-1"
                />
                {tooMany && (
                  <p className="text-red-500 text-sm mt-1">
                    Cannot import more than available.
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md border"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitDisabled}
                  className={`px-4 py-2 rounded-md text-white ${
                    submitDisabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? "Importing..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
