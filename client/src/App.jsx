import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  NavbarCustom  from './components/navbar/NavbarCustom.jsx';
import  Footer  from './components/footer/Footer.jsx';
import  HomeView  from './views/homeView/HomeView.jsx';
import  Contact  from './views/contact/Contact.jsx';
import  Favorite  from './views/favorite/Favorite.jsx';
import  Junior  from './views/junior/Junior.jsx';
import  Login  from './views/login/Login.jsx';
import  SignUp  from './views/signUp/SignUp.jsx';
import  WorkWithUs  from './views/workWithUs/WorkWithUs.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <BrowserRouter>
        <NavbarCustom />
        <Routes>
          <Route index element={<HomeView />} />
         
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/junior" element={<Junior />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/workWithUs" element={<WorkWithUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
