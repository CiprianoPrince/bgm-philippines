import { Route, Routes } from "react-router-dom"

import GlobalStyle from "./components/style/Global.style"

import BGMLayout from "./layouts/BGMLayout"

import Home from "./pages/Home"
import Service from "./pages/Service"
import Career from "./pages/Career"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Error from "./pages/Error"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<BGMLayout />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Service />} />
          <Route path='/careers' element={<Career />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='admin' element={<Admin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
