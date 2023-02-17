import i404 from '../404.gif';
import s from './E404.module.css'
import { Link } from 'react-router-dom';
const E404 = () => {
    return (
        <div className={s.cuatro} >
            <h1 className={s.error}>OH GEEZ</h1>
            <h3 className={s.suberror} >requested page not found</h3>
            <div className={s.images}>
            <button className={s.button} >
            <Link className={s.link} to='/cards' >CARDS GAME</Link>
        </button>
                <img className={s.f} src={i404} alt='d'/>
            </div>
        </div>
    )
}

export default E404;