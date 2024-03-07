import {Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from './slides/Home'
import CreateTheory from './slides/CreateTheory'
import UpdateTheory from './slides/UpdateTheory'
import Navbar from './components/Navbar'
import Login from './slides/Login'
import Signup from './slides/signup.jsx'


function App() {
  const {user, logout} = useAuthContext()

  return (
    <div className='App '>
      <Navbar />
        <div className='slides'>
          <Routes>
            <Route
              path="/"
              element={user ? <Home/>: <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to="/" />}
            />
            {user && (
            <>
              <Route path='/create' element={<CreateTheory />} />
              <Route path='/update/:id' element={<UpdateTheory />} />
            </>
          )}
          <Route
            path='/logout'
            element={<Navigate to='/login' replace={true} />}
            onClick={() => logout()}
          />
          </Routes>
        </div>
    </div>
  )
}

export default App
