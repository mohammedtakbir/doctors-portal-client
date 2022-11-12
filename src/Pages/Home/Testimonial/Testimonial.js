import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        }
    ];

    return (
        <section className='pt-[80px] pb-[140px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-secondary font-bold text-[20px]'>Testimonial</h3>
                    <h2 className='md:text-[36px] text-[32px] text-[#3A4256] md:leading-none leading-9'>What Our Patients Says</h2>
                </div>
                <img src={quote} alt="" className='lg:w-[192px] w-[98px] lg:h-[156px] h-[79px]' />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[50px]'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;