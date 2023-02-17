import s from './Welcome.module.css'
import welc from "../img-home.png"
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className={s.main}>
        
        <div className={s.submain} >
            <div className={s.logo}><img src={welc} className={`${s.parpadea} ${s.img}`} ></img></div>
        <div className={s.tuti}>

        <h1>LET ME SHOW U WHAT I GOT</h1>
        <h2>as i, the app, am a work in progress, until now i have 3 sections</h2>
        <ul className={s.lista}>
        <li className={s.li}>Cardsgame: search by id cards of characters from Rick and Morty's universe</li>
        <li className={s.li}>About: a short section about the app's creator</li>
        <li className={s.li}>{'A fun page for 404 error - '}
            <button className={`${s.parpadea} ${s.e404}`} >
            <Link className={s.link} to='/asdf'>404error</Link>
        </button>
            </li>
        </ul>
        </div>
        </div>
        </div>
    )
}

export default Welcome;