import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useToken } from '../../hooks/useToken';

const Login = () => {
    const { userLogin, forgotPassword, signInWithGoogle } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        userLogin(data.email, data.password)
            .then(res => {
                setLoginError('');
                console.log(res.user)
                setLoginUserEmail(data.email);
                toast.success('login successfully!')
            })
            .catch(err => {
                setLoginError(err.message);
                console.error(err)
            })
    };

    const handleForgotPassword = () => {
        const getEmail = getValues();
        if (getEmail.email === '') {
            toast.error('insert email first');
            return;
        }
        forgotPassword(getEmail.email)
            .then(() => {
                toast.success('please check your email to reset your password')
            })
            .catch(err => console.error(err))
    };

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(res => {
                toast.success('login successfully')
                console.log(res.user)
            })
            .then(err => console.log(err))
    }

    return (
        <section className='py-[100px] flex justify-center'>
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7 sm:mx-0 mx-2">
                <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                    <h5 className="text-xl font-medium text-gray-900 text-center">Log in</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                            {...register("email", { required: "Email Address is required" })}
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        />
                        {errors.email && <p role="alert" className='text-red-500 text-sm'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your password</label>
                        <input
                            {...register("password",
                                {
                                    required: "Password is required", minLength: { value: 6, message: 'Password should be at least 6 character' }
                                })}
                            type="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        />
                        {errors.password && <p role="alert" className='text-red-500 text-sm'>{errors.password?.message}</p>}
                    </div>
                    <button type="button" onClick={handleForgotPassword} className='text-secondary text-sm hover:underline !mt-0'>
                        Forgot Password
                    </button>
                    {loginError && <p className='text-red-500 !mt-0 text-sm'>{loginError}</p>}
                    <button
                        type="submit"
                        className="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                    <div className="text-sm text-gray-500 !mt-3 text-center">
                        New to Doctors Portal? <Link to="/signup" className="text-secondary hover:underline">Create new account</Link>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className='text-center'>
                    <button onClick={handleGoogleLogIn} type="button" className="border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 hover:bg-accent hover:text-white">
                        <svg
                            className="mr-2 -ml-1 w-4 h-4"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512"><path
                                fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;