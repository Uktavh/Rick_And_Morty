import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
// import SearchBar from './components/SearchBar.jsx'
// // import characters, { Rick } from './data.js'
// import characters from './data.js'
import Nav from './components/Nav.jsx'
import { useEffect, useState } from 'react'
import { Route,Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import E404 from './components/E404.jsx'
import Form from './components/Form.jsx'
import Welcome from './components/Welcome'
import Favos from './components/Favos'

function App () {

  const [characters,setCharacters] = useState([])

  const location = useLocation()
  const [access,setAccess] = useState (false)
  const username = 'invited@user.com'
  const password = '123456'
  const navigate = useNavigate()

  const login =(userData) => {
    if (userData.password === password && userData.email === username) {
       setAccess(true);
       navigate('/home');
       alert(`Bienvenido ${username}`)
    }
    else {
      alert('Usuario no registrado')
    }
  }

  useEffect(() => {
  !access && navigate('/');
  }, [access]);

  const cardsRepeat = function (dataId) {
  const repeat = []
  characters.map((element) => {
    if(element.id === dataId) repeat.push('personaje repetido')
  })
  return repeat
  }

  const onSearch = (character) => {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
           if (data.name) {
            const repetidas = cardsRepeat(data.id)
            repetidas.length === 0 ? setCharacters((oldChars) => [...oldChars, data]) : console.log('no repe');
           } else {
              window.alert('No hay personajes con ese ID');
           }
      })
  }

  const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    
    <div className='App'>

        {location.pathname=== '/'?<Form login={login} /> : <Nav onSearch={onSearch}/>}
        
        <Routes>
          <Route path='/about' element={<About />}  ></Route>
          <Route path='/cards' element={<Cards onClose={onClose} characters={characters} />} ></Route> {/*ver como hacerle para poner el slidein*/}
          <Route path='/detail/:detailId' element={<Detail />} ></Route>
          <Route path='/:anything' element={<E404 />}></Route>
          <Route path='/home' element={<Welcome/>}></Route>
        </Routes>
    </div>
  )
}

export default App