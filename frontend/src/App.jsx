import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Team"
import Pages from "./pages/Pages"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import ServicesDetail from './pages/ServicesDetail'
import TeamDetail from './pages/TeamDetail'
import Casestudy from './pages/Casestudy'
import CasestudyDetail from './pages/CasestudyDetail'
import Blogs from './pages/Blogs'
import BlogsDetail from './pages/BlogsDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Changelog from './pages/Changelog'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Routes for the pages */}
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path="/services/:id" element={<ServicesDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/teams' element={<Team />} />
        <Route path="/teams/:id" element={<TeamDetail />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/casestudy' element={<Casestudy />} />
        <Route path="/casestudy/:id" element={<CasestudyDetail />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/changelog" element={<ProtectedRoute><Changelog /></ProtectedRoute>} />
        <Route path="/adminpage" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
      

        <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
