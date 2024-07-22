import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Services from '../pages/Services'
import Contact  from '../pages/Contact'
import Experts from '../pages/Expert/Experts'
import Expertdetail from '../pages/Expert/Expertdetail'
import {Routes,Route} from 'react-router-dom'
const Routers = () => {  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/experts' element={<Experts/>}/>
      <Route path='/experts/:id' element={<Home/>}/>
    </Routes>
  )
}

export default Routers