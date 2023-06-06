import React, { useEffect } from "react";
import { ExpCard } from "../components/About/ExpCard";
import '../components/About/about.css'
import { useNavigate } from "react-router-dom";
import { Button } from './../components/Misc/Button';

function openLink(){
  window.open('https://www.linkedin.com/company/kubrik-digital/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=ar')
}

const experience = [
  {
    title: 'FrontEnd development - Kubrik Digital',
    date: 'Sep 2022 - Today',
    jobItems: [
      'Developing an intuitive and efficient administration dashboard using Angular and RxJs for managing accounting and finance of businesses.',
      'Designing an attractive and user-friendly interface using tools like Figma and implemented styles using Angular Material.',
      'Creation of reusable components using good coding practices.',
    ]
  },
  {
    title: 'Virtual Card - DSF Representations',
    date: 'Apr 2022',
    jobItems: [
      'My client, a businessman, wanted to expand his business and establish an online presence. As a result, he approached me to create a virtual card that would serve as a representation of his company. The page includes various contact details and a list of his products .',
    ]
  },
  {
    title: 'Journey Begins...',
    date: 'Jan 2021',
    jobItems: [
      'By beeing interested in Web Development, I started to do some research and learned the basics about HTML, CSS and JavaScript.',
      'Some of the projects I made are in the "More Projects" section.',
    ]
  }
]

export const AboutPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <section className="about-section-container">

      <div className="about-title">
        <img src="./vectors/aperture.svg" alt="" draggable={false} />
        <h2>About Me</h2>
      </div>

      <p>My name is <b style={{color:'white'}}>Vittorio Pugliese</b> and I&apos;m a software developer based in Buenos Aires, Argentina.
      Since very young I was passionate about computers and music, but around the beginning of 2021 I started learning Web Development by my own.
      <br></br>
       I&apos;m currently working at <b onClick={openLink} style={{cursor:'pointer', color:'white'}}>Kubrik Digital</b> with <b style={{color:'#ec4242'}}>Angular</b> but also learning <b style={{color:'#448de7'}}>React</b>.</p>
      
      
      <div className="experience-container">
      <div className="about-title">
        <i className="fa-solid fa-dumbbell"></i>
        <h2>Experience</h2>
      </div>

      {experience.map(exp => {
          return (
            <ExpCard exp={exp} key={exp.title} />
          )})}
      </div>

      <Button text='Contact me' path='/contact' 
      iconClass={'fa-solid fa-arrow-right'} />
    </section>
  );
};
