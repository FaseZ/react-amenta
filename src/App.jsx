import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Registro from './components/Register/Register';

function App() {
    return (
        <div className="bg-dark">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/Registro" element={<Registro />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;