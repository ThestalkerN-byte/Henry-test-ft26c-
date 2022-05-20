import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar';
import Card from './components/Card';
import { characterData } from './data';
import axios from 'axios'
import { FormContainer } from './styles';
function App() {
  const imagen = 'https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png'
  // const infoPersonajes = characterData;
  // const [character, setCharacter] = useState([])
  // const [saludo, setSaludo] = useState(false);
  // useEffect(() => {
  //   axios.get('https://rickandmortyapi.com/api/character')
  //     .then((respuesta) => {
  //       setCharacter(respuesta.data.results)
  //     }).catch((error) => console.error('Error', error))
  // }, [])

  // useEffect(() => {
  //   if (saludo) {
  //     alert('SSALUDO IS TRUE ')
  //   } else {
  //     console.log('saludo is false ')
  //   }
  // }, [saludo])
  // // console.log('este es character', character)  
  // function handlerSaludo(event) {
  //   setSaludo(true)
  // }
  // const colores = ['green', 'blue']
  const [formData, setFormData] = useState({
    nombre: "",
    contraseña: ""
  })
  const isValid = (form) => {
    let isValidContraseña = !form.contraseña;
    let isValidName = !form.name;


    return isValidName || isValidContraseña
  }

  const handlerDataComplete = (event) => {
    // console.log(event.target.name)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  // console.log(formData)
  const handlerSubmit = (event) => {
    // Usar la funcion validadora 
    event.preventDefault()
    if (!isValid(formData)) {
      console.log('Es valido y mando esta data al back')
    } else {
      alert('Faltan datos a completar ')
    }

  }
  return (
    <div className="App">
      <Navbar nombre={'HENRY'} img={imagen} />

      <FormContainer>
        <form onSubmit={handlerSubmit}>
          <input type='text' autoComplete='off' onChange={handlerDataComplete} name='nombre' ></input>
          <input type='password' autoComplete='off' onChange={handlerDataComplete} name='contraseña'></input>
          <button> Enviar informacion</button>
        </form>
      </FormContainer>






      {/* {
          character.length > 0 && character.map((objeto, index) => {
            return <>
              <Card key={index} nombre={objeto.name} descripcion={objeto.origin.name} footer={objeto.gender} bkColor={colores[index]} />
            </>
          })
        } */}
      {/* <button onClick={handlerSaludo}>SALUDAME </button> */}

    </div>
  );
}

export default App;
