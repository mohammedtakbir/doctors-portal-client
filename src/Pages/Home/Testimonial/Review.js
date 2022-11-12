import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, review: userReview } = review;
    return (
        <>
            <div className="card bg-base-100 shadow-xl border border-gray-50 mt-[75px]">
                <div className="card-body">
                    <p>{userReview}</p>
                    <div className="flex items-center mt-7">
                        <div className="avatar">
                            <div className="w-[70px] h-[70px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div className='ml-2'>
                            <h3 className='font-semibold text-[20px] text-[#3A4256]'>{name}</h3>
                            <h4>{location}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;