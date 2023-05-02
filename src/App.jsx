import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import UserPage from './components/UserPage';
import CommunityPage from './components/CommunityPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:userId" element={<UserPage />} />
        <Route path="/community/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
