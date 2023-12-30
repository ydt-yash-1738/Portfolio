import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { github } from '../assets';
import { instagram } from '../assets';
import { linkedin } from '../assets';

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


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h2 className={styles.sectionHeadText}>Social Media Handles</h2>
      <div className='flex justify-start items-center mb-3' >
        <img src={github} alt="github" className='w-8' />
        <p className=' cursor-pointer' onClick={openGitHubPage}>GitHub</p>
      </div>
      <div className='flex justify-start items-center mb-3' >
        <img src={instagram} alt="instagram" className='w-8' />
        <p className='cursor-pointer' onClick={openinstagramPage}>Instagram</p>
      </div>
      <div className='flex justify-start items-center' >
        <img src={linkedin} alt="linkedin" className='w-7 mr-1' />
        <p className='cursor-pointer' onClick={openlinkedinPage}>LinkedIn</p>
      </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');