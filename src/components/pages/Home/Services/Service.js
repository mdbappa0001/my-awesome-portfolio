import React from 'react';

const Service = ({ service }) => {
    const { title, image, description, technologyUsed } = service;
    return (
        <div class="card bg-base-100 shadow-xl">
            <img src={image} alt="Shoes" className='p-10 bg-accent h-1/2' />
            <div class="card-body">
                <h2 class="card-title text-xl mb-5">{title}</h2>
                <p className='leading-relaxed'>{description}</p>
                <div class="card-actions justify-start">
                    {
                        technologyUsed.map(technology => <div class="badge badge-outline">{technology}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;