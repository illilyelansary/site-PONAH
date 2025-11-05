// src/components/pages/News.jsx
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, X } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Participation à l\'atelier national sur la programmation humanitaire 2026',
    excerpt: 'Le Président de la PONAH et des membres du CD ont pris part à l\'atelier national sur la programmation humanitaire 2026, présidé par le Secrétaire général du Ministère de la Santé et du Développement social.',
    content: `Ce matin 5 Octobre 2025, Le Président de la PONAH avec certains membres du CD, ont pris part à l'atelier national sur la programmation humanitaire 2026. Présidée par M. Guindo, Secrétaire général du Ministère de la Santé et du Développement social.

Cette rencontre a constitué un cadre d'échanges et de concertation entre les différents acteurs humanitaires intervenant au Mali. Elle a permis d'identifier les priorités stratégiques et de renforcer la coordination des actions en faveur des communautés vulnérables.

La participation de la PONAH à cet atelier traduit leur engagement constant à contribuer aux efforts nationaux de planification et de mise en œuvre d'une réponse humanitaire efficace, inclusive et alignée sur les besoins des populations.`,
    date: '5 octobre 2025',
    category: 'coordination',
    readTime: '3 min',
    featured: true,
    image: '/images/news7.jpg'
  },
  {
    id: 2,
    title: 'Validation de la Stratégie Nationale de Localisation',
    excerpt: 'Les 9 axes stratégiques pour l\'élaboration de la Stratégie Nationale de Localisation ont été validés lors de l\'atelier de restitution.',
    content: `L'atelier de restitution de l'étude du Baromètre de la Localisation, tenu les 29 et 30 octobre 2024 au CICB, a marqué une étape importante dans le processus de localisation de l'aide humanitaire au Mali.

Sous la présidence du Ministre de la Santé et du Développement Social, cet événement a réuni tous les acteurs clés de l'écosystème humanitaire malien. Les résultats de l'étude ont porté sur six dimensions essentielles : la capacité, la coordination, le financement, le partenariat, la participation, et la politique, influence et plaidoyer.

Les neuf axes stratégiques validés sont :
1. Cadre contextuel et légal
2. Mécanismes de coordination
3. Partenariat
4. Mécanismes de financement
5. Renforcement des capacités
6. Participation
7. Plaidoyer et communication
8. Mise en œuvre de la stratégie
9. Mécanisme de suivi évaluation et de révision

Une feuille de route a été élaborée pour guider l'élaboration de la stratégie nationale, avec un calendrier précis allant jusqu'à juin 2025 pour la validation finale.`,
    date: '30 octobre 2024',
    category: 'strategie',
    readTime: '5 min',
    featured: true,
    image: '/images/news1-new.jpg'
  },
  {
    id: 3,
    title: 'Formation de 360 acteurs sur la gestion des risques de sécurité',
    excerpt: 'Dans le cadre du projet PARTAGE, 72 OSC ont bénéficié d\'une formation complète sur la gestion des risques sécuritaires.',
    content: `La PONAH a mené avec succès la formation de 360 acteurs locaux sur la gestion des risques de sécurité dans les régions de Mopti, Ségou et Gao. Cette initiative s'inscrit dans le cadre du projet PARTAGE, financé par ECHO.

La formation a touché 357 acteurs locaux, dont 91 femmes (25,49%), représentant 72 organisations de la société civile sélectionnées. Les participants ont été formés sur les aspects essentiels de la sécurité humanitaire :

- Les bases de la gestion de la sécurité
- L'analyse du contexte sécuritaire
- L'analyse des risques
- La mise en œuvre du plan de sécurité
- La gestion des incidents et des déplacements
- La gestion de l'information en sécurité

Cette formation répond aux priorités critiques identifiées dans le rapport de recherche de GISF en collaboration avec Humanitarian Outcomes (HO), visant à renforcer les capacités des OSC locales dans un contexte sécuritaire complexe.`,
    date: '15 décembre 2024',
    category: 'formation',
    readTime: '4 min',
    featured: true,
    image: '/images/news2.jpg'
  },
  {
    id: 4,
    title: 'Mission de plaidoyer fructueuse au Qatar',
    excerpt: 'La mission conjointe FONGIM-PONAH au Qatar a permis d\'obtenir des promesses de financement et de développer de nouveaux partenariats.',
    content: `Du 16 au 20 septembre 2024, une délégation de la PONAH a participé à une mission conjointe de plaidoyer au Qatar, aux côtés du FONGIM. Cette mission visait à diversifier les sources de financement humanitaire en s'adressant aux bailleurs non traditionnels.

Les rencontres avec Qatar Charity (QC) et le Qatar Fund for Development (QFFD) ont été particulièrement fructueuses. QC a rappelé son engagement dans le financement de certaines agences des Nations Unies et ses priorités : réponse humanitaire, changement climatique, santé et éducation.

Le QFFD a confirmé que le Mali est une priorité dans leur stratégie, avec des axes d'intervention incluant :
- La sécurité alimentaire
- L'éducation
- L'adaptation de l'agriculture au changement climatique
- Le développement économique inclusif
- La santé

Cette mission a permis d'obtenir des promesses concrètes de financement et d'établir des partenariats durables avec les acteurs qataris.`,
    date: '20 septembre 2024',
    category: 'plaidoyer',
    readTime: '3 min',
    featured: false,
    image: '/images/news3.jpg'
  },
  {
    id: 5,
    title: 'Lancement du Baromètre de la Localisation',
    excerpt: 'L\'atelier de lancement du baromètre de la localisation a posé les bases méthodologiques pour évaluer les progrès de la localisation au Mali.',
    content: `Les 29 et 30 mai 2024, la PONAH a organisé l'atelier de lancement du baromètre de la localisation au CICB, marquant une étape cruciale dans l'évaluation des progrès de la localisation de l'aide humanitaire au Mali.

Cet atelier a réuni des représentants d'ONGI, du FONGIM, de la FECONG, d'OCHA, de la CAFO et des membres de la PONAH, sous la présidence d'un conseiller technique du Ministère de la Santé et du Développement Social.

Les travaux ont porté sur :
- L'historique de la localisation au Mali
- Les rôles et responsabilités des acteurs
- Le cadre général et méthodologique du baromètre
- La définition des dimensions d'évaluation

Sept groupes de travail ont été constitués pour traiter les dimensions : coordination, participation, leadership, renforcement des capacités, finances, partenariat, et politique/influence/plaidoyer.

Un comité de pilotage multi-acteurs a été proposé pour assurer le suivi de cette initiative stratégique.`,
    date: '30 mai 2024',
    category: 'recherche',
    readTime: '4 min',
    featured: false,
    image: '/images/news4.jpg'
  },
  {
    id: 6,
    title: 'Table Ronde sur l\'état d\'avancement des recommandations',
    excerpt: 'La PONAH a organisé une table ronde pour évaluer la mise en œuvre des 13 recommandations du Forum National sur la localisation.',
    content: `Le 3 mai 2024, la PONAH a organisé une table ronde au CICB avec la participation de 51 acteurs humanitaires pour faire le point sur la mise en œuvre des recommandations issues du Forum National sur la localisation de septembre 2022.

Cette rencontre, présidée par un Conseiller du Ministère de la Santé et du Développement Social, a permis d'évaluer les progrès réalisés sur les 13 recommandations clés, notamment :

- L'implication des organisations nationales et locales dans la coordination des clusters
- L'amélioration de la qualité des partenariats avec les ONG internationales
- L'harmonisation des mécanismes d'évaluation organisationnelle
- Le renforcement de la redevabilité et de la transparence

Les échanges ont mis en évidence des acquis significatifs mais aussi des défis persistants, particulièrement concernant l'accès au financement direct et la déconstruction des préjugés sur les capacités des ONG nationales.

Cette table ronde a renforcé l'engagement de tous les acteurs à poursuivre les efforts de localisation.`,
    date: '3 mai 2024',
    category: 'coordination',
    readTime: '3 min',
    featured: false,
    image: '/images/news5.jpg'
  },
  {
    id: 7,
    title: 'Création officielle de la PONAH',
    excerpt: 'La Plateforme des ONG Nationales Actives dans l\'Humanitaire a été officiellement créée et enregistrée.',
    content: `Le 18 janvier 2024 restera une date historique pour l'humanitaire malien avec la tenue de l'Assemblée Générale constitutive de la PONAH dans les locaux de l'ONG AMSS.

Cette assemblée a marqué la concrétisation d'un processus initié lors du Forum National sur la localisation de septembre 2022. Les participants ont adopté à l'unanimité les statuts, le règlement intérieur et la charte des membres de la plateforme.

Les organes de gouvernance ont été mis en place :
- Comité Directeur de 9 membres, présidé par El Mehdi Ag WAKINA
- Commissariat aux Comptes de 3 membres, présidé par Gamny IGASTANE
- Assemblée Générale annuelle comme instance suprême

L'enregistrement officiel a eu lieu le 12 février 2024 sous le numéro 00003 MATD-DGAT, suivi de la publication au Journal Officiel numéro 4 le 8 mars 2024.

Aujourd'hui, la PONAH regroupe plus de 130 ONG nationales et locales, couvrant l'ensemble du territoire malien et intervenant dans tous les domaines humanitaires.`,
    date: '18 janvier 2024',
    category: 'institutionnel',
    readTime: '4 min',
    featured: false,
    image: '/images/news6.jpg'
  }
];

