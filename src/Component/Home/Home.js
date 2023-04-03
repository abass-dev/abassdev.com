import React from "react";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
     <div className="container-lg">
        <Profile />
        <Project />
        <Skill />
        <Work />
      <Footer />
      </div>
  );
};

export default Home;
