import React, { useEffect } from 'react'
import { useState } from 'react'
import { IoMdPower } from 'react-icons/io'
import { categories } from '../utils/data'
import { motion } from 'framer-motion'
import { RowContainer } from './RowContainer'
import { useStateValue } from '../context/StateProvider'

export const MenuContainer = () => {
    
    const [filter, setFilter] = useState("procesadores")

    useEffect(() => {},[filter] )

    const [{softwareItems}, dispatch] = useStateValue()

    return (
        <section className='w-full my-6' id='menu'>
            <div className='w-full flex flex-col items-center justity-center'>
                <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-200 to-blue-600 transition-all ease-in-out duration-100 mr-auto'>
                    Nuestros Productos
                </p>

                <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll'>
                    {categories && categories.map(category => (
                        <motion.div 
                            whileTap={{scale: 0.75}}
                            key={category.id}
                            className={`group ${filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-white'} w-36 min-w-[128px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-500`}
                            onClick={() => setFilter(category.urlParamName)}
                        >
                            <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? 'bg-card' : 'bg-cartNumBg'} group-hover:bg-card flex items-center justify-center`}>
                                <IoMdPower className={`${filter === category.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-card text-lg`} />
                            </div>
                            <p className={`text-sm ${filter === category.urlParamName ? 'text-white' : 'text-textColor'} group-hover:text-white`}>
                                {category.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className='w-full'>
                    <RowContainer 
                    flag={false} 
                    data={softwareItems?.filter((n) => n.category === filter)}/>
                </div>

            </div>
        </section>
    )
}