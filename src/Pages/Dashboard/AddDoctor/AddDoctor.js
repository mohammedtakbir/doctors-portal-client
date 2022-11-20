import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: () => fetch(`http://localhost:5001/appointmentSpecialty`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading />
    };

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    };

                    //* save doctor information to the database
                    fetch(`http://localhost:5001/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success(`${data.name} is added successfully`);
                                navigate('/dashboard/manageDoctors')
                                console.log(data)
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='text-[24px] font-semibold mb-4'>Add A New Doctor</h2>
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-7">
                <form className="space-y-6" onSubmit={handleSubmit(handleAddDoctor)}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input
                            {...register('name',
                                { required: 'Name is Required' }
                            )}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder='Enter Your Name'
                        />
                        {errors.name && <p role='alert' className='text-red-500 text-sm'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">email</label>
                        <input
                            {...register('email',
                                { required: 'Email is Required' }
                            )}
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder='Enter Your Email'
                        />
                        {errors.email && <p role='alert' className='text-red-500 text-sm'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Specialty</label>
                        <select
                            {...register('specialty',
                                { required: 'Specialty is Required' }
                            )}
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option selected disabled>Pick A Specialty</option>
                            {specialties.map(specialty => (
                                <option
                                    key={specialty._id}
                                    value={specialty.name}>{specialty.name}
                                </option>
                            ))}
                        </select>
                        {errors.specialty && <p role='alert' className='text-red-500 text-sm'>{errors.specialty?.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
                        <input
                            {...register('image',
                                { required: 'Photo is Required' }
                            )}
                            type="file"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder='Enter Your Name'
                        />
                        {errors.image && <p role='alert' className='text-red-500 text-sm'>{errors.image?.message}</p>}
                    </div>
                    <button type="submit" className="w-full text-white bg-accent hover:bg-accent focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;