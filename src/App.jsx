import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Service from "./pages/Service"
import Career from "./pages/Career"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

import BGMLayout from "./layouts/BGMLayout"

import GlobalStyle from "./components/style/Global.style"

import SideNavProvider from "./context/SideNavContext"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <SideNavProvider>
        <Routes>
          <Route path='/' element={<BGMLayout />}>
            <Route index element={<Home />} />
            <Route path='/services' element={<Service />} />
            <Route path='/careers' element={<Career />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/*' element={<Error />} />
        </Routes>
      </SideNavProvider>
    </>
  )
}

export default App
