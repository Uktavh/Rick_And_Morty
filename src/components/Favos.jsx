import { useSelector } from "react-redux"
import s from './Card.module.css';
import { Link } from "react-router-dom";
import companilogo from '../logo.png';

const Favos = () => {

    const {favos} = useSelector(state=>state)
    return (
        <>
        {
            favos.map((char)=>{
                return(
                    <div>
                        <div className={s.cardy}>
                        <div className={s.inner}>
                        <div className={s.front}style={{backgroundImage:`url(${char.image})`, backgroundSize: 'cover', backgroundPositionX: 'center'}}>
                        <div className={s.shiny}></div>
                        <div className={s.frontman}>
                        <div className={s.sobrecarta}>
                        <button className={s.milky} onClick={char.onClose}>🗑</button>
                        {/* {favo ? ( <button className={s.milky} onClick={handleFavo} >❤️</button> ) : ( <button className={s.milky} onClick={handleFavo} >🤍</button>  )
                        } */}
                        </div>
                        <div>
            
                        <button  className={s.tohome}>
                        <Link className={s.link} to={`/detail/${char.id}`}>
                        {char.name}
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
                )
            })
        }
        </>
    )
}

export default Favos