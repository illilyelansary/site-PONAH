// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import LogoPonah from '../assets/LogoPonah.png'; // <-- import du logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/10">
                <img
                  src={LogoPonah}
                  alt="Logo PONAH"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">PONAH</h3>
                <p className="text-gray-300 text-sm">
                  Plateforme des ONG Nationales Actives dans l'Humanitaire
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Unissons nos forces pour sauver des vies au Mali. Notre sens de
              l'humanité nous interpelle, agissons maintenant pour un impact
              durable !
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Heart size={20} />
              <span className="text-sm">Ensemble, nous sommes plus forts</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/apropos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/membres"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nos Membres
                </Link>
              </li>
              <li>
                <Link
                  to="/activites"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nos Activités
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/actualites"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300 text-sm">Rue 737 Porte 419</p>
                  <p className="text-gray-300 text-sm">
                    Banankabougou, Bamako, Mali
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">+223 79 37 16 43</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  ponah.mali@gmail.com
                </p>
                <p className="text-gray-300 text-sm">
                  secretariat@ponah.org
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 PONAH. Tous droits réservés.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Enregistrée sous le N° 00003 MATD-DGAT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
