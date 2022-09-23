import React, { useEffect } from 'react';
import { Header, MainContainer, CreateContainer } from './components';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from './context/StateProvider';
import { getAllSoftwareItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';

export const App = () => {
  const [ {softwareItems}, dispatch ] = useStateValue();

  const fetchData = async () => {
    await getAllSoftwareItems().then(data =>{
      dispatch({
        type: actionType.SET_SOFTWARE_ITEMS,
        softwareItems: data 
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <AnimatePresence exitBeforeEnter >
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
        <Routes>
          <Route path='/*' element={<MainContainer />}/>
          <Route path='/createItem' element={<CreateContainer />}/>

        </Routes> 
      </main>
    </div>
    </AnimatePresence>
  )
}

