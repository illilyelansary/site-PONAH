// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Members from './components/pages/Members';
import Activities from './components/pages/Activities';
import Publications from './components/pages/Publications';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import ActualiteDetail from "./pages/detail/ActualiteDetail";
import EvenementDetail from "./pages/detail/EvenementDetail";
import MissionDetail from "./pages/detail/MissionDetail";
import FormationDetail from "./pages/detail/FormationDetail";
import PublicationDetail from "./pages/detail/PublicationDetail";

<Route path="/actualites/:slug" element={<ActualiteDetail />} />
<Route path="/activites/evenements/:slug" element={<EvenementDetail />} />
<Route path="/activites/missions/:slug" element={<MissionDetail />} />
<Route path="/activites/formations/:slug" element={<FormationDetail />} />
<Route path="/publications/:slug" element={<PublicationDetail />} />


function App() {
  // Exemple de fonction d'inscription (à adapter selon votre backend)
  const handleRegister = async (formData) => {
    try {
      const res = await fetch('https://votre-api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        const err = await res.json();
        // Apostrophe correctement échappée ci-dessous
        throw new Error(err.message || 'Échec de l\'inscription');
      }
      const data = await res.json();
      // … votre logique post-inscription
      return data;
    } catch (err) {
      console.error(err);
      alert(err.message);
      throw err;
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/membres" element={<Members />} />
            <Route path="/activites" element={<Activities />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            {/* Page d'administration accessible uniquement via URL directe */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
