import React from "react";
import fotocreator from "../creator.jpg"
import s from './About.module.css'

const About = () => {

    return (

        <div className={s.main}>

        <div className={s.abauti}>
            <h1 className={s.t} >CREATOR</h1>
            <h2 className={s.t} >UKTAVH</h2>
            <p className={s.p} >"The shortest the waiting, the better the code." - Me</p>
            <p className={s.p} > "For in dreams we enter a world that is entirely our own." - Dumbledore</p>
        </div>
            
            <div className={s.foti}>
                <img className={s.fotu} src={fotocreator} alt='author' title="Mi alma, mi religion, mi motor: V.K"/>
            </div>
        </div>

    )

}

export default About;