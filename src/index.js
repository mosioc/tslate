import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function Mine() {
    return (
        <div>
            <input />
        </div>)
}

root.render(<Mine />)
// root.render(<App />)

