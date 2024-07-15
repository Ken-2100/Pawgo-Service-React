import {useEffect, useState} from 'react';
import FoodItem from '../components/Food-Products/FoodItem';


export default function Shop(){
  const [loadedFoods, setLoadedFoods] = useState([]);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(resFood =>  resFood.json())
    .then((foodData) => {
        setLoadedFoods(foodData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });;
  },[]);

   return(
    <>
    <p className='h1 text-center'>Shop</p>
    <ul id="foods">{loadedFoods.slice(13,25).map((foods) =>(
     <FoodItem key={foods.id} foods={foods}/>
    ))}
  </ul>
  </>
 );
 
};