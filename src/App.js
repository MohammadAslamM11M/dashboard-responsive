import Dashboard from "./components/pages/Dashboard/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Dashboard />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
