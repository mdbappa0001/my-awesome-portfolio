import React, { useState } from 'react';
import { motion } from 'framer-motion';


function ReadMore({children = 300}) {

    const text = children;

    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0, 300) : text;

    function toggleIsShow() {
        setIsShowLess((!isShow));
    }

    return(
        <p>
            {result}
            <span className="btn btn-link" onClick={toggleIsShow}>
                {isShow ? 
                <div className='text-[#c3c344] mb-12'> ....  Read More</div>  : <div className='text-[#bebe41]'>Read Less</div>
            }
            </span>
        </p>
    )

}


const AboutMe = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hero mb-32">
            <div className="hero-content w-full flex-col justify-between lg:flex-row">
                <div className='mask mask-hexagon mb-12 lg:mb-0'>
                    <img src="images/arts/aboutme.svg" className="" alt='about me' />
                </div>
                <div className='max-w-2xl mr-0 lg:mr-16'>
                    <h1 className="text-5xl font-semibold mb-5 text-white">Who Am I</h1>
                   <div className='mb-4 text-[#b88585] '>
                   <ReadMore>Hey there! I am Abu Tanif MD Bappa, a MERN stack developer who’s trying to flourish in her career. I am proficient in HTML, CSS, Javascript, ReactJS, MongoDB, NodeJS, and Express JS. For the CSS framework, I mostly use Bootstrap 5 and Tailwind CSS. I have a good understanding of Firebase authentication and Stripe payment methods. Github and Figma are my everyday tools for developing websites. Although my main education is related to agriculture, programming has become my greatest passion. I lose track of time when I start coding. Though the frustration you get when you get errors, is a real headache; the joy of solving them is also immense. Every error I solve becomes an achievement, and I take one more step forward in the world of web development. This is what I love about programming and this is what keeps me moving forward. In 5 years, I want to have lots of functional websites with great UI/UX and lots of happy clients. I want to make agricultural software in the future.</ReadMore>
                   </div>
                    <a href='#portfolio' className="bg-blue-700 hover:bg-blue-900 hover:text-[#FFFF00] font-bold px-4 py-4">Recent Projects</a>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;