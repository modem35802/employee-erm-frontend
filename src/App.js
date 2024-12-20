import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComoponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
        <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees/all" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
