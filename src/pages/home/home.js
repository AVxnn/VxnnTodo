import React from 'react';
import HeaderProfile from "../../widgets/headerProfile/HeaderProfile";
import './style.css'
import Search from "../../widgets/search/search";
import Projects from "../../widgets/projects/Projects";

const Home = () => {

  return (
    <div className='main'>
      <section className='container'>
        <HeaderProfile />
        <Search />
        <Projects />
      </section>
    </div>
  );
};

export default Home;
