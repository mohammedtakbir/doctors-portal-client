import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Components/ConfirmaitonModal/ConfirmationModal';
import Loading from '../../../Components/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null)
    };

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5001/doctors`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5001/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Dr. ${doctor.name} deleted successfully`);
                refetch();
                console.log(data);
            })
    }

    if (isLoading) {
        return <Loading />
    };

    return (
        <>
            <h3 className='font-semibold text-[24px] mb-3'>Manage Doctors: {doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => (
                                <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt='' src={doctor.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label
                                            onClick={() => setDeletingDoctor(doctor)}
                                            htmlFor="confirmation-modal"
                                            className="btn border-none btn-xs text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                                            Delete</label>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor &&
                <ConfirmationModal
                    closeModal={closeModal}
                    modalData={deletingDoctor}
                    successAction={handleDeleteDoctor}
                    title={`Ary you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                />
            }
        </>
    );
};

export default ManageDoctors;