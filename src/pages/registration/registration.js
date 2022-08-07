import React, {useEffect, useState} from 'react';
import Button from "../../shared/button/button";
import './style.css'
import {Link} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {db} from "../../features/firebase/firebase";
import Alert from "../../widgets/alert/alert";

const Registration = () => {

  const [error, setError] = useState('')
  const [status, setStatus] = useState(0)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    uid: '',
  })
  const auth = getAuth()

  let regChange = async () => {
    if (!data.name || !data.email || !data.password || status >= 1) {
      setError('Вы заполнили не все поля!')
      return setTimeout(() => {
        setError('')
      }, 2500)
    }
    createUserWithEmailAndPassword (auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Registration...')
        setData({...data, uid: user.uid})
        const ref = doc(db, "users", user.uid);
        setDoc(ref, {
          name: data.name,
          email: data.email,
          password: data.password,
          uid: user.uid
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  useEffect(() => {
    if  (data.password.match(/[A-Z]/gi) && data.password.match(/[1-9]/gi) && data.password.length >= 9) {
      setStatus(3)
      return () => {}
    }
    if  (data.password.match(/[A-Z]/gi) && data.password.length >= 6) {
      setStatus(2)
      return () => {}
    }
    if (data.password) {
      setStatus(1)
    } else {
      setStatus(0)
    }
  }, [data.password])


  return (
    <>
      <div className='content-container'>
        {
          error ? (
            <Alert error={error}/>
          ) : null
        }
        <section className='content'>
          <h2 className='title' >Registration</h2>
          <label className='label' htmlFor="name">
            <input placeholder='Name' className='input' onChange={(e) => setData({...data, name: e.target.value})} id='name' type="text"/>
          </label>
          <label className='label' htmlFor="email">
            <input placeholder='Email' className='input' onChange={(e) => setData({...data, email: e.target.value})} id='email' type="email"/>
          </label>
          <label className='label' htmlFor="password">
            <input placeholder='Password' className='input' onChange={(e) => setData({...data, password: e.target.value})} id='password' type="password"/>
          </label>
          <section className='status'>
            {
              status >= 1 ? status >= 2 ? status === 3 ? (
                <>
                  <div className='dash dash_green'></div>
                  <div className='dash dash_green'></div>
                  <div className='dash dash_green'></div>
                </>
              ) : (
                <>
                  <div className='dash dash_yellow'></div>
                  <div className='dash dash_yellow'></div>
                  <div className='dash'></div>
                </>
              ) : (
                <>
                  <div className='dash dash_red'></div>
                  <div className='dash'></div>
                  <div className='dash'></div>
                </>
              )  : null
            }
          </section>
          <Button click={regChange}>Registration</Button>
          <span className='reg'>Уже зарегистрированы? <Link className='link' to='/login'>Login</Link></span>
        </section>
      </div>
    </>
  );
};

export default Registration;
