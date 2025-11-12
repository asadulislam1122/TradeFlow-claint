import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllCard from "../AllCard/AllCard";
import { div } from "framer-motion/client";
import Loading from "../../Loading/Loading";

const AllProducts = () => {
  const cards = useLoaderData();
  // console.log(cards);
  const [productsCards, setproductsCards] = useState(cards);
  const [loading, setLoading] = useState(false);

  const handleSerach = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    // console.log(search);
    setLoading(true);
    fetch(`http://localhost:3000/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setproductsCards(data);
        setLoading(false);
      });
  };

  return (
    <div>
      <title>All Products page</title>
      <h1 className="text-center text-blue-600 font-bold text-3xl mt-4 mb-4 p-2">
        All Products{" "}
        <span className="text-green-600">
          ({productsCards ? productsCards.length : cards.length})
        </span>
      </h1>
      {/* sarch input */}
      <form onSubmit={handleSerach} className="text-center">
        <label className="input rounded-full border-2 border-blue-500  ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            name="search"
            type="search"
            placeholder="Search products name"
          />
        </label>
        <button className="btn text-white bg-blue-600 ml-2 rounded-full">
          {loading ? <Loading></Loading> : "Search"}
        </button>
      </form>
      {/*  */}
      <div className="grid mt-14 mb-10 w-11/12 mx-auto grid-cols-1 md:grid-cols-3 gap-8">
        {productsCards.map((card) => (
          <AllCard key={card._id} card={card}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
