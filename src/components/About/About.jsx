import React from 'react';
import './About.css';
import AboutImage from '../../assets/AboutImage.png';

export const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section_title'>About me</h2>
      <div className='about_container grid'>
        <img src={AboutImage} className='about_img' alt='' />
        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'>
              Experienced Frontend Developer with 3+ years of expertise in
              building and maintaining web and mobile applications.
            </p>
            <a
              href='https://drive.google.com/drive/folders/14JlZNJLthj2JxQdSALHU1-S6bcobOJrh?usp=sharing'
              target='_blank'
              className='btn'
            >
              Download CV
            </a>
          </div>

          <div className='about_skills grid'>
            <div className='skill_data'>
              <div className='skill_title'>
                <h3 className='skill_name'>Mobile Development</h3>
                <span className='skill_number '>70%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage mobile'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_title'>
                <h3 className='skill_name'>Web Development</h3>
                <span className='skill_number '>78%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage development'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_title'>
                <h3 className='skill_name'> NLP</h3>
                <span className='skill_number '>60%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage qa'></span>
              </div>
            </div>
            {/* 
            <div className='skill_data'>
              <div className='skill_title'>
                <h3 className='skill_name'> QA</h3>
                <span className='skill_number '>45%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage qa'></span>
              </div>
            </div> */}

            <div className='skill_data'>
              <div className='skill_title'>
                <h3 className='skill_name'>UI/UX</h3>
                <span className='skill_number '>30%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage ui'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
