import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Details from "./Components/Details";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Components/Login" element={<Login />} />
                    <Route path="/Components/Home" element={<Home />} />
                    <Route path="/Components/Details" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
