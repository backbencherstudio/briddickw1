// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "../../../styles/Styles.css";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Agents from "../Agents/Agents";
import About from "../About/About";
import Partner from "../Partner/Partner";
import Testimonials from "../Testimonials/Testimonials";
import Process from "../Process/Process";
import { sendEmail } from "../../../lib/sendEmail";

const Home = () => {
  const sendTestEmail = async () => {
    try {
      await sendEmail({
        serviceId: "service_wabre9b",
        templateId: "template_sp4ythw",
        publicKey: "JKWvE6lLACENhmYIi",
        senderName: "Briddick",
        senderEmail: "tqmhosain@gmail.com",
        recipientEmails: ["selim.bbstudio@gmail.com"], // This must be a non-empty array
        details: {
          firstName: "Selim",
          lastName: "BB",
          cityToBuy: "New York",
          lookingToSell: "Yes",
          hasAgent: "Yes",
          phoneNumber: "1234567890",
          priceRange: "1000000",
          additionalDetails: "Additional details",
          replyTo: "selim.bbstudio@gmail.com",
        },
      });
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending emails:", error);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Find Top Real Estate Agents.</title>
      </Helmet>
      <Banner />
      <button onClick={() => sendTestEmail()}></button>
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
