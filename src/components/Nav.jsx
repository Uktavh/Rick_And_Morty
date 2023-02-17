import React from "react";
import SearchBar from "./SearchBar";
import s from './Nav.module.css'
import { Link, useLocation } from "react-router-dom";

export default function Nav ({onSearch}) {
    const location = useLocation()
return (
    <nav className={s.navbar}>

{location.pathname=== '/cards'? <SearchBar onSearch={onSearch}/>:<div/> }


        


        {location.pathname=== '/about'? <div/>:         <button className={s.button} >
            <Link className={s.link} to='/about' >ABOUT</Link>
        </button> }


        {location.pathname=== '/cards'? <div/>:        <button className={s.button} >
            <Link className={s.link} to='/cards' >CARDS GAME</Link>
        </button> }


        {location.pathname=== '/home'? <div/>:        <button className={s.button} >
            <Link className={s.link} to='/home' >HOME</Link>
        </button> }

        <button className={s.buttonlogout} >
            <Link className={s.link} to='/' >LOGOUT</Link>
        </button>

</nav>
)}