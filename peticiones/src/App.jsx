
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './layouts/Nav'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import UpdatePage from './pages/UpdatePage'

function App() {

  return (
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element = { <HomePage /> } />
          <Route path='/register' element = { <RegisterPage /> }  />
          <Route path='/update/:id' element = { <UpdatePage /> } />
        </Routes>

      </BrowserRouter>

  )
}

export default App
