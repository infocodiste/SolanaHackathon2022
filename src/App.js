import './style.css';
import Navbar from './components/Navbar'
import Home from "./components/Home";
import DaoDetail from './components/DaoDetail'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:dao" element={<DaoDetail/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
