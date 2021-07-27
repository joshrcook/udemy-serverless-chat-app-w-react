import React from "react";

const Chats: React.FC<{}> = () => (
    <div className="container">
        <table className="table">
            <tbody></tbody>
        </table>
        <a href="people.html">
            <button type="button" className="btn btn-default">
                Start a new chat
            </button>
        </a>
    </div>
);

export default Chats;
