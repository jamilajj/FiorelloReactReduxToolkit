import React from 'react'
import {AiFillHeart} from 'react-icons/ai'

const VideoDescription = () => {
  return (
    <div >
        <div className='text-4xl w-[500px] '> Suprise Your  <span className='text-red-500 text-size-xl text-bold'> Valentine!  </span>
    Let us arrange a smile.</div>
   
    <div className='text-slate-500 text-lg w-[500px]'>Where flowers are our inspiration to create lasting memories. Whatever the occasion...</div>
    <ul>
    <li className='flex items-center gap-2 my-5 text-lg text-slate-500 '>  <AiFillHeart size={25} color='red'/>Hand picked just for you.</li>
    <li className='flex items-center gap-2 my-5 text-lg text-slate-500 '>  <AiFillHeart size={25} color='red'/>Hand picked just for you.</li>
    <li className='flex items-center gap-2 my-5 text-lg text-slate-500 '>  <AiFillHeart size={25} color='red'/>Hand picked just for you.</li>
    </ul>
    </div>
  )
}

export default VideoDescription