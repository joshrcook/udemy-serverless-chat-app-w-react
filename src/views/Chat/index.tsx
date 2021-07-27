import React from "react";

const Chat: React.FC = () => (
    <>
        <div className="container" id="chat">
            &nbsp;
        </div>

        <nav className="navbar navbar-default navbar-fixed-bottom">
            <div className="container">
                <div className="col-xs-12">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="Start typing here..."
                        />
                        <span className="input-group-btn">
                            <button
                                type="button"
                                className="btn btn-primary"
                                id="send"
                            >
                                Send
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </>
);

export default Chat;
