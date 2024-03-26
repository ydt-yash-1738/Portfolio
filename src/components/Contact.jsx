import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { github, instagram, linkedin, gmail, cv } from '../assets'; 

const Contact = () => {
  const openGitHubPage = () => {
    window.open('https://github.com/ydt-yash-1738/', '_blank');
  };

  const openInstagramPage = () => {
    window.open('https://www.instagram.com/yoda_ydt/', '_blank');
  };

  const openLinkedInPage = () => {
    window.open('https://www.linkedin.com/in/ydt1738', '_blank');
  };

  const openGmail = () => {
    window.open('mailto:yashdt50@gmail.com', '_blank');
  };

  const resume = () => {
    window.open('https://drive.google.com/file/d/16Yx8B1rh1Rl9D0Y7e0eF3nyainM-EQ4l/view?usp=sharing', '_blank');
  };

  return (
    <div className='xl:mt-6 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Social Media Handles</h2>
        <div className='flex justify-start items-center mb-3'>
          <img src={github} alt="GitHub" className='w-8' />
          <p className='cursor-pointer hover:underline' onClick={openGitHubPage}>GitHub</p>
        </div>
        <div className='flex justify-start items-center mb-3'>
          <img src={instagram} alt="Instagram" className='w-8' />
          <p className='cursor-pointer hover:underline' onClick={openInstagramPage}>Instagram</p>
        </div>
        <div className='flex justify-start items-center mb-3'>
          <img src={linkedin} alt="LinkedIn" className='w-7 mr-1' />
          <p className='cursor-pointer hover:underline' onClick={openLinkedInPage}>LinkedIn</p>
        </div>
        <div className='flex justify-start items-center'>
          <img src={gmail} alt="Gmail" className='w-7 mr-1' />
          <p className='cursor-pointer hover:underline' onClick={openGmail}>yashdt50@gmail.com</p>
        </div>
        <div className='flex justify-start items-center mb-2'>
          <img src={cv} alt="CV" className='w-7 mr-1 mt-3' />
          <p className='cursor-pointer hover:underline mt-4' onClick={resume}>Curriculum Vitae</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
