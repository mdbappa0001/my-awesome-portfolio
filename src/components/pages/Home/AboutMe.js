import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <motion.div 
        initial={{opacity: 0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{ duration: 1.5, ease: 'easeInOut'}}
        class="hero mb-32">
            <div class="hero-content w-full flex-col justify-between lg:flex-row">
                <div className='mask mask-hexagon'>
                    <img src="images/arts/aboutme.svg" class="max-w-lg" alt='about me' />
                </div>
                <div className='max-w-xl mr-16'>
                    <h1 class="text-5xl font-semibold mb-5">About Me</h1>
                    <p class="text-xl leading-relaxed mb-5">I am a web developer with proficiency in front-end technologies like React, JavaScript, HTML, and CSS and familiarity with back-end technologies such as NodeJS and ExpressJS. I seek to join an organization that offers a professional atmosphere to enhance my qualities and build my experiences.</p>
                    <button class="btn btn-primary">Recent Projects</button>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;