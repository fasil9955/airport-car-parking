import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer"

const Login = () => {
    
    return (
        <div>
            
            <h3>LOGIN  PAGE</h3>
            <br/>
            <h6>HOMEPAGE </h6>
            <left>
            <Link to="/">
            <button >Press Here to go back to Homepage</button>
            </Link>
            </left>
            <Footer>
            </Footer>
        </div>
    );
}
export default Login;