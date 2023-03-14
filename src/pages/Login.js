import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>Login Demo Page</h1>
            <Link to="/">
            <h3>
                Back to Home Page
            </h3>
        </Link>
        </div>
    );
}
export default Login;