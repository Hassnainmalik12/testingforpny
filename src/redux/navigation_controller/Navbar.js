import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"flex gap-x-5"}>
            <Link to={"contact"}>contact</Link>
            <Link to={"about"}>about</Link>

        </div>
    );
};

export default Navbar;