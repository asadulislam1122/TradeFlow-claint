import React from "react";
import Banner from "../../Pages/Banner/Banner";
import OurFiturs from "../../Pages/Ourfiturs/OurFiturs";
import NewsLetter from "../../Pages/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2>This is Home</h2>
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
