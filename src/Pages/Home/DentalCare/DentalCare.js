import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div className='pt-[150px] lg:pb-[270px] pb-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-[100px]">
                    <img alt='' src={treatment} className="lg:max-w-sm rounded-lg shadow-2xl md:w-[80%]" />
                    <div className='lg:w-1/2 md:w-[80%]'>
                        <h1 className="text-5xl font-bold text-[#3A4256]">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;