const categories = [
  { id: 'all', label: 'Toutes les actualités' },
  { id: 'strategie', label: 'Stratégie' },
  { id: 'formation', label: 'Formation' },
  { id: 'plaidoyer', label: 'Plaidoyer' },
  { id: 'recherche', label: 'Recherche' },
  { id: 'coordination', label: 'Coordination' },
  { id: 'institutionnel', label: 'Institutionnel' }
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalArticle, setModalArticle] = useState(null);

  const filtered = selectedCategory === 'all'
    ? news
    : news.filter(a => a.category === selectedCategory);
  const featured = news.filter(a => a.featured);

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
        <p className="max-w-2xl mx-auto">Suivez les dernières nouvelles et développements de la PONAH</p>
      </section>

      {/* À la une */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">À la Une</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map(article => (
            <article key={article.id} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-500">
                    {categories.find(c => c.id === article.category)?.label}
                  </span>
                  <Calendar className="w-4 h-4 text-gray-500 ml-4" />
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Clock className="w-4 h-4 text-gray-500 ml-4" />
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
                <button
                  onClick={() => setModalArticle(article)}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                >
                  Lire la suite <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Toutes les Actualités</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(article => (
            <article key={article.id} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs text-primary font-medium">
                    {categories.find(c => c.id === article.category)?.label}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                <button
                  onClick={() => setModalArticle(article)}
                  className="text-primary font-medium hover:text-primary/80"
                >
                  Lire plus
                </button>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-gray-500">Aucune actualité trouvée.</p>
          )}
        </div>
      </section>

      {/* Modale */}
      {modalArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-auto max-w-2xl w-full max-h-full relative">
            <button
              onClick={() => setModalArticle(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <img
              src={modalArticle.image}
              alt={modalArticle.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{modalArticle.title}</h2>
              <div className="flex items-center space-x-4 text-gray-500 mb-6">
                <Calendar className="inline w-4 h-4 mr-1" /> {modalArticle.date}
                <Clock className="inline w-4 h-4 mr-1" /> {modalArticle.readTime}
              </div>
              <p className="whitespace-pre-line text-gray-700">{modalArticle.content}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
