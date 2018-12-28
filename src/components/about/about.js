import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <p>About React from Plurasight</p>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default About;