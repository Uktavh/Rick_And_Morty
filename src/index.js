import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider> 
  ,
  document.getElementById('root')
)

const observer = new IntersectionObserver ((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting)entry.target.classList.add('show')
      else entry.target.classList.remove("show")
  })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=>observer.observe(el))

