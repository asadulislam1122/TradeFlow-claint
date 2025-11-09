import React from "react";
import Banner from "../../Pages/Banner/Banner";
import OurFiturs from "../../Pages/Ourfiturs/OurFiturs";
import NewsLetter from "../../Pages/NewsLetter/NewsLetter";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";
import AllCard from "../AllCard/AllCard";

const Home = () => {
  const data = useLoaderData();
  const latestCard = data.result;
  console.log(latestCard);

  return (
    <div>
      <Banner></Banner>

      <h2 className="text-blue-600 text-center font-bold text-3xl mt-8 mb-6">
        Latest Products{" "}
        <span className="text-green-600">({latestCard.length})</span>
      </h2>
      <div className="grid mt-14 mb-10 w-11/12 mx-auto grid-cols-1 md:grid-cols-3 gap-8">
        {latestCard.map((card) => (
          <AllCard key={card._id} card={card}></AllCard>
        ))}
      </div>

      <section className="w-10/12 mx-auto">
        <OurFiturs></OurFiturs>
      </section>
      <section>
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default Home;
