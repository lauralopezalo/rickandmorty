import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to our website </h2>
            <button>
                <Link to='/characters-list'>Get started</Link>
            </button>
        </div>
    )
}
export default Home;