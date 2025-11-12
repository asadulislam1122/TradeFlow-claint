import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ImportCart from "../AllCard/ImportCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyImports = () => {
  const importData = useLoaderData();
  const [imports, setImports] = useState(importData || []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://tradeflow-sarver.vercel.app/import-card/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data.success) {
        setImports((prev) => prev.filter((item) => item._id !== id));
        toast.success("Item deleted successfully!");
      } else {
        toast.error(data.message || "Failed to delete the item!");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Server error! Please try again.");
    }
  };

  return (
    <div className=" min-h-screen">
      <title>My Import Page</title>
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-blue-600 p-4 text-3xl mb-4 text-center font-bold">
        My Imports <span className="text-green-600">({imports.length})</span>
      </h2>

      <div className="grid mb-11 mt-4 grid-cols-1 w-11/12 mx-auto md:grid-cols-3 gap-6">
        {imports.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No imported items found.
          </p>
        ) : (
          imports.map((importcard) => (
            <ImportCart
              key={importcard._id}
              importcard={importcard}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyImports;
