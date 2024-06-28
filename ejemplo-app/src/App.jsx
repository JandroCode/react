
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { UserList } from './components/UserList'
import { Nav } from './components/shared/Nav'
import { Home } from './components/Home'
import { UserForm } from './components/UserForm'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user-form' element={<UserForm />} />
          <Route path='/users-list' element={<UserList/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
