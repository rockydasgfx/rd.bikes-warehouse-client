import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
