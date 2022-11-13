import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header className='pt-24 pb-28' style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={chair} className="max-w-sm lg:max-w-xl rounded-lg shadow-2xl" alt='dentist chair' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You have selected: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;