import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
            </ul>
        );
    }
}

export default Navbar;