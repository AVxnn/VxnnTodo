import { Routes, Route } from "react-router-dom";
import Started from "./pages/started/started";
import './style.css'
import Registration from "./pages/registration/registration";
import { app } from './features/firebase/firebase'
import Login from "./pages/login/login";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Started />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
