// src/data/activitiesData.js

const events = [
  {
    id: 1,
    title: 'Atelier de restitution du Baromètre',
    description: 'Validation des 9 axes pour la stratégie nationale.',
    date: '29-30 octobre 2024',
    location: 'CICB, Bamako',
    image: '/images/event1.jpg',
    slug: 'atelier-restitution-barometre',
    link: '/activites/evenements/atelier-restitution-barometre'
  },
  {
    id: 2,
    title: 'Formation GRS - Projet PARTAGE',
    description: '360 acteurs des OSC formés à Mopti, Ségou, Gao.',
    date: 'Novembre-Décembre 2024',
    location: 'Mopti, Ségou, Gao',
    image: '/images/event2.jpg',
    slug: 'formation-grs-partage-2024',
    link: '/activites/evenements/formation-grs-partage-2024'
  },
  {
    id: 3,
    title: 'Lancement du Baromètre de la Localisation',
    description: 'Présentation du cadre général et méthodologique.',
    date: '29-30 mai 2024',
    location: 'CICB, Bamako',
    image: '/images/event3.jpg',
    slug: 'lancement-barometre-localisation-2024',
    link: '/activites/evenements/lancement-barometre-localisation-2024'
  },
  {
    id: 4,
    title: 'Table ronde sur la Localisation',
    description: 'Évaluation des recommandations du forum.',
    date: '03 mai 2024',
    location: 'CICB, Bamako',
    image: '/images/event4.jpg',
    slug: 'table-ronde-localisation-2024',
    link: '/activites/evenements/table-ronde-localisation-2024'
  }
];

const missions = [
  {
    id: 1,
    title: 'Mission de plaidoyer au Qatar',
    description: 'Rencontres avec Qatar Charity et QFFD.',
    date: '16-20 septembre 2024',
    image: '/images/mission1.jpg',
    slug: 'mission-plaidoyer-qatar-2024',
    link: '/activites/missions/mission-plaidoyer-qatar-2024'
  },
  {
    id: 2,
    title: 'Lobby Tour aux États-Unis',
    description: 'Plaidoyer pour positionner les ONG locales.',
    date: 'Juin 2024',
    image: '/images/mission2.jpg',
    slug: 'lobby-tour-etats-unis-2024',
    link: '/activites/missions/lobby-tour-etats-unis-2024'
  },
   {
    id: 3,
    title: 'Participation stratégique à l’atelier régional du FONGA sur la localisation de l’aide',
    description: 'La retraite des forums d’ONG d’Afrique de l’Ouest et Centrale à Dakar. Cet événement crucial, organisé par le FONGA du 9 au 13 février 2026, a été une plateforme d’échanges de haut niveau sur l’avenir de l’action humanitaire dans la région.',
    date: '09-13 fevrier 2026',
    image: '/images/mission3.jpg',
    slug: 'atelier-régional-du-FONGA-dakar-2026',
    link: '/activites/missions/atelier-régional-du-FONGA-dakar-2026'
  }
];

const trainings = [
  {
    id: 1,
    title: 'Formation des Coachs en GRS',
    description: 'Techniques d\'apprentissage et gestion des risques.',
    period: 'Novembre-Décembre 2024',
    image: '/images/training1.jpg',
    slug: 'formation-coachs-grs-2024',
    link: '/activites/formations/formation-coachs-grs-2024'
  },
  {
    id: 2,
    title: 'Formation Assurance Qualité',
    description: 'Session dans le cadre du projet LOCAL.',
    period: '21-25 octobre 2024',
    image: '/images/training2.jpg',
    slug: 'formation-assurance-qualite-2024',
    link: '/activites/formations/formation-assurance-qualite-2024'
  },
  {
    id: 3,
    title: 'Consultation des OSC',
    description: 'Cartographie de 65 organisations.',
    period: '2024',
    image: '/images/training3.jpg',
    slug: 'consultation-osc-2024',
    link: '/activites/formations/consultation-osc-2024'
  }
];

export default { events, missions, trainings };
