import { Route, Routes } from 'react-router';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import './App.css';
import WorldPage from './components/WorldPage';
import Countries from './components/Countries';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
      <div className="switch">
        <label> {theme === "light" ? <FiSun /> : <FaMoon />}</label>
        <ReactSwitch 
          onChange={toggleTheme}
          checked={theme === "light"}
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WorldPage />} />
          <Route path="/:name" element={<Countries />} />
          <Route path="/:name/:id" element={<CountryDetails />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
