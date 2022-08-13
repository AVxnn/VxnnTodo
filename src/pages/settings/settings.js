import React, {useEffect, useState} from 'react';
import './style.css'
import arrow from './img/arrow.png'
import avatar from './img/avatar.png'
import vector from './img/vector.png'
import camera from './img/camera.png'
import userIcon from './img/user.png'
import mailIcon from './img/mail.png'
import {useNavigate} from "react-router-dom";
import {ref, getDownloadURL, uploadBytes, deleteObject} from "firebase/storage";
import {doc, updateDoc} from "firebase/firestore";
import {auth, db, storage} from "../../features/firebase/firebase";
import {useDispatch, useSelector} from "react-redux";
import {readDataUser} from "../../features/firebase/firestoref";
import {add} from "../../features/userSlice/userSlice";

const Settings = () => {

  const user = useSelector(state => state.user.user)

  let navigate = useNavigate();
  const dispatch = useDispatch()

  const [userD, setUserD] = useState({
    name: user.name,
    email: ''
  })

  const [img, setImg] = useState()

  const backHandler = () => {
    navigate(-1)
  }

  const saveHandler = async () => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      name: userD.name
    });
    const datas = await readDataUser(auth.currentUser.uid)
    dispatch(add(datas))
    localStorage.setItem('user', JSON.stringify(datas))
  }

  useEffect(() => {
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img?.name}`
        )
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath))
          }
          const snap = await uploadBytes(imgRef, img)
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath))

          await updateDoc(doc(db, 'users', user.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath
          })
        } catch (e) {
          console.log(e.message)
          console.log(e)
        }
        const datas = await readDataUser(user.uid)
        dispatch(add(datas))
        localStorage.setItem('user', JSON.stringify(datas))
        console.log('Локалка обновлена')
      }
      return () => uploadImg()
    }
  }, [img])

  return (
    <>
      <div className='main'>
        <section className='container'>
          <img className='bg-top' src={vector} alt="vector"/>
          <section className='s-header'>
            <img className='s-header-back'
                 src={arrow}
                 alt="arrow back"
                 onClick={() => backHandler()}/>
            <h3 className='s-header-title'>Settings</h3>
          </section>
          <section className='upload'>
            <label className='upload-label' htmlFor="file">
              <input className='upload-file'
                     id='file'
                     type="file"
                     accept='image/*'
                     onChange={e => setImg(e.target.files[0])}/>
              <img className='upload-img' src={avatar && user.avatar} alt="avatar"/>
              <section className='upload-container'>
                <button className='upload-btn'>
                  <img className='unpload-btn-img' src={camera} alt="upload camera"/>
                </button>
              </section>
            </label>
          </section>
          <section className='little'>
            <span className='little-title'>Share a little bit about yourself</span>
          </section>
          <section className='setting-form'>
            <label className='form-label' htmlFor="name">
              <img className='form-icon' src={userIcon} alt="user icon"/>
              <section className='form-content'>
                <span className='form-title'>Name</span>
                <input onChange={(i) => setUserD({...userD, name: i.currentTarget.value})} className='form-input' id='name' type="text" value={userD.name}/>
                {/*<span className='form-input'>{user.name}</span>*/}
              </section>
            </label>
            <label className='form-label' htmlFor="email" style={{marginTop: '20px'}}>
              <img className='form-icon' src={mailIcon} alt="mail icon"/>
              <section className='form-content'>
                <span className='form-title'>Email</span>
                <input className='form-input' id='name' type="text" value={user.email}/>
                {/*<span className='form-input'>{user.email}</span>*/}
              </section>
            </label>
            <button onClick={() => saveHandler()}
                    className='form-button'>Save</button>
          </section>
          <img className='bg-bottom' src={vector} alt="vector"/>
        </section>
      </div>
    </>
  );
};

export default Settings;
