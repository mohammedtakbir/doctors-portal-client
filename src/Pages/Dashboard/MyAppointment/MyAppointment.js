import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-[24px] font-medium mb-4'>My Appointment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time Slot</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => (
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-secondary btn-sm text-white'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-green-500 font-medium'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;