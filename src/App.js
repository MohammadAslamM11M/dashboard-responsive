import Home from "./components/pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accounts from "./components/pages/Accounts/Accounts";
import Payroll from "./components/pages/Payroll/Payroll";
import Reports from "./components/pages/Reports/Reports";
import Advisor from "./components/pages/Advisor/Advisor";
import Contact from "./components/pages/Contact/Contact";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/accounts" exact element={<Accounts />}></Route>
                    <Route path="/payroll" exact element={<Payroll />}></Route>
                    <Route path="/reports" exact element={<Reports />}></Route>
                    <Route path="/advisor" exact element={<Advisor />}></Route>
                    <Route path="/contact" exact element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
