import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>404... Oops!</p>
            <button><Link to='/'>Go back home</Link></button>
        </div>
    )
}

export default NotFound;