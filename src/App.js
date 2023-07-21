import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
