import React from 'react'
import HeroBg from "../img/heroBg.png"
import { heroData } from '../utils/data'


export const HomeContainer = () => {
  return (
    <section 
        className='grid crid-cols-1 md:grid-cols-2 gap-2 w-full' 
        id="home">
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
       
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor capitalize'>
          Hardware en <span className='text-blue-600 text-[3rem] lg:text-[5rem]'>Argentina</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]' >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati temporibus sed tempora praesentium maxime labore amet vero exercitationem maiores facilis. Eaque doloremque laborum aperiam earum libero accusamus commodi ut soluta.
        </p>

        <button
          type="button" 
          className="bg-gradient-to-br from-blue-400 to-blue-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>

      </div>
      <div className='py-2  flex-1 flex items-center relative'>
        <img src={HeroBg} 
        className="ml-auto h-420 w-full lg:h-650 lg:w-auto" 
        alt="hero-bg"/>
        
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap'>
          {
            heroData && heroData.map(n=>(
              <div key={n.id} className=' lg:w-190  p-4 bg-cardOverlay backdro p-blur-md rounded-3xl flex flex-col items-center justify-center shadow-lg'>
                <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="I1" />
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                <p className='text-[12px] lg:text-sm text-lighttextgray font-semibold my-1 lg:my-3'>{n.decp}</p>
                <p className='text-sm font-semibold text-headingColor'>
                <span className='text-xs text-red-600'>$</span>{n.price}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

