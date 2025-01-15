// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../../styles/Styles.css";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Agents from "../Agents/Agents";
import About from "../About/About";
import Partner from "../Partner/Partner";
import Testimonials from "../Testimonials/Testimonials";
import Process from "../Process/Process";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Find Top Real Estate Agents.
        </title>
      </Helmet>
      <Banner />
      <Features />
      <Agents />
      <About />
      <Partner />
      <Testimonials />
      <Process />
    </div>
  );
};

export default Home;
