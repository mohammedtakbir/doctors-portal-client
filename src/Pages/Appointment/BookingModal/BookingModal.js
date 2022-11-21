import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots, price } = treatment; //* treatment is just another name of appointmentOptions with name, slots, _id
    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            treatment: treatment.name,
            appointmentDate: date,
            patient: name,
            phone,
            price,
            email,
            slot,
        };
        //* TODO: send data to the server 
        //* and once data is saved then close the modal
        //* and display success toast

        fetch('http://localhost:5001/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast.success('Booking Confirmed!')
                    setTreatment(null);
                } else {
                    toast.error(data.message)
                }
            })
    };

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className="input input-bordered w-full mb-4" />
                        <select name='slot' className="select select-bordered w-full mb-4">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input
                            disabled
                            defaultValue={user?.displayName}
                            name='name'
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full mb-4"
                            required
                        />
                        <input
                            name='phone'
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full mb-4"
                            required
                        />
                        <input
                            disabled
                            defaultValue={user?.email}
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full mb-4"
                            required
                        />
                        <input
                            type="submit"
                            value="SUBMIT"
                            className='btn btn-accent block w-full'
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;