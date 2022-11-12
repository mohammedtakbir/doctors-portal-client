import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {

    const serviceCard = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: Fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: Cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: Whitening
        }
    ];

    return (
        <>
            <div className='text-center text-base mb-[70px]'>
                <h3 className='text-primary font-bold mb-3'>OUR SERVICES</h3>
                <h4 className='text-[#3A4256] font-normal text-base text-[36px]'>Services We Provide</h4>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    serviceCard.map(card => <ServiceCard
                        key={card.id}
                        card={card}
                    />)
                }
            </div>
        </>
    );
};

export default ServiceCards;