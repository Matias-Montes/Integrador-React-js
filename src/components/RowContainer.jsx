import React, { useState } from 'react'
import { MdShoppingCart } from "react-icons/md"
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'
import notFound from "../img/NotFound.svg"
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

export const RowContainer = ({ flag, data, scrollValue }) => {
  
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{cartItems}, dispatch] = useStateValue();

  const addToCart = () => {
    
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };


  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue
  }, [scrollValue]) 

  useEffect(() => {
    addToCart()
  }, [items])

  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth
    ${flag
        ? 'overflow-x-scroll scrollbar-none'
        : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {
        data && data.length > 0 ? (
        data.map(item => (
          <div key={item?.id} 
          className='w-300 h-[225px] min-w-[300px] md:w-300 md:min-w-340 bg-cardOverlay rounded-lg p-2  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col item-center justify-center'>
            <div className='w-full flex items-center justify-between'>
              <motion.img whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className='w-40 h-40 -mt-8 drop-shadow-2xl'
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className='w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center cursor-pointer hover:shadow-md'
                onClick={() => setItems([...cartItems, item])}
                >
                <MdShoppingCart className='text-white' />
              </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
              <p className='text-textColor font-semibold text-base md:text-lg'>
                {item?.title}
              </p>
              <p className='mt-1 text-sm text-gray-500'>
                {item?.model}
              </p>
              <div className='flex items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                  <span className='text-sm text-red-500'>$</span> {item.price}
                </p>
              </div>
            </div>

          </div>
        )) 
       ) : (<div className='w.full flex flex-col items-center justify-center'>
                <img src={notFound} alt="NotFound" className='h-340' />
                <p className='text-xl text-headingColor font-semibold my-2'>Sin Productos Disponibles</p>
              </div>)
        }
    </div>
  )
}
