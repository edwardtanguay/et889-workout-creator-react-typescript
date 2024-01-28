import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <div className="w-full p-4">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
