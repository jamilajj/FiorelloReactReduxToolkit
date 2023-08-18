import React from 'react';
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import Sign from '../../assets/img/h2-sign-img.png'
import image1 from '../../assets/img/h3-slider-background-2.jpg'
import image2 from '../../assets/img/h3-slider-background-3.jpg'
import image3 from '../../assets/img/h3-slider-background.jpg'

const images = [image1, image2, image3];

const zoomOutProperties = {
    duration: 4500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};

const Slideshow = () => {
    return (
        <div className='relative'>
            <div className='flex justify-between absolute '>
                <div className='  w-1/2 '>
                    <div className='w-[150-px]  text-start '>

                        <p className='text-4xl my-4'>We take <span className='text-red-500 '>flowers</span>  personally <br />
                            & we bring you happiness</p>
                        <p className='text-slate-500'>
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                        </p>
                    </div>
                    <img className='w-50 h-10 my-4' src={Sign} alt="" />


                </div>


            </div>
            <div className="slide-container ">

                <Zoom {...zoomOutProperties}>
                    {images.map((each, index) => (
                        <img key={index} style={{ width: "100%" }} src={each} />
                    ))}

                </Zoom>
            </div>
        </div>

    );
};

function SliderComp() {
    return (
        <div className="App">
            <Slideshow />
        </div>
    );
}


export default SliderComp

