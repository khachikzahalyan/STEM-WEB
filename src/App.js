import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Importance from './pages/Importance/Importance';
import Problems from './pages/Problems/Problems';
import Future from './pages/Future/Future';
import Sources from './pages/Sources/Sources';
import SourcesDetail from './pages/Sources/SourcesDetails/SourcesDetails';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ScrollToTop from './Utile/ScrollToTop';
import Booking from './pages/Booking/Book';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/importance" element={<Importance />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/future" element={<Future />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/detail/:sectionIndex/:itemIndex" element={<SourcesDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
