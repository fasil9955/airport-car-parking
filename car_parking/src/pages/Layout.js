import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./header"
//import Footer from "./Footer"

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            
        </div>
    )
}
export default Layout;