import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Main/Main.css";
import Breadcrumbs from "../../Components/breadcrumbs/breadcrumbs";
import pizza1 from "../../Images/Pizza.avif";
import Burger from "../../Images/Burger.avif";
import Sandwich from "../../Images/Sandwich.avif";
import Biryani from "../../Images/Biryani.avif";
import Thali from "../../Images/Thali.avif";
import Chicken from "../../Images/Chicken.webp";
import rest1 from "../../Images/MacD.avif";
import rest2 from "../../Images/Lapinoz.avif";
import rest3 from "../../Images/Lamilano.avif";
import rest4 from "../../Images/Burgerking.avif";
import rest5 from "../../Images/Gwalia.avif";
import rest6 from "../../Images/Subway.avif";
import MediaCard from "../../Components/Card/MediaCard";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="p-class"></div>
      <br />
      <div className="zomatomain">
        <div className="container">
          <Breadcrumbs />
        </div>

        <br />
        <div className="dishes">
          <br />
          <br />
          <div className="container tagline-dish">
            <h2>Inspiration for your first order</h2>
          </div>
          <br />
          <br />
          <div className="container d-flex justify-content-between">
            <div className="dish1">
              <img className="dish-a1" src={pizza1} alt="" />
              <p className="d-flex justify-content-center">Pizza</p>
            </div>
            <div className="dish2">
              <img className="dish-a1" src={Burger} alt="" />
              <p className="d-flex justify-content-center">Burger</p>
            </div>
            <div className="dish2">
              <img className="dish-a1" src={Biryani} alt="" />
              <p className="d-flex justify-content-center">Biryani</p>
            </div>
            <div className="dish3">
              <img className="dish-a1" src={Sandwich} alt="" />
              <p className="d-flex justify-content-center">Sandwich</p>
            </div>
            <div className="dish4">
              <img className="dish-a1" src={Thali} alt="" />
              <p className="d-flex justify-content-center">Thali</p>
            </div>
            <div className="dish5">
              <img className="dish-a1" src={Chicken} alt="" />
              <p className="d-flex justify-content-center">Chicken</p>
            </div>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="container">
          <h3>Top brands for you</h3>
        </div>
        <br />
        <div className="container d-flex justify-content-between">
          <div className="res1">
            <img className="restaurant-list" src={rest1} alt="" />{" "}
            <p className="d-flex justify-content-center">
              McDonald's <br />
              20 min
            </p>
          </div>
          <div className="res2">
            <img className="restaurant-list" src={rest2} alt="" />{" "}
            <p className="d-flex justify-content-center">
              La Pino'z Pizza <br /> 29 min
            </p>
          </div>
          <div className="res3">
            <img className="restaurant-list" src={rest3} alt="" />{" "}
            <p className="d-flex justify-content-center">
              La Milano Pizzeria <br /> 29 min
            </p>
          </div>
          <div className="res4">
            <img className="restaurant-list" src={rest4} alt="" />{" "}
            <p className="d-flex justify-content-center">
              Burger King <br />
              27 min
            </p>
          </div>
          <div className="res5">
            <img className="restaurant-list" src={rest5} alt="" />{" "}
            <p className="d-flex justify-content-center">
              {" "}
              Gwalia Sweets & Fast Food <br /> 14 min
            </p>
          </div>
          <div className="res6">
            <img className="restaurant-list" src={rest6} alt="" />{" "}
            <p className="d-flex justify-content-center">
              Subway <br />
              19 min
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="container food-cards"> 
      <MediaCard/>
      </div>


    </>
  );
};

export default Main;
