import {Routes, Route} from 'react-router-dom'
import Home from './slides/Home'
import CreateTheory from './slides/CreateTheory'
import UpdateTheory from './slides/UpdateTheory'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='App'>
      <Navbar />
        <div className='slides'>
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/create"
              element={<CreateTheory/>}
            />
            <Route
              path="/update"
              element={<UpdateTheory/>}
            />
          </Routes>
        </div>
    </div>
  )
}

export default App
