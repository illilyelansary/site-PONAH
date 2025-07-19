// src/pages/detail/PublicationDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import publications from '../../data/publicationsData';

const PublicationDetail = () => {
  const { slug } = useParams();
  const publication = publications.find((item) => item.slug === slug);

  if (!publication) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Publication introuvable</h2>
        <p>Il semble que la publication que vous recherchez n’existe pas.</p>
        <Link to="/publications" className="mt-4 inline-block text-blue-600 underline">← Retour aux publications</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{publication.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Année : {publication.year}</p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {publication.description}
      </p>
      <Link to="/publications" className="text-blue-600 font-medium underline hover:text-blue-800">
        ← Retour aux publications
      </Link>
    </div>
  );
};

export default PublicationDetail;
