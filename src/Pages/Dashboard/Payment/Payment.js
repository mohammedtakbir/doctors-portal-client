import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk)

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { appointmentDate, price, slot, treatment } = booking;

    /* if (navigation.state === "loading") {
        return <Loading />
    }
 */
    return (
        <>
            <h2 className='text-2xl font-semibold mt-3'>Payment for {treatment}</h2>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='max-w-sm border border-gray-300 p-3 mt-7 rounded-lg shadow-lg'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </>
    );
};

export default Payment;