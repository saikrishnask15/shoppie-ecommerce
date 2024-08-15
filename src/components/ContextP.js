import {createContext, useEffect, useState } from 'react';
// import data from './assests/clothing.json';
export  const contextData = createContext();
const ContextP = ({children}) => {
    const [data,setData]=useState([]);
     useEffect(()=>{
        fetch('./assests/clothing.json')
            .then(res => res.json())
            .then(data =>setData(data));
     },[]);
    return ( 
        <contextData.Provider value={data}>
            {children}
        </contextData.Provider>
        
     );
}
 
export default ContextP;