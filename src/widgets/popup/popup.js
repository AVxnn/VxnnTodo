import React, {useState} from 'react';
import './style.css'
import {useSelector} from "react-redux";
import {collection, doc, addDoc} from "firebase/firestore";
import {db} from "../../features/firebase/firebase";

const Popup = ({setPopup}) => {

  const user = useSelector(state => state.user.user)

  const [project, setProject] = useState({
    name: '',
    color: '',
    uCreate: user.uid
  })

  console.log(user)

  const closePopup = (e) => {
    e.stopPropagation();
    if(e.target.localName === 'div') {
      setPopup(false)
    }
    return null
  }

  const createProject = async () => {
    console.log(project)
    const ref = collection(db, "projects");
    await addDoc(ref, {
      name: project.name,
      color: project.color,
      uid: user.uid,
      progress: 0,
      members: [{
        name: user.name,
        uid: user.uid,
        photoUrl: user.avatar
      }]
    });
    setPopup(false)
  }

  return (
    <>
      <div className='container-popup' onClick={(e) => closePopup(e)}>
        <section className='popup'>
          <input onChange={(e) => setProject({...project, name: e.currentTarget.value})}
                 className='popup-input'
                 placeholder='Write name project'
                 type="text"/>
          <label className='color-container' htmlFor="color">
            <span>Project color: </span>
            <input id='color'
                   className='color-change'
                   onChange={(e) => setProject({...project, color: e.currentTarget.value})}
                   type="color"/>
          </label>
          <button onClick={() => createProject()}
                  className='popup-btn'>Create Project</button>
        </section>
      </div>
    </>
  );
};

export default Popup;