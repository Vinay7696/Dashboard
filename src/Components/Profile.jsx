import React from 'react'
import profile2 from "../ass/img/profile2.jpg";
import profilebg from "../ass/img/profilebg.jpg"
import { IoCameraOutline } from "react-icons/io5";
import { FaTwitter ,FaFacebook ,FaGithub ,FaLinkedin } from "react-icons/fa";

const Profile = () => {
  const style ={background:"blue"}
  
  return (
    <>
    <div className='mx-auto max-w-screen-2xl p-4 mt-20'>
      <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-deflault'>
        <div className='relative z-20 h-35 md:h-65'>
          <img src={profilebg} alt="cover" className='h-[300px] w-full rounded-tl-sm rounded-tr-sm object-cover object-center' />
          <div className='absolute bottom-1 mb-[10px] mr-[10px] right-1 z-10 xsm:bottom-4 xsm:right-4'>
            <div style={style} className='flex cursor-pointer items-center justify-center gap-2 rounded bg-blue py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90'>
              <input type="file" name="cover" id="cover" className='sr-only' />
              <span><IoCameraOutline /></span>
              <span>Edit</span>
            </div>
          </div>
        </div>
      

        <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11'>
          <div className='relative z-30 mx-auto mt-[-90px] h-30 w-full max-w-30 rounded-full bg-bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3'>
            <div className='relative drop-shadow-2'>
              <img src={profilebg}  className='w-40 h-40 rounded-full'   alt="" />
              <label htmlFor=""  style={style}   className='absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-[#fff] hover:bg-opacity-90'><IoCameraOutline /><input type="file" id='profile' className='sr-only' /></label>
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='mb-1 text-2xl font-semibold text-black '>Vinay yadav</h3>
            <p className='font-medium'>FrontEnd Developer</p>
            <div className='mx-auto mt-4 mb-5 grid max-w-94 w-[360px] grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 '>
              <div className='flex  items-center justify-center gap-1 border-r border-stroke px-4'>
                <span className='font-semibold text-black'>100</span>
                <span className='text-sm'>Posts</span>
              </div>
              <div className='flex  items-center justify-center gap-1 border-r border-stroke px-4'>
                <span className='font-semibold text-black'>100</span>
                <span className='text-sm'>Posts</span>
              </div>
              <div className='flex  items-center justify-center gap-1 border-r border-stroke px-4'>
                <span className='font-semibold text-black'>100</span>
                <span className='text-sm'>Posts</span>
              </div>
              
            </div>
            <div className='mx-auto max-w-180'>
              <h4 className='font-semibold text-black'>About Me</h4>
              <p className='mt-4 mx-auto w-[750px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt illum repellat natus a repellendus repudiandae veniam doloribus voluptate vel dolor sapiente quas, officia eius, ab magnam aliquam enim vero labore in error? Sed reprehenderit eum numquam tempora eveniet iure officia qui ipsam culpa autem dolor facilis voluptatum, voluptates porro!</p>
            </div>
            <div className='mt-6'>
              <h4 className='mb-3 font-medium text-black '>Follow Me</h4>
              <div className='flex items-center justify-center gap-3'>
                <a href="" className='hover:text-blue-500'><FaTwitter className='text-[20px]' /></a>
                <a href="" className='hover:text-blue-500'><FaFacebook   className='text-[20px]'/></a>
                <a href="" className='hover:text-blue-500'><FaGithub className='text-[20px]'/></a>
                <a href="" className='hover:text-blue-500'><FaLinkedin  className='text-[20px]' /></a>
                <a href="" className='hover:text-blue-500'><FaTwitter  className='text-[20px]' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
