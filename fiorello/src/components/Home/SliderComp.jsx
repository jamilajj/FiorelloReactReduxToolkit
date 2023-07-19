import React from 'react'
import Slider from 'react-slick'
import Sliderimg2 from '../../assets/img/h3-slider-background-2.jpg'
import Sliderimg3 from '../../assets/img/h3-slider-background-3.jpg'
import Sliderimg1 from '../../assets/img/h3-slider-background.jpg'


const SliderComp = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>  
             <Slider {...settings}>
            <div>
                <img src={Sliderimg2} />
            </div>
            <div>
            <img src={Sliderimg3} />
            </div>
            <div>
            <img src= {Sliderimg1} />      
            </div>
        </Slider> 
        </div>
    )
}

export default SliderComp