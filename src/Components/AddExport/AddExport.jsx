import React, { useContext } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddExport = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
      created_by: user?.email || "anonymous",
    };

    fetch("https://tradeflow-sarver.vercel.app/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added product ✅");
        // console.log(data);
        navigate("/all-products");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="card border mb-6 border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 w-full max-w-md mx-auto shadow-lg rounded-2xl mt-8">
      <title>Add Export page</title>
      <div className="card-body p-6">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white text-gray-900">
          Add Export/Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block font-medium mb-1 dark:text-white text-gray-800">
              Product Name
            </label>
            <input
              type="text"
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
              placeholder="https://example.com/image.jpg"
              className="input w-full rounded-full border-gray-300 focus:ring focus:ring-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
