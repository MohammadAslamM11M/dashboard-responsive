import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Sidebar />
            <Dashboard />
        </div>
    );
}

export default App;
