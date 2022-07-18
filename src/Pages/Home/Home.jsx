import React from "react";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import ShowRoom from "../../Components/ShowRoom/ShowRoom";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <h2>Our inventory</h2>
      </div>
      <Brands />
      <ShowRoom />
    </div>
  );
};

export default Home;
