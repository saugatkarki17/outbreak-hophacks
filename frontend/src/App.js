import './App.css';
import Map from './components/Map';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/nav';
import Footer from './components/footer';
import InteractiveChart from './components/interactivechart';
import AboutUs from './components/about';

function App() {
  return (

    <Router>
      <div className="App">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/chart" element={<InteractiveChart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
