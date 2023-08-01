import { Route, Routes } from "react-router-dom"

import GlobalStyle from "./components/style/Global.style"

import BGMLayout from "./layouts/BGMLayout"

import Home from "./pages/Home"
import Service from "./pages/Service"
import Career from "./pages/Career"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Error from "./pages/Error"

import BGMAdminLayout from "./features/admin/layout/BGMAdminLayout"
import Admin from "./pages/Admin"
import Aboutt from "./pages/Aboutt"
import Carrers from "./pages/Carrers"
import Servicess from "./pages/Servicess"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<BGMLayout />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Servicess />} />
          <Route path='/careers' element={<Carrers />} />
          <Route path='/about' element={<Aboutt />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />

          <Route path='admin' element={<BGMAdminLayout />}>
            <Route index element={<Admin />} />
            <Route path=':resource' element={<Admin />} />
          </Route>
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
