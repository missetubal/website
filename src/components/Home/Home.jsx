import React from 'react';
import './Home.css';
import Me from '../../assets/Me.png';
import { SocialMedia } from './SocialMedia';
import { ScrollDown } from './ScrollDown';

export const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='' className='img' />
        <h1 className='name'>Michelle Setúbal</h1>
        <span className='education'>Frontend Developer - NLP Enthusiastic</span>
        <SocialMedia />

        <a href='#contact' className='btn'>
          Let's talk
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};
