import React from "react";
import { Star, Globe2, Package, User, Calendar } from "lucide-react"; // Extra icons for created info
import { Link } from "react-router";

const AllCard = ({ card }) => {
  // console.log(card._id);
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4 cursor-pointer">
      {/* Product Image */}

      <div className="overflow-hidden rounded-xl">
        <img
          src={card.image}
          alt={card.name}
          className="w-55 mx-auto h-55 object-cover object-center rounded-xl hover:scale-105 transition-transform duration-400"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{card.name}</h2>

        <p className="text-gray-600 font-medium">
          Price: <span className="text-green-600 font-bold">৳{card.price}</span>
        </p>

        <div className="flex items-center gap-2 text-gray-500">
          <Globe2 size={18} />
          <span>Origin: {card.country}</span>
        </div>

        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-yellow-500" />
            <span>Rating: {card.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <Package size={18} />
            <span>Available: {card.quantity}</span>
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-500 border-t pt-3">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>Added by: {card.created_by}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Calendar size={16} />
            <span>{card.createdAT}</span>
          </div>
        </div>
      </div>

      <Link to={`/details/${card._id}`}>
        {" "}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default AllCard;
