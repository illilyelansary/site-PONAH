import React, { useState } from 'react';
import { Calendar, Users, MapPin, Download, ExternalLink, BookOpen, Award } from 'lucide-react';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      date: '29-30 octobre 2024',
      title: 'Atelier de restitution de l\'étude du Baromètre de la Localisation',
      location: 'CICB, Bamako',
      description: 'Validation des 9 axes stratégiques pour l\'élaboration de la Stratégie Nationale de Localisation au Mali.',
      participants: 'Ministre MSDS, partenaires techniques et financiers, ONG membres',
      status: 'completed'
    },
    {
      date: 'Novembre-Décembre 2024',
      title: 'Formation de 360 acteurs des OSC sur la Gestion des Risques de Sécurité',
      location: 'Mopti, Ségou, Gao',
      description: 'Renforcement des capacités de 72 OSC sélectionnées dans le cadre du projet PARTAGE.',
      participants: '357 acteurs locaux dont 91 femmes (25,49%)',
      status: 'completed'
    },
    {
      date: '29-30 mai 2024',
      title: 'Atelier de lancement du Baromètre de la Localisation',
      location: 'CICB, Bamako',
      description: 'Présentation du cadre général et méthodologique du baromètre de la localisation.',
      participants: 'ONGI, FONGIM, FECONG, OCHA, CAFO, membres PONAH',
      status: 'completed'
    },
    {
      date: '03 mai 2024',
      title: 'Table Ronde sur la Localisation de l\'Aide Humanitaire',
      location: 'CICB, Bamako',
      description: 'Évaluation des 13 recommandations du Forum National sur la Localisation.',
      participants: '51 acteurs humanitaires',
      status: 'completed'
    }
  ];

  const missions = [
    {
      date: '16-20 septembre 2024',
      title: 'Mission conjointe de plaidoyer au Qatar',
      description: 'Mission FONGIM-PONAH pour mobiliser des financements humanitaires auprès des bailleurs non traditionnels.',
      results: [
        'Rencontres avec Qatar Charity (QC) et Qatar Fund for Development (QFFD)',
        'Promesses de financements obtenues',
        'Développement de partenariats avec les acteurs qataris'
      ],
      status: 'completed'
    },
    {
      date: 'Juin 2024',
      title: 'Lobby Tour aux États-Unis',
      description: 'Mission de plaidoyer pour positionner les acteurs locaux dans les discussions de haut niveau.',
      results: [
        'Rencontres avec USAID, PRM, USIP',
        'Discussions avec la Task force Localisation IASC',
        'Engagement de l\'USIP à accompagner la PONAH'
      ],
      status: 'completed'
    }
  ];

  const trainings = [
    {
      title: 'Formation des Coachs en Gestion des Risques de Sécurité',
      period: 'Novembre-Décembre 2024',
      description: 'Formation de coachs sur les techniques d\'apprentissage et la gestion des risques de sécurité.',
      modules: [
        'Bases de la gestion de la sécurité',
        'Analyse du contexte sécuritaire',
        'Analyse des risques',
        'Mise en œuvre du plan de sécurité',
        'Gestion des incidents et des déplacements'
      ]
    },
    {
      title: 'Formation sur l\'Assurance Qualité et la Redevabilité',
      period: '21-25 octobre 2024',
      location: 'Ouagadougou',
      description: 'Session dans le cadre de la Norme Humanitaire Fondamentale (projet LOCAL).',
      participants: 'Représentants du Mali, Niger et Burkina Faso'
    },
    {
      title: 'Ateliers de Consultation des OSC',
      period: '2024',
      locations: 'Bamako, Mopti, Gao',
      description: 'Cartographie et consultation de 65 organisations sur la gestion des risques de sécurité.',
      objective: 'Identifier les lacunes et meilleures pratiques en gestion des risques'
    }
  ];

  const reports = [
    {
      title: 'Rapport Annuel 2024 de la PONAH',
      description: 'Récapitulatif complet des activités, réalisations et défis de l\'année 2024.',
      type: 'Rapport annuel',
      pages: 45,
      downloadUrl: '#'
    },
    {
      title: 'Compte-rendu des activités Janvier 2024 - Mars 2025',
      description: 'Document détaillé des activités réalisées par la PONAH sur 15 mois.',
      type: 'Rapport d\'activités',
      pages: 38,
      downloadUrl: '#'
    },
    {
      title: 'Étude du Baromètre de la Localisation',
      description: 'Résultats de l\'étude de base sur la localisation des ONG nationales au Mali.',
      type: 'Étude',
      pages: 62,
      downloadUrl: '#'
    },
    {
      title: 'Document de Lobby Tour',
      description: 'Présentation de la situation humanitaire au Mali et recommandations.',
      type: 'Document de plaidoyer',
      pages: 15,
      downloadUrl: '#'
    }
  ];

  const achievements2024 = [
    {
      icon: Users,
      title: '72 OSC formées',
      description: 'Formation sur la gestion des risques de sécurité'
    },
    {
      icon: Award,
      title: '90 429 089 FCFA',
      description: 'Mobilisés grâce aux partenariats'
    },
    {
      icon: BookOpen,
      title: '9 axes stratégiques',
      description: 'Validés pour la Stratégie Nationale de Localisation'
    },
    {
      icon: MapPin,
      title: '50+ nouveaux membres',
      description: 'Adhésions enregistrées en 2024'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Activités</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Découvrez nos réalisations, formations et missions de plaidoyer pour la localisation de l'aide humanitaire
            </p>
          </div>
        </div>
      </section>

      {/* Réalisations 2024 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Réalisations 2024</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une année riche en activités et en résultats concrets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements2024.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation par onglets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-8 border-b">
            {[
              { id: 'events', label: 'Événements & Ateliers' },
              { id: 'missions', label: 'Missions de Plaidoyer' },
              { id: 'trainings', label: 'Formations' },
              { id: 'reports', label: 'Rapports & Publications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu des onglets */}
          {activeTab === 'events' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Événements & Ateliers</h3>
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h4>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <p className="text-sm text-gray-500">
                        <strong>Participants:</strong> {event.participants}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'missions' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Missions de Plaidoyer</h3>
              {missions.map((mission, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {mission.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{mission.title}</h4>
                  <p className="text-gray-600 mb-4">{mission.description}</p>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Résultats obtenus:</h5>
                    <ul className="space-y-2">
                      {mission.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'trainings' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formations & Renforcement des Capacités</h3>
              {trainings.map((training, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                      <BookOpen className="w-3 h-3 mr-1" />
                      {training.period}
                    </span>
                    {training.location && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        <MapPin className="w-3 h-3 mr-1" />
                        {training.location}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{training.title}</h4>
                  <p className="text-gray-600 mb-4">{training.description}</p>
                  {training.modules && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Modules de formation:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {training.modules.map((module, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {training.participants && (
                    <p className="text-sm text-gray-500 mt-3">
                      <strong>Participants:</strong> {training.participants}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Rapports & Publications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                          {report.type}
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                        <p className="text-xs text-gray-500">{report.pages} pages</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Aperçu
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Activities;

