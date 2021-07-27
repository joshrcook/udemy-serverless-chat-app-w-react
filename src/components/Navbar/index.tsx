import React from "react";

const Navbar: React.FC = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">
                    Serverless Chat
                </a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="chats.html">Conversations</a>
                    </li>
                    <li>
                        <a href="#">Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
