
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Blog from './components/Blog/Blog.jsx'
import Contact from './components/Contact/Contact.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
