import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Banner = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <div className='mask mask-hexagon max-w-xs'>
                    <img src="images/face.png" class="rounded-full" alt='me' />
                </div>
                <div className='max-w-2xl'>
                    <h1 class="text-5xl font-bold mb-5">Hi! I am Labib!</h1>
                    <p class="text-3xl leading-relaxed mb-5">Front-end Web Developer With Expertise on
                        <span className='font-bold'>
                            <TypewriterComponent
                                options={{
                                    strings: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </p>
                    <button class="btn btn-primary">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;