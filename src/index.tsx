import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Chats from "./views/Chats";
import Chat from "./views/Chat";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/chat/:id">
                    <Chat />
                </Route>
                <Route path="/chats">
                    <Chats />
                </Route>
                <Route path="/">
                    <Redirect to="/chats" />
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
