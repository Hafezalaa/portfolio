import { Outlet } from "react-router-dom"
import Header from "./Sub Components/Header"
import Footer from "./Sub Components/Footer"
import Sidebar from "./Sub Components/Sidebar"

const Layout = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout