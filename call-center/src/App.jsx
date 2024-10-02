import React from 'react'
 import HomePage from './components/Home/HomePage'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
 import Department from './components/Department/Department'




const App = () => {
  return (
    <div>
       {/* <Navbar/>  */}
      <HomePage/> 
      <About/>
       <Department/> 
      <Testimonials/>
      
    </div>
  )
}

export default App
