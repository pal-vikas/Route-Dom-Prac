
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import { Routes, Route} from 'react-router-dom'
import Error from './pages/Error'
import Profile from './component/Profile'
import UserInfo from './component/UserInfo'
import Contact from './pages/Contact'

function App() {

  return (
    <>
          <Navbar/>

          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/:name' element={<UserInfo/>} />
                <Route path='*' element={<Error/>}/>
          </Routes>
    </>
  )
}

export default App
