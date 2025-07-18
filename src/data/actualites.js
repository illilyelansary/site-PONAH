import barometreRestitution from '../assets/barometre-restitution.jpg';
import formation360 from '../assets/formation-360.jpg';
import missionQatar from '../assets/mission-qatar.jpg';

export const actualites = [
  {
    slug: 'barometre-restitution',
    category: 'Événement',
    title: 'Atelier de restitution du Baromètre de la Localisation',
    date: '29-30 octobre 2024',
    location: 'CICB, Bamako',
    participants: 'Ministre MSDS, ONG membres, partenaires',
    image: barometreRestitution,
    description: `Validation des 9 axes stratégiques pour l’élaboration de la Stratégie Nationale de Localisation.`,
    content: `Contenu complet à afficher dans la page dédiée.`
  },
  {
    slug: 'formation-360',
    category: 'Formation',
    title: 'Formation de 360 acteurs sur la gestion des risques de sécurité',
    date: 'Novembre-Décembre 2024',
    location: 'Mopti, Ségou, Gao',
    participants: '357 acteurs locaux dont 91 femmes (25,49%)',
    image: formation360,
    description: `Renforcement des capacités de 72 OSC dans les régions concernées.`,
    content: `Détails des modules et résultats obtenus...`
  },
  {
    slug: 'mission-qatar',
    category: 'Mission',
    title: 'Mission conjointe de plaidoyer au Qatar',
    date: '16-20 septembre 2024',
    location: 'Doha, Qatar',
    participants: 'PONAH - FONGIM - Bailleurs qataris',
    image: missionQatar,
    description: `Mobilisation de financements auprès d’acteurs non traditionnels.`,
    content: `Rencontres avec Qatar Charity, QFFD, etc.`
  }
];
