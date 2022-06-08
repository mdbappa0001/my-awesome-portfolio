import React from 'react';

const Banner = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='mask mask-hexagon w-3/2'>
                    <img src="images/face.png" class="rounded-full" alt='me' />
                </div>
                <div className='mr-10'>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;