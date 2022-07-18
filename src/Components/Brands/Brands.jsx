import React from "react";
import b_1 from "../../assets/images/brands/b-1.png";
import b_2 from "../../assets/images/brands/b-2.png";
import b_3 from "../../assets/images/brands/b-3.png";
import b_4 from "../../assets/images/brands/b-4.png";
import b_5 from "../../assets/images/brands/b-5.jpg";
import b_6 from "../../assets/images/brands/b-6.png";
import "./Brands.css";

const Brands = () => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-center">We Collecting Bikes On This Brands</h2>
      <div className="d-flex flex-wrap">
        <img className="brand_ing mx-3 pt-4" src={b_1} alt="" />
        <img className="brand_ing mx-3 pt-4" src={b_2} alt="" />
        <img className="brand_ing mx-3 pt-4" src={b_3} alt="" />
        <img className="brand_ing mx-3 pt-4" src={b_4} alt="" />
        <img className="brand_ing mx-3 pt-4" src={b_5} alt="" />
        <img className="brand_ing mx-3 pt-4" src={b_6} alt="" />
      </div>
    </div>
  );
};

export default Brands;
