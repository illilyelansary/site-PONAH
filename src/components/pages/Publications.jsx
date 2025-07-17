import React, { useState } from 'react';
import { Download, FileText, Calendar, Search, Filter, ExternalLink } from 'lucide-react';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const defaultLimit = 6; // nombre par défaut affiché sans clic sur "Tout afficher"

  const publications = [
    {
      id: 1,
      title: 'Brochure de Présentation de la PONAH',
      description: 'Document de présentation officiel de la Plateforme des ONG Nationales Actives dans l\'Humanitaire.',
      category: 'brochure',
      date: '2024',
      type: 'PDF',
      size: '2.5 MB',
      pages: 8,
      downloadUrl: '/documents/Brochure PONA.pdf',
      featured: true
    },
    {
      id: 2,
      title: 'Rapport Annuel 2024',
      description: 'Récapitulatif complet des activités, réalisations, défis et leçons apprises de l\'année 2024.',
      category: 'rapport',
      date: 'Décembre 2024',
      type: 'PDF',
      size: '4.2 MB',
      pages: 45,
      downloadUrl: '/documents/Rapport Annuel 2024.pdf',
      featured: true
    },
    {
      id: 3,
      title: 'Document de Lobby Tour',
      description: 'Présentation de la situation humanitaire au Mali et recommandations pour la mobilisation des ressources.',
      category: 'plaidoyer',
      date: 'Juin 2024',
      type: 'PDF',
      size: '1.8 MB',
      pages: 15,
      downloadUrl: '/documents/Document Lobby Tour.pdf'
    },
    {
      id: 4,
      title: 'Étude du Baromètre de la Localisation',
      description: 'Résultats de l\'étude de base sur la localisation des ONG nationales actives dans l\'humanitaire au Mali.',
      category: 'etude',
      date: 'Octobre 2024',
      type: 'PDF',
      size: '5.1 MB',
      pages: 62,
      downloadUrl: '/documents/Etude Baromètre Localisation.pdf',
      featured: true
    },
    {
      id: 5,
      title: 'Statuts et Règlement Intérieur',
      description: 'Documents officiels régissant le fonctionnement de la PONAH.',
      category: 'juridique',
      date: 'Janvier 2024',
      type: 'PDF',
      size: '1.2 MB',
      pages: 18,
      downloadUrl: '/documents/Statuts et Règlement Intérieur.pdf'
    },
    {
      id: 6,
      title: 'Charte des Membres',
      description: 'Document définissant les droits, devoirs et engagements des membres de la PONAH.',
      category: 'juridique',
      date: 'Janvier 2024',
      type: 'PDF',
      size: '0.8 MB',
      pages: 6,
      downloadUrl: '/documents/Charte des Membres.pdf'
    },
    {
      id: 7,
      title: 'Guide de Gestion des Risques de Sécurité',
      description: 'Manuel pratique pour la gestion des risques sécuritaires dans les interventions humanitaires.',
      category: 'formation',
      date: 'Novembre 2024',
      type: 'PDF',
      size: '3.2 MB',
      pages: 28,
      downloadUrl: '/documents/Guide Gestion Risques Sécurité.pdf'
    },
    {
      id: 8,
      title: 'Communiqué - Résultats du Baromètre',
      description: 'Communiqué de presse sur les résultats de l\'étude du baromètre de la localisation.',
      category: 'communique',
      date: 'Novembre 2024',
      type: 'PDF',
      size: '0.5 MB',
      pages: 3,
      downloadUrl: '/documents/Communiqué Résultats Baromètre.pdf'
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes les publications' },
    { id: 'rapport', label: 'Rapports' },
    { id: 'brochure', label: 'Brochures' },
    { id: 'etude', label: 'Études' },
    { id: 'formation', label: 'Formation' },
    { id: 'plaidoyer', label: 'Plaidoyer' },
    { id: 'juridique', label: 'Documents juridiques' },
    { id: 'communique', label: 'Communiqués' }
  ];

  const stats = [
    { number: '8+', label: 'Publications disponibles' },
    { number: '200+', label: 'Pages de contenu' },
    { number: '4', label: 'Catégories principales' },
    { number: '2024', label: 'Année de création' }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const visiblePublications = showAll ? filteredPublications : filteredPublications.slice(0, defaultLimit);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications & Ressources</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Accédez à nos rapports, études, guides et documents officiels
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications en vedette */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Publications en Vedette</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos documents les plus importants et récents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.filter(pub => pub.featured).map(pub => (
              <div key={pub.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {categories.find(cat => cat.id === pub.category)?.label}
                  </span>
                  <span className="text-sm text-gray-500">{pub.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pub.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{pub.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{pub.pages} pages</span>
                  <span>{pub.size}</span>
                  <span>{pub.type}</span>
                </div>
                <div className="flex space-x-3">
                  <a href={pub.downloadUrl} download className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 text-sm flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" /> Télécharger
                  </a>
                  <a href={pub.downloadUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm flex items-center">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liste complète filtrable avec bouton "Tout afficher" */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Toutes nos Publications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez notre bibliothèque complète de documents et ressources
            </p>
          </div>

          {/* Filtres */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher dans les publications..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative lg:w-64">
              <Filter className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grille des publications filtrées */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visiblePublications.map((pub) => (
              <div key={pub.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === pub.category)?.label}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" /> {pub.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{pub.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span><FileText className="inline w-4 h-4 mr-1" />{pub.pages} pages</span>
                  <span>{pub.size}</span>
                  <span>{pub.type}</span>
                </div>
                <div className="flex gap-3">
                  <a href={pub.downloadUrl} download className="flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" /> Télécharger
                  </a>
                  <a href={pub.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
                    <ExternalLink className="w-4 h-4 mr-2" /> Aperçu
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Tout afficher / Réduire */}
          {filteredPublications.length > defaultLimit && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-primary hover:underline font-medium text-sm"
              >
                {showAll ? 'Réduire la liste' : 'Tout afficher'}
              </button>
            </div>
          )}

          {/* Aucun résultat */}
          {filteredPublications.length === 0 && (
            <div className="text-center text-gray-500 mt-12">
              <p>Aucune publication trouvée pour votre recherche.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;
