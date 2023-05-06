import { Route, Routes } from 'react-router';
import './App.css';
import WorldPage from './components/WorldPage';
import Countries from './components/Countries';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<WorldPage />} />
        <Route path="/:name" element={<Countries />} />
        <Route path="/:name/:id" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
