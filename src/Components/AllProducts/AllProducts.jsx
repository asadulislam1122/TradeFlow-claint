import React from "react";
import { useLoaderData } from "react-router";
import AllCard from "../AllCard/AllCard";

const AllProducts = () => {
  const cards = useLoaderData();
  // console.log(cards);
  return (
    <div>
      <h1 className="text-center text-blue-600 font-bold text-3xl mt-4 mb-4 p-2">
        All Products <span className="text-green-600">({cards.length})</span>
      </h1>
      <div className="grid mt-14 mb-10 w-11/12 mx-auto grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <AllCard key={card._id} card={card}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
