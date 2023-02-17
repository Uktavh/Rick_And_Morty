import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import s from './Detail.module.css';
import companilogo from '../logo.png';

const Detail = () => {

    const {detailId} = useParams()

    const [character,setCharacter] = useState ({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);



    return (
        <div className={s.deta}>
            <div className={s.columna1} >
                <h1 className={s.title}>{`${character?.name}`}</h1>
                <div className={s.ficha}>
                    <h5>{`STATUS: ${character?.status}`}</h5>
                    <h5>{`SPECIE: ${character?.species}`}</h5>
                    <h5>{`GENDER: ${character?.gender}`}</h5>
                    <h5>{`ORIGIN: ${character?.origin?.name}`}</h5>

                    <button  className={s.tohome}>
                           <Link className={s.link} to={`/home`}>
                           HOME
                           </Link>
                           </button>

                </div>
            </div>


            
         <div className={s.cardy}>
            <div className={s.inner}>
               <div className={s.front}style={{backgroundImage:(`url(${character.image})`), backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center' }}>
                    <div className={s.shiny}></div>
                    <div className={s.sobrecarta}>

                    </div>
               </div>
               <div className={s.back}>
                  <img src={companilogo} alt="ff"/>
               </div>
           
         </div>
         </div>
        </div>
    )
}

export default Detail;