import React from "react";
import logo from "../../images/mealdb-logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="header-nav">
                <img src={logo} alt="" />
            </nav>
        </div>
    );
};

export default Header;
