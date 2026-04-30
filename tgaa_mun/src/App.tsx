import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Committees from './pages/Committees';
import Secretariat from './pages/Secretariat';
import Registration from './pages/Registration';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ'; 
import Press from './pages/Press';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />; // ✅ FIXED
      case 'committees':
        return <Committees />;
      case 'secretariat':
        return <Secretariat />;
      case 'register':
        return <Registration />;
      case 'resources':
        return <Resources />;
      case 'faq':
        return <FAQ onNavigate={setCurrentPage} />; 
      case 'contact':
        return <Contact />;
      case 'press':
          return <Press onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;