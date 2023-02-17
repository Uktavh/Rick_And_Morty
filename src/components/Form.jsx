import React from 'react'
import { useState } from 'react'
import s from './Form.module.css'

const validation = (inputs) => {
    const errors = {}
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    
    if (!inputs.email) {
        errors.email = 'Debe ingresar un email.'
    }
    else if (!regEx.test(inputs.email)) {
        errors.email = 'El email ingresado no es válido.'
    }
    else if (inputs.email.length>=35) {
        errors.email = 'El email no puede alcanzar los 35 carácteres.'
    }
    if (!inputs.password.match(/\d/) || inputs.password.length<6 || inputs.password.length>10){
        errors.password = 'El password debe incluir un número, y una longitud entre 6 y 10 carácteres.' 
    }
    return errors
}

const Form = ({login})=> {

    const [userData,setUserData] = useState({
        email:'',
        password:'',
    })

    const [errors,setErrors] = useState({
        email:'',
        password:'',
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const e =Object.values(errors)
        if(e.length===0){
        setUserData ({
            email: '',
            password: '',
        })
        setErrors({
          email: '',
          password: '',
        })
        // alert('Datos completos')
        login(userData)}
        else{
          alert('Debe llenar correctamente todos los campos')
        }
    }

    return (
        <div className={s.main}>

        <form className={s.form} onSubmit={handleSubmit}>
            <label>Email:</label><input name='email' type='text' value={userData.email} onChange={handleInputChange} ></input>
            <div className={s.normal} >

            <p className={s.e}>{errors.email}</p>
            <br/>
            </div>
            <label>Password:</label><input name='password' value={userData.password} onChange={handleInputChange} ></input>
            <div className={s.normal} >

            <p>{errors.password}</p>
            <br/>
            </div>
            <button className={s.login} type='submit'>LOGIN</button>
            <br/>
            <span className={s.normal}>login as an invited user</span>
            <span className={s.normal}>username = 'invited@user.com'</span>
            <span className={s.normal}>password = '123456'</span>

        </form>
        </div>
    )
}

export default Form;