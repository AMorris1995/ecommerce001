import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Appbar from "./Components/Appbar/Appbar";
import AccountPage from "./Pages/AccountPage/AccountPage";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
    return (
        <>
            <Appbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </>
    );
}

export default App;
