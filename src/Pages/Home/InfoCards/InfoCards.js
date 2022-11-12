import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 am to 5:00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ];

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pb-[120px]'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                />)
            }
        </div>
    );
};

export default InfoCards;