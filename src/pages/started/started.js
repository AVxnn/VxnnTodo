import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './style.css'
import firstImg from './img/first.png'
import secondImg from './img/second.png'
import thirtyImg from './img/thirty.png'
import Button from "../../shared/button/button";

const Started = () => {

  const [scrollInfo, setScrollInfo] = useState(1)
  let navigate = useNavigate();

  let data = [
    {title: 'Plan your day in the most convenient way with us', subtitle: 'By making a to do list, you will know the priorities you wont to work on, so that will be more structured in doing your work'},
    {title: 'The secret of success is to take the first step', subtitle: 'By making a to do list, you will know the priorities you wont to work on, so that will be more structured in doing your work'},
    {title: 'Start planning your life with us', subtitle: 'By making a to do list, you will know the priorities you wont to work on, so that will be more structured in doing your work'},
  ]

  const changeStep = () => {
    if (scrollInfo === 3) {
      return null
    }
    setScrollInfo(scrollInfo + 1)
  }

  const navigator = () => {
    navigate('registration')
  }

  return scrollInfo ? (
    <>
      <main className='main'>
        <section className='main-container'>
          <section className='img-container' style={{marginLeft: `-${100 * scrollInfo}%`}}>
            <img className='img' src={firstImg} alt="firstImg"/>
            <img className='img' src={firstImg} alt="firstImg"/>
            <img className='img' src={secondImg} alt="secondImg"/>
            <img className='img' src={thirtyImg} alt="thirtyImg"/>
          </section>
          <section className='content'>
            <h1 className='title'>{data[scrollInfo - 1].title}</h1>
            <section className='dash-container'>
              <div className='dash dash_fill'></div><div className={`dash ${scrollInfo >= 2 ? 'dash_fill' : ''}`}></div><div className={`dash ${scrollInfo >= 3 ? 'dash_fill' : ''}`}></div>
            </section>
            <p className='subtitle'>{data[scrollInfo - 1].subtitle}</p>
            {
              scrollInfo !== 3 ? (
                <Button click={changeStep}>Next</Button>
              ) : (
                <Button click={navigator}>Registration</Button>
              )
            }
          </section>
        </section>
      </main>
    </>
  ) : null
};

export default Started;
