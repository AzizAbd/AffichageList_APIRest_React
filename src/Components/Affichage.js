
import React, {Fragment,useState,useEffect} from 'react';
import axios from 'axios';
function Affichage(){
    const [data,setData]=useState([]);
  useEffect(()=> {
    const fetchData= async()=>{
       const result = await axios(
        'https://jsonplaceholder.typicode.com/todos',
       );
       setData(result.data)
    };
    fetchData();
  }, [])
  
const resul = [];
  data.forEach((data) =>{
   resul.push(( data.userId === 1 && data.completed === true)  ? <div>✔ {data.title}</div>   :  ( data.userId === 1 && data.completed === false) ? <div> X ${data.title} </div> : '');
  })

    return(
    <div>

      {resul}  
      
    
    
  </div>)


}
export default Affichage;