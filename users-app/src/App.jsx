
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/shared/Nav'
import Home from './components/Home'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import UpdateUser from './components/UpdateUser'

function App() {

  return (
    <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='/user-form'  element={<UserForm />} />
            <Route path='/user-list'  element={<UserList />} />
            <Route path='/update-user/:id'  element={<UpdateUser />} />
          </Routes>
        </div>
    </BrowserRouter>
   
  )
}

export default App
