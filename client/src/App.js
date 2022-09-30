import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Navbar from './components/navigation/Navbar';
// pages
import Profiles from './pages/profiles';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<Profiles />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
