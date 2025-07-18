import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, Target, Globe, Heart, Shield, Handshake
} from 'lucide-react';

import heroImage from '../../assets/hero-image.jpg';
import communityImage1 from '../../assets/community-1.jpg';
import { galerieHome } from '../../data/galerieHome';

const Home = () => {
  const stats = [
    { number: '130+', label: 'ONG Membres', icon: Users },
    { number: '7.2M', label: 'Personnes dans le besoin', icon: Heart },
    { number: '13', label: 'Domaines d\'intervention', icon: Target },
    { number: '100%', label: 'Territoire malien couvert', icon: Globe },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Humanité',
      description: 'Respect des principes humanitaires d\'humanité, d\'impartialité, de neutralité et d\'indépendance'
    },
    {
      icon: Shield,
      title: 'Dignité',
      description: 'L\'égale dignité de tous les êtres humains indépendamment de leurs appartenances'
    },
    {
      icon: Handshake,
      title: 'Équité',
      description: 'L\'équité et l\'égalité du genre dans toutes nos interventions'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Unissons nos forces pour sauver des vies au Mali
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Notre sens de l'humanité nous interpelle, agissons maintenant pour un impact durable !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apropos" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              Découvrir la PONAH
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              to="/membres" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Rejoindre la plateforme
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La Plateforme des ONG Nationales Actives dans l'Humanitaire (PONAH) a pour mission de 
                renforcer la coordination des interventions humanitaires au Mali en mutualisant les 
                expériences, expertises et ressources de ses membres.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Renforcer la coordination des interventions des ONG membres',
                  'Mutualiser les expériences et les ressources',
                  'Promouvoir l\'approche « localisation »',
                  'Engager des actions de plaidoyer'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/apropos" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold group"
              >
                En savoir plus
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src={communityImage1} 
                alt="Communauté bénéficiaire" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La PONAH repose sur des valeurs cardinales qui guident toutes nos actions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Mises à jour */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Mises à jour PONAH</h2>
            <Link
              to="/actualites"
              className="text-primary hover:text-primary/80 font-semibold flex items-center group"
            >
              Voir tout
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-6">
              {galerieHome.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="min-w-[280px] md:min-w-[340px] bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-sm text-primary font-medium mb-1">{item.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.type}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l’action */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez-nous dans notre mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons faire une différence significative et durable pour ceux qui en ont le plus besoin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/membres" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Devenir membre
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
