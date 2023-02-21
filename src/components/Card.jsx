import React, { useEffect } from 'react';
import s from './Card.module.css';
import companilogo from '../logo.png';
import { Link } from 'react-router-dom';
import { addFavorite,deleteFavorite } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function Card({name,gender,onClose,species,image,id}) {

   const dispatch = useDispatch()
   const favos = useSelector(state => state.favorites)
   const [favo,setFavo] = useState(false)
   
   const handleFavo = () => {
      if (favo){
         setFavo(false)
         dispatch(deleteFavorite(id))
      }
      else{
         setFavo(true)
         dispatch(addFavorite({name,gender,onClose,species,image,id}))
      }
   }

   useEffect(()=>{
      favos.forEach((favs)=>{
         if (favs.id === id){
            setFavo(true)
         }
      })
   }, [favos])
   
   return (
      <div>
         <div className={s.cardy}>



            <div className={s.inner}>
               <div className={s.front}style={{backgroundImage:`url(${image})`, backgroundSize: 'cover', backgroundPositionX: 'center'}}>
                     <div className={s.shiny}></div>
                     <div className={s.frontman}>
                        


                        <div className={s.sobrecarta}>
                           <button className={s.milky} onClick={onClose}>🗑</button>
                           {
               favo ? ( <button className={s.milky} onClick={handleFavo} >❤️</button> ) : ( <button className={s.milky} onClick={handleFavo} >🤍</button>  )
            }
                        </div>
                        <div>
                        
                        <button  className={s.tohome}>
                           <Link className={s.link} to={`/detail/${id}`}>
                           {name}
                           </Link>
                           </button>
                       
                        </div>
                     </div>
               </div>
               <div className={s.back}>
                  <img src={companilogo} alt="ff"/>
               </div>
            </div>
         </div>
         </div>
   );
}
