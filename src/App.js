import Home from "./components/pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
