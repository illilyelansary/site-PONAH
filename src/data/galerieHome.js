import barometreRestitution from '../assets/actualites/barometre-restitution.jpg';
import formation360 from '../assets/actualites/formation-360.jpg';
import missionQatar from '../assets/actualites/mission-qatar.jpg';
import rapportAnnuel from '../assets/publications/rapport-2024.jpg';

export const galerieHome = [
  // Activités
  {
    type: 'Activité',
    slug: 'barometre-restitution',
    title: 'Atelier du Baromètre de la Localisation',
    date: '29-30 octobre 2024',
    image: barometreRestitution,
    link: '/actualites/barometre-restitution'
  },
  {
    type: 'Activité',
    slug: 'formation-360',
    title: 'Formation sur la gestion des risques',
    date: 'Nov-Déc 2024',
    image: formation360,
    link: '/actualites/formation-360'
  },
  {
    type: 'Mission',
    slug: 'mission-qatar',
    title: 'Plaidoyer humanitaire au Qatar',
    date: '16-20 sept. 2024',
    image: missionQatar,
    link: '/actualites/mission-qatar'
  },

  // Publication
  {
    type: 'Publication',
    slug: 'rapport-annuel-2024',
    title: 'Rapport Annuel de la PONAH 2024',
    date: 'Mars 2025',
    image: rapportAnnuel,
    link: '/publications#rapport-annuel-2024'
  }

  // Tu peux ajouter ici d’autres actualités ou documents
];
