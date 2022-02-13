import React from "react";
import ContentSidebar from "../components/content/content";
import Sidebar from "../components/sidebar/sidebar";
import Friends from "../components/friends/friends";
import "./home.css";
const Home = () => {
  return (
    <section id="home">
      <Sidebar />
      <ContentSidebar />
      <Friends />
    </section>
  );
};

export default Home;
