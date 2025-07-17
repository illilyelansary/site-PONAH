import React from 'react';
import { Calendar, FileText, Users, MapPin, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      date: '18 janvier 2024',
      title: 'Assemblée Générale Constitutive',
      description: 'Adoption des statuts, règlement intérieur et charte des membres'
    },
    {
      date: '12 février 2024',
      title: 'Enregistrement Officiel',
      description: 'Enregistrement au numéro 00003 MATD-DGAT'
    },
    {
      date: '08 mars 2024',
      title: 'Publication au Journal Officiel',
      description: 'Publication au Journal Officiel numéro 4'
    }
  ];

  const governance = [
    {
      title: 'Comité Directeur',
      members: 9,
      description: 'Dirigé par El Mehdi Ag WAKINA (Président), le comité directeur se réunit chaque trimestre pour orienter les actions de la plateforme.'
    },
    {
      title: 'Commissariat aux Comptes',
      members: 3,
      description: 'Présidé par Gamny IGASTANE, le commissariat assure le contrôle financier et la transparence des opérations.'
    },
    {
      title: 'Assemblée Générale',
      members: 130,
      description: 'Instance suprême de la PONAH, elle se tient annuellement et regroupe tous les membres de la plateforme.'
    }
  ];

  const interventionDomains = [
    'Secours d\'urgence',
    'Sécurité alimentaire et nutrition',
    'Santé et soins médicaux',
    'Eau, assainissement et hygiène (WASH)',
    'Protection des populations vulnérables',
    'Abri et logement',
    'Éducation',
    'Coordination et gestion de l\'information',
    'Moyens de subsistance et résilience',
    'Développement économique',
    'Environnement et changement climatique',
    'Gouvernance et droits humains',
    'Prévention des conflits et consolidation de la paix'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de la PONAH</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Une plateforme unie pour une réponse humanitaire efficace et coordonnée au Mali
            </p>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6">
                La localisation est devenue un thème incontournable de l'aide humanitaire ces dernières années 
                en Afrique de l'Ouest et Centrale. Au Mali, la crise multidimensionnelle de 2012 a mobilisé 
                davantage la communauté internationale et les acteurs humanitaires.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Suite au Forum National sur la localisation de l'aide humanitaire organisé en septembre 2022, 
                les ONG nationales et locales ont réclamé d'être au centre du système et de la réponse 
                humanitaire du pays à travers des partenariats plus équitables.
              </p>
              <p className="text-lg text-gray-600">
                C'est dans cette perspective qu'a été créée la PONAH, pour une coordination efficace de la 
                réponse humanitaire au niveau local.
              </p>
            </div>
            <div className="space-y-6">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium">{event.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Renforcer la coordination des interventions des ONG membres</li>
                <li>• Mutualiser les expériences, expertises et ressources</li>
                <li>• Participer à l'amélioration des politiques humanitaires</li>
                <li>• Créer un cadre de collaboration</li>
                <li>• Initier des actions de renforcement des capacités</li>
                <li>• Promouvoir l'approche « localisation »</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-6">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                Une communauté humanitaire nationale apte, engagée et efficace dans la fourniture de 
                réponses adaptées, diligentes et coordonnées en situation d'urgence.
              </p>
            </div>

            {/* Valeurs */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-6">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valeurs</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Respect des principes humanitaires</li>
                <li>• Égale dignité de tous les êtres humains</li>
                <li>• Équité et égalité du genre</li>
                <li>• Engagement et solidarité</li>
                <li>• Proximité et impact local</li>
                <li>• Transparence et redevabilité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gouvernance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La PONAH est dirigée par des organes démocratiques qui assurent une gestion transparente et participative
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {governance.map((organ, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{organ.title}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{organ.members}</div>
                <p className="text-gray-600">{organ.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones et Domaines d'intervention */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Zones d'intervention */}
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Zones d'Intervention</h2>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Couverture Nationale</h3>
                <p className="text-gray-600 mb-4">
                  La PONAH couvre l'ensemble du territoire malien avec ses 130 ONG membres réparties 
                  dans toutes les régions du pays.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>• Région de Kayes</div>
                  <div>• Région de Koulikoro</div>
                  <div>• Région de Sikasso</div>
                  <div>• Région de Ségou</div>
                  <div>• Région de Mopti</div>
                  <div>• Région de Tombouctou</div>
                  <div>• Région de Gao</div>
                  <div>• Région de Kidal</div>
                  <div>• District de Bamako</div>
                  <div>• Région de Taoudéni</div>
                  <div>• Région de Ménaka</div>
                </div>
              </div>
            </div>

            {/* Domaines d'intervention */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Domaines d'Intervention</h2>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 gap-3">
                  {interventionDomains.map((domain, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi travailler avec la PONAH */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Travailler avec la PONAH</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des avantages uniques pour une collaboration efficace et durable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Ancrage Communautaire',
                description: 'Facilité d\'accès et proximité avec les populations locales grâce à notre réseau de 130+ ONG membres'
              },
              {
                title: 'Connaissance du Contexte',
                description: 'Compréhension approfondie des dynamiques locales, sociales, économiques et politiques du Mali'
              },
              {
                title: 'Expérience Avérée',
                description: 'Gestion éprouvée des fonds de divers partenaires : Agences ONU, Coopérations, Fondations, ONG Internationales'
              },
              {
                title: 'Efficacité Opérationnelle',
                description: 'Réduction des intermédiaires pour une réponse plus rapide et adaptée aux besoins des communautés'
              },
              {
                title: 'Mécanismes de Redevabilité',
                description: 'Systèmes robustes impliquant davantage les communautés dans la gestion et le suivi des projets'
              },
              {
                title: 'Programmes Diversifiés',
                description: 'Expertise dans la mise en œuvre de programmes de développement, humanitaire et de consolidation de la paix'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

