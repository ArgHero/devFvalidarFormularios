import { useState } from 'react'

import Formulario from './components/formulario/Formulario';

import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import './App.css'//Hoja de estilos

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container'>
      <h1>Validación de un forumlario</h1>
      <Formulario />
    </main>
  )
}

export default App
