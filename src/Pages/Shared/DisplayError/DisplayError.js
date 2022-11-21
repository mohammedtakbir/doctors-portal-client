import React from 'react';
import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        userSignOut()
        .then(() => {
            navigate('/login');
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className='text-red-500'>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <button onClick={handleSignOut} className='btn btn-accent btn-sm text-white mt-3'>Please Sign Out</button>
            </div>
        </div>
    );
};

export default DisplayError;