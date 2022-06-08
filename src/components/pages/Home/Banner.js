import { motion } from "framer-motion"
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Banner = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className='mask mask-hexagon max-w-xs'
                >
                    <img src="images/face.png" class="rounded-full" alt='me' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className='max-w-2xl'>
                    <h1 class="text-5xl font-semibold mb-5">Hi! I am Labib!</h1>
                    <p class="text-3xl leading-relaxed mb-5">Front-end Web Developer With Expertise on
                        <span className='font-semibold'>
                            <TypewriterComponent
                                options={{
                                    strings: ['HTML5.', 'CSS3.', 'JavaScript.', 'ReactJS.'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </p>
                    <button class="btn btn-primary">Download Resume</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;