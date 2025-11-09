import React, { use } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { data } from "react-router";

const AddExport = () => {
  const { user } = use(AuthContext);
  // console.log(user.email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = {
      name: e.target.name.value,
      price: e.target.price.value,
      country: e.target.country.value,
      rating: e.target.rating.value,
      quantity: e.target.quantity.value,
      image: e.target.image.value,
      createdAT: new Date(),
      created_by: user.email,
    };
    // console.log(fromData);
    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="card border mb-6 border-gray-200 bg-white w-full max-w-md mx-auto shadow-lg rounded-2xl mt-8">
      <div className="card-body p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Export/Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter product name"
              className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              required
              placeholder="Enter price"
              className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200"
            />
          </div>

          {/* Origin Country */}
          <div>
            <label className="block font-medium mb-1">Origin Country</label>
            <input
              type="text"
              name="country"
              required
              placeholder="Enter country"
              className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium mb-1">Rating</label>
            <input
              type="number"
              name="rating"
              required
              placeholder="Enter rating (0-5)"
              className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium mb-1">Available Quantity</label>
            <input
              type="number"
              name="quantity"
              required
              placeholder="Enter quantity"
              className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Product Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full py-2 mt-4"
          >
            Add Export/Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExport;
