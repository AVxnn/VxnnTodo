import React, {useState} from 'react';
import avatar from "./img/avatar.png";
import cog from "./img/cog.png";
import bell from "./img/bell.png";
import {useSelector} from "react-redux";
import {getAuth} from "firebase/auth";
import './style.css'
import {useNavigate} from "react-router-dom";

const HeaderProfile = () => {

  const user = useSelector(state => state.user.user)
  const auth = getAuth().currentUser

  const [openMenu, setOpenMenu] = useState(false)

  let navigate = useNavigate();

  const openMenuHandler = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  const openSettings = () => {
    navigate('/settings')
  }

  const exit = () => {
    navigate('/login')
  }

  return (
    <>
      <section className='header'>
        { auth ? (
          <>
            <section className='header-left'>
              {
                user.photoUrl ? (
                  <img className='header-avatar' src="#" alt="avatar"/>
                ) : (
                  <img className='header-avatar' src={avatar} alt="avatar"/>
                )
              }
              <section className='header-info'>
                <h4 className='header-title'>{user.name}</h4>
                <span className='header-subtitle'>Morning, {user.name}!</span>
              </section>
            </section>
            <section className='header-right'>
              <button className='header-button'>
                <img className='header-icon' src={bell} alt="bell"/>
              </button>
              <button className='header-button' onClick={() => openMenuHandler()}>
                <img className='header-icon' src={cog} alt="cog"/>
              </button>
              {
                openMenu ? (
                  <section className='menu active'>
                    <button className='btn menu-settings'
                            onClick={() => openSettings()}>Setting</button>
                    <button className='btn menu-exit'
                            onClick={() => exit()}>Exit</button>
                  </section>
                ) : null
              }
            </section>
          </>
        ) : null}

      </section>
    </>
  );
};

export default HeaderProfile;
