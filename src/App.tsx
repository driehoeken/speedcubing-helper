import React from "react";
import "./App.css";
import Timer from "./Timer/Timer";
import Cases from "./Cases/Cases";
import History from "./History/History";

function App() {
    return (
        <>
            <Cases />
            <Timer />
            <History />
        </>
    );
}

export default App;
