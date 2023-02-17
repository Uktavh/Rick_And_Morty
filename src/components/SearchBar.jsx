import React, { useState } from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

const [character,setCharacter] = useState ('') 


const handleChange = (event) => {
   setCharacter(event.target.value)
}

   return (
      <div className={s.searchi}>
         <input className={s.inputi} type='search' value={character} onChange={handleChange} autoFocus placeholder='id card' />
         <button className={s.agregui} onClick={()=>onSearch(character)}>ADD CARD</button>
      </div>
   );
}
