import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='makeAppoint-bg'>
            <div className="hero">
                <div className="hero-content lg:p-0 flex-col lg:flex-row">
                    <img alt='/' src={doctor} className="lg:w-1/2 md:w-[70%] -mt-36 md:block hidden" />
                    <div className='p-2'>
                        <h3 className="text-xl font-bold text-secondary">Appointment</h3>
                        <h2 className="text-[36px] font-semibold text-white">Make an appointment Today</h2>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;