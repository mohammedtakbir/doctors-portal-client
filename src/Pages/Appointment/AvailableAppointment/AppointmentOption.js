import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;

    return (
        <>
            <div className="card shadow-xl border">
                <div className="card-body items-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                    <div className="card-actions">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(appointmentOption)}
                            htmlFor="booking-modal"
                            className="btn btn-secondary text-white">
                            Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentOption;