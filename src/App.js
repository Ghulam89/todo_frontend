import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./screens/Home";
import AboutUs from "./screens/aboutUs";
import ContactUs from "./screens/contactUs";
// import { AnimatePresence } from "framer-motion";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ToastContainer/>
      {/* <AnimatePresence mode="wait"> */}
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
