import React, {useEffect, useState} from 'react';
import Button from "../../shared/button/button";
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../features/firebase/firebase";
import Alert from "../../widgets/alert/alert";
import {readDataUser} from "../../features/firebase/firestoref";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../../features/userSlice/userSlice";

const Login = () => {

  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    uid: '',
  })
  let navigate = useNavigate();
  const auth = getAuth()

  let logChange = async () => {
    if (!data.email || !data.password || data.password.length < 6) {
      setError('Вы заполнили не все поля!')
      return setTimeout(() => {
        setError('')
      }, 2500)
    }
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('logined...')
        setData({...data, uid: user.uid})
        navigate('/home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    const datas = await readDataUser(auth.currentUser.uid)
    console.log(datas)
    dispatch(add(datas))
    console.log(user)
    localStorage.setItem('user', JSON.stringify(datas))
  }

  return (
    <div className='content-container'>
      {
        error ? (
          <Alert error={error}/>
        ) : null
      }
      <section className='content'>
        <h2 className='title' >Login</h2>
        <label className='label' htmlFor="email">
          <input placeholder='Email' className='input' onChange={(e) => setData({...data, email: e.target.value})} id='email' type="email"/>
        </label>
        <label className='label' htmlFor="password">
          <input placeholder='Password' className='input' onChange={(e) => setData({...data, password: e.target.value})} id='password' type="password"/>
        </label>
        <Button click={logChange}>Login</Button>
        <Link className='link' to='/registration'>Registration</Link>
      </section>
    </div>
  );
};

export default Login;
