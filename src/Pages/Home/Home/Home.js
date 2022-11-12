import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import ServiceCards from '../ServiceCards/ServiceCards';
import DentalCare from '../DentalCare/DentalCare';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ServiceCards />
            <DentalCare />
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;