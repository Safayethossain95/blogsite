
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
import DashboardPage from './pages/dashboard/DashboardPage';
import TeamsDashPage from './pages/dashboard/TeamsDashPage';
import ServicesDashPage from './pages/dashboard/ServicesDashPage';
import ProtectedRoute from './components/utility/ProtectedRoute';
import {Toaster} from "react-hot-toast";
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Toaster position="top-center"/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
            path="/dashboard"
            element={
              <DashboardPage />
            }
          />
        <Route
            path="/dashboard/teams"
            element={
              <TeamsDashPage />
            }
          />
        <Route
            path="/dashboard/services"
            element={
              <ServicesDashPage />
            }
          />
      </Routes>
    </BrowserRouter>
 
  
    </>
  )
}

export default App
