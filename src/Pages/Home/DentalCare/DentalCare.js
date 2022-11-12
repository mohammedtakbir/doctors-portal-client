import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className='py-[150px]'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-[100px]">
                    <img alt='' src={treatment} className="lg:max-w-sm rounded-lg shadow-2xl md:w-[80%]" />
                    <div className='lg:w-1/2 md:w-[80%]'>
                        <h1 className="text-5xl font-bold text-[#3A4256]">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;