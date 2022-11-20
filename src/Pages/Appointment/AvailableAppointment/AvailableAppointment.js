import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    /* const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5001/appointmentOptions')
            .then(res => res.json())
    }) */
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        return <Loading />
    }

    /* useEffect(() => {
        fetch('http://localhost:5001/appointmentOptions')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []); */

    return (
        <section className='mt-16'>
            <h2 className='text-[22px] text-secondary font-medium text-center'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[100px]'>
                {
                    appointmentOptions.map((option) => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment &&
                <BookingModal
                    refetch={refetch}
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                />}
        </section>
    );
};

export default AvailableAppointment;