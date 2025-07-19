// src/components/pages/Contact.jsx
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Votre message a été envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Secrétariat Permanent',
        'Rue 737 Porte 419',
        'Banankabougou, Bamako, Mali'
      ]
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+223 76 02 32 25', '+223 79 37 16 43']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['secretariat@ponah.org', 'ponah.mali@gmail.com']
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        'Lundi - Vendredi: 8h00 - 17h00',
        'Samedi: 8h00 - 12h00',
        'Dimanche: Fermé'
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'Adhésion à la PONAH',
      description:
        "Informations sur le processus d'adhésion pour les ONG nationales",
      action: 'Voir les critères',
      url: '/membres'
    },
    {
      title: 'Partenariats',
      description: 'Opportunités de collaboration avec la PONAH',
      action: 'Nous contacter',
      url: '/contact'
    },
    {
      title: 'Formations',
      description: 'Programmes de renforcement des capacités disponibles',
      action: 'En savoir plus',
      url: '/activites'
    },
    {
      title: 'Support technique',
      description: 'Assistance technique pour les membres',
      action: "Demander de l'aide",
      url: '/support'
    }
  ];

  const leaders = [
    {
      name: 'Dr. Elmehdi AG WAKINA',
      title: 'Président',
      desc:
        'Responsable de la direction exécutive et de la représentation de la PONAH'
    },
    {
      name: 'Moussa A DIALLO',
      title: 'Vice-Président',
      desc: "Appui à la direction de coordination des activités"
    },
    {
      name: 'Diangouna SOUMARE',
      title: 'Secrétaire Général',
      desc: 'Gestion administrative et coordination des organes'
    },
    {
      name: 'Alidji Guitteye',
      title: 'Trésorier Général',
      desc: 'Gestion financière et comptable de la plateforme'
    }
  ];

  const faqs = [
    {
      question: 'Comment adhérer à la PONAH ?',
      answer:
        "L’adhésion nécessite une demande timbrée, un Accord Cadre, le paiement des frais d’adhésion (50 000 FCFA) et l’engagement à payer la cotisation annuelle.",
      linkText: 'Voir les détails →',
      link: '/apropos'
    },
    {
      question: 'Quels sont les avantages d’être membre ?',
      answer:
        'Accès aux formations, participation aux mécanismes de coordination, opportunités de financement et renforcement des capacités.',
      linkText: 'En savoir plus →',
      link: '/apropos'
    },
    {
      question: 'Comment collaborer avec la PONAH ?',
      answer:
        'Nous sommes ouverts aux partenariats avec les organisations internationales, les bailleurs de fonds et les institutions gouvernementales.',
      linkText: 'Nous contacter →',
      link: '/contact'
    },
    {
      question: 'Où intervient la PONAH ?',
      answer:
        'La PONAH couvre l’ensemble du territoire malien avec ses 130+ ONG membres réparties dans les 11 régions du pays.',
      linkText: 'Voir la carte →',
      link: '/activites'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous accompagner
            dans vos démarches
          </p>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Coordonnées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plusieurs moyens pour nous joindre et échanger avec notre équipe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((d, j) => (
                    <p key={j} className="text-gray-600">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire & Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ... (formulaire inchangé) ... */}
              {/* Tu peux garder le bloc existant ici tel quel */}
              {/* Je n'ai pas récopié les balises du formulaire pour alléger le message */}
            </form>
          </div>

          {/* Map & Quick Links */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Notre Localisation
              </h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=12.593939962385498,-7.9426373114334785&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte du bureau PONAH"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Liens Rapides
              </h3>
              <div className="space-y-4">
                {quickLinks.map((lnk, i) => (
                  <div key={i} className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium text-gray-900">{lnk.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{lnk.description}</p>
                    <Link
                      to={lnk.url}
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      {lnk.action}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe Dirigeante & FAQ inchangées */}
      {/* ... */}
    </div>
  );
}
