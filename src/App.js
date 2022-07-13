import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/partials/Navbar';
import MainLayout from './layouts/MainLayout';
import { routes } from './router/routes'
import { BrowserRouter, Routes } from "react-router-dom"

function App() {
  console.log(routes);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((e)=> e)}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
