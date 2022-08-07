import React from 'react';
import avatar from "./img/avatar.png";
import cog from "./img/cog.png";
import bell from "./img/bell.png";
import {useSelector} from "react-redux";
import {getAuth} from "firebase/auth";
import './style.css'

const HeaderProfile = () => {

  const user = useSelector(state => state.user.user)
  const auth = getAuth().currentUser

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
              <button className='header-button'>
                <img className='header-icon' src={cog} alt="cog"/>
              </button>
            </section>
          </>
        ) : null}

      </section>
    </>
  );
};

export default HeaderProfile;
