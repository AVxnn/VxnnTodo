import React, {useEffect, useState} from 'react';
import './style.css'
import Project from "../project/project";
import Popup from "../popup/popup";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Empty from "../empty/empty";
import {db} from "../../features/firebase/firebase";

const Projects = () => {

  const [popup, setPopup] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const addProject = () => {
    popup ? setPopup(false) : setPopup(true)
  }

  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, "projects")); // where("state", "==", "CA")
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
      });
      console.log("projects", projects);
      setData(projects)
      setLoading(false)
    });
    return () => unsubscribe()
  }, [])

  return data && (
    <>
      {
        popup && <Popup setPopup={setPopup} />
      }
      <section className='project-container'>
        <section className='project-header'>
          <section className='project-left'>
            <h2 className='header-title'>Projects</h2>
            <span className='header-subtitle'>You have <span className='subtitle-number'>{loading ? `~` :  data.length}</span> Projects</span>
          </section>
          <button onClick={() => addProject()} className='project-right-button'>+ Add</button>
        </section>
        <section className='projects'>
          {
            loading ? '' :
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
