import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import ServiceCards from '../ServiceCards/ServiceCards';
import DentalCare from '../DentalCare/DentalCare';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ServiceCards />
            <DentalCare />
        </div>
    );
};

export default Home;