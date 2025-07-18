// src/data/galerieHome.js

import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import publication1 from '../assets/publication1.jpg';
import publication2 from '../assets/publication2.jpg';
import publication3 from '../assets/publication3.jpg';

export const galerieHome = [
  // Actualités (tirées de News.jsx)
  {
    title: 'Validation de la Stratégie Nationale de Localisation',
    date: '30 octobre 2024',
    image: news1,
    type: 'Actualité',
    link: '/actualites'
  },
  {
    title: 'Formation de 360 acteurs sur les risques de sécurité',
    date: '15 décembre 2024',
    image: news2,
    type: 'Actualité',
    link: '/actualites'
  },
  {
    title: 'Mission de plaidoyer fructueuse au Qatar',
    date: '20 septembre 2024',
    image: news3,
    type: 'Actualité',
    link: '/actualites'
  },

  // Activités (tirées de Activities.jsx)
  {
    title: 'Atelier du Baromètre de la Localisation',
    date: '29-30 mai 2024',
    image: event1,
    type: 'Activité',
    link: '/activites'
  },
  {
    title: 'Formation de 360 OSC sur la Sécurité',
    date: 'Nov-Déc 2024',
    image: event2,
    type: 'Activité',
    link: '/activites'
  },
  {
    title: 'Lobby Tour aux États-Unis',
    date: 'Juin 2024',
    image: event3,
    type: 'Mission',
    link: '/activites'
  },

  // Publications (tirées de Publications.jsx)
  {
    title: 'Rapport Annuel 2024',
    date: 'Décembre 2024',
    image: publication1,
    type: 'Publication',
    link: '/publications'
  },
  {
    title: 'Document de Lobby Tour',
    date: 'Juin 2024',
    image: publication2,
    type: 'Publication',
    link: '/publications'
  },
  {
    title: 'Étude du Baromètre de la Localisation',
    date: 'Octobre 2024',
    image: publication3,
    type: 'Étude',
    link: '/publications'
  }
];
