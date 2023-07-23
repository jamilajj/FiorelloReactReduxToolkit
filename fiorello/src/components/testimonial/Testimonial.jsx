import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from '../../redux/TestimonialSlice';
import Loading from '../Loading';
import Slider from 'react-slick'

const Testimonial = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    const dispatch = useDispatch();
    const { testimonials } = useSelector(state => state.testimonials)

    console.log(testimonials, "testimonial")

    useEffect(() => {
        dispatch(getTestimonials())
    }, [dispatch])

    return (
        <div>
            {
                testimonials == "LOADING" ? <Loading /> :

                    <>
                        {
                            testimonials?.map((testimonial) => (
                                <div>

                                    <Slider {...settings}>
                                        <div >
                                            <div className='rounded-full '> 
                                             {testimonial.image}
                                             </div>
                                            <div className='text-center'>
                                                {testimonial.title}
                                            </div>
                                            <div className='text-center'>
                                                {testimonial.fullname}
                                            </div>
                                            <div className='text-center'>
                                                {testimonial.position}
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                    </Slider>

                                </div>
                            ))
                        }

                    </>


            }


        </div>
    )
}

export default Testimonial

