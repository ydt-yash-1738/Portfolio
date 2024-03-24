import React from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles';
import { cv } from '../assets';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { github } from '../assets';
import { instagram } from '../assets';
import { linkedin } from '../assets';
import { gmail } from '../assets';

const Contact = () => {
  const openGitHubPage = () => {
    const githubURL = 'https://github.com/ydt-yash-1738/';
    window.open(githubURL, '_blank');
  };
  const openinstagramPage = () => {
    const instaURL = 'https://www.instagram.com/yoda_ydt/';
    window.open(instaURL, '_blank');
  };
  const openlinkedinPage = () => {
    const linkedinURL = 'https://www.linkedin.com/in/ydt1738';
    window.open(linkedinURL, '_blank');
  };
  const opengmail = () => {
    const mailURL = 'https://mail.google.com/mail/u/0/?fs=1&to=yashdt50@gmail.com&body=Body+Here&tf=cm';
    window.open(mailURL, '_blank');
  };
  function downloadCV() {
    
    const cvUrl = cv;
    // Creating a temporary anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = cvUrl;
    anchor.download = 'Yashdev Tiwari Resume.pdf';  
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  

  return (
    <div className='xl:mt-6 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h2 className={styles.sectionHeadText}>Social Media Handles</h2>
      <div className='flex justify-start items-center mb-3' >
        <img src={github} alt="github" className='w-8' />
        <p className=' cursor-pointer hover:underline' onClick={openGitHubPage}>GitHub</p>
      </div>
      <div className='flex justify-start items-center mb-3' >
        <img src={instagram} alt="instagram" className='w-8' />
        <p className='cursor-pointer hover:underline' onClick={openinstagramPage}>Instagram</p>
      </div>
      <div className='flex justify-start items-center mb-3' >
        <img src={linkedin} alt="linkedin" className='w-7 mr-1' />
        <p className='cursor-pointer hover:underline' onClick={openlinkedinPage}>LinkedIn</p>
      </div>
      <div className='flex justify-start items-center' >
        <img src={gmail} alt="gmail" className='w-7 mr-1' />
        <p className='cursor-pointer hover:underline' onClick={opengmail}>yashdt50@gmail.com</p>
      </div>
      <div className='flex justify-start items-center mb-2'>
      <img src={cv} alt="download" className='w-7 mr-1 mt-3' />
      <p className='cursor-pointer hover:underline mt-4' onClick={downloadCV}>Download CV</p>
    </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');