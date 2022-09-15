import { Link } from "react-router-dom"
import React from 'react';
import Users from './Users'

const Admin = () => {
    return (
        <section>
            <h1></h1>
            <br />
            <Users />
            <div>
                <Link to="/home ">Home</Link>
            </div>
        </section>
    );
};

export default Admin;