import React from "react";
import "./App.css";
import WhatToDo from "./WhatToDo/WhatToDo";

class App extends React.Component {
    render() {
        return (
            <div className="app-area">
                <WhatToDo />
            </div>
        );
    }
}

export default App;
