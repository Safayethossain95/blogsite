
import './App.css'
import Homepage from './pages/Homepage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
 
  
    </>
  )
}

export default App
