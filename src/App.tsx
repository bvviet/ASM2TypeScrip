import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";
import PayPage from "./pages/Pay";
import Admin from "./pages/Admin/trips";
//import Admin from "./Layout/Admin";
// import DetailPage from "./pages/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/pay" element={<PayPage />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
