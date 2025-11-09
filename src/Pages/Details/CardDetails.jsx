import React from "react";
import { useLoaderData } from "react-router";
import {
  Star,
  Globe2,
  Package,
  Mail,
  Calendar,
  ShoppingCart,
} from "lucide-react";

const CardDetails = () => {
  const data = useLoaderData();
  const card = data.result;

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
            ৳ {card.price.toLocaleString()}
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
              <span className="font-medium">Available:</span> {card.quantity}
            </div>
          </div>

          <div className="border-t pt-4 text-gray-500 text-sm space-y-1">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>Added by: {card.created_by}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Added on: {card.createdAT}</span>
            </div>
          </div>

          {/* Import Button (right-aligned) */}
          <div className="pt-4 text-right">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all">
              <ShoppingCart size={20} />
              Import Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
