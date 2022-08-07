import React from 'react';
import HeaderProfile from "../../widgets/headerProfile/HeaderProfile";
import './style.css'
import Search from "../../widgets/search/search";
import Projects from "../../widgets/projects/Projects";
import Tasks from "../../widgets/tasks/tasks";

const Home = () => {

  return (
    <div className='main'>
      <section className='container'>
        <HeaderProfile />
        <Search />
        <Projects />
        <Tasks />
      </section>
    </div>
  );
};

export default Home;
