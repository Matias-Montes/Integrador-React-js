import React, { useEffect } from 'react'
import { HomeContainer } from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
import { RowContainer } from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import { useRef } from 'react'
import { useState } from 'react'
import { MenuContainer } from './MenuContainer'
import { CartContainer } from './CartContainer'


export const MainContainer = () => {
  const [{ softwareItems, cartShow }, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(()=>{},[scrollValue, cartShow]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-200 to-blue-600 transition-all ease-in-out duration-100'>
            Subi De Nivel Tu PC
          </p>

          <div className='hidden md:flex gap-3 items-center'>
            <motion.div whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue(scrollValue-600)}
              >
              <MdChevronLeft className='text-lg text-white' />
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue(scrollValue == 0 ? scrollValue+600 : 0 )}
              >
              <MdChevronRight className='text-lg text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer          
          scrollValue={scrollValue}
          flag={true}
          data={softwareItems?.filter((n) => n.category === "placasdevideo")} />
      </section>

      <MenuContainer  />
      
      {cartShow && (
        <CartContainer  />
      )}

    </div>
  )
}


