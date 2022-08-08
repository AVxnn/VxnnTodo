import React, {useEffect, useState} from 'react';
import './style.css'
import Project from "../project/project";
import Popup from "../popup/popup";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Empty from "../empty/empty";
import {db} from "../../features/firebase/firebase";

const data = [
  {
    title: "Vxnn Peterburgs Front end",
    progress: 45,
    members: [52354623, 243646, 232362351]
  }
]

const Projects = () => {

  const [popup, setPopup] = useState(false)
  const [data, setData] = useState([])

  const addProject = () => {
    popup ? setPopup(false) : setPopup(true)
  }

  useEffect(() => {
    const q = query(collection(db, "projects")); // where("state", "==", "CA")
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log("Current cities in CA: ", cities);
      setData(cities)
    });
    return () => unsubscribe()
  }, [])

  return (
    <>
      {
        popup && <Popup setPopup={setPopup} />
      }
      <section className='project-container'>
        <section className='project-header'>
          <section className='project-left'>
            <h2 className='header-title'>Projects</h2>
            <span className='header-subtitle'>You have <span className='subtitle-number'>4</span> Projects</span>
          </section>
          <button onClick={() => addProject()} className='project-right-button'>+ Add</button>
        </section>
        <section className='projects'>
          {
            data.length > 0 ? data.map((e) => (
              <Project data={e}/>
            )) : <Empty />
          }
        </section>
      </section>
    </>
  );
};

export default Projects;
