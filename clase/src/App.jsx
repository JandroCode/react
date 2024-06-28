
import './App.css'
import ComponenteDos from './components/ComponenteDos'
import ComponenteUno from './components/ComponenteUno'
import Contador from './components/Contador'
import Form from './components/Form'
import Lista from './components/Lista'
import SecondForm from './components/SecondForm'
import Users from './components/Users'


function App(){

  const num = 2

  return(
    <>
      <h1>Componente principal</h1>
      <ComponenteUno numero={num} message={'Hola desde el componente principal'} />

      <hr />

      <Contador />

      <hr />

      <Lista />
      <hr />

      <Form />

      <hr />

      <SecondForm />

      <hr />

      <Users />


    </>
  )
}

export default App

