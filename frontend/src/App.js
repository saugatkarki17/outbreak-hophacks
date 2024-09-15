import './App.css';
import Map from './components/Map';
import Navigation from './components/nav';
import Footer from './components/footer';
import InteractiveChart from './components/interactivechart';

function App() {
  return (

    <div className="App">
      <Navigation />
      <Map/>
      <InteractiveChart/>
      <Footer/>

      
    </div>

  );
}

export default App;
