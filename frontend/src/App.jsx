import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Register from "./pages/register"
import Profile from "./pages/profile"
import { Layout } from "./layout/layout"
import { Login } from "./pages/login"
function App() {

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
