import React from 'react'
import VideoComp from '../components/video/VideoComp'
import PageContainer from '../containers/PageContainer'
import Sign from '../assets/img/h2-sign-img.png'
import Experts from '../components/exsperts/Experts'
const About = () => {
    return (
        <div>
            <div>
                <img className='absolute right-0 flex justify-between items-center bg-gray-100  relative' src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/p1-title-img.jpg" alt="" />
                <p className='text-center size-3xl absolute'>About Us</p>
                <p className='size-lg absolute'>Where flowers are our inspiration </p>
            </div>
            <PageContainer>
                <div className='flex justify-between'>
                    <div className='  w-1/2 '>
                        <div className='w-[300-px]  text-start'>

                            <p className='text-4xl my-4'>We take <span className='text-red-500 '>flowers</span>  personally <br />
                                & we bring you happiness</p>
                            <p className='text-slate-500'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                            </p>
                        </div>
                        <img className='w-50 h-10 my-4' src={Sign} alt="" />


                    </div>

                    <VideoComp />
                    
                </div>
                <Experts/>

            </PageContainer>

        </div>
    )
}

export default About