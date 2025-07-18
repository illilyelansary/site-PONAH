import React from 'react';
import { useParams } from 'react-router-dom';
import publications from '../../data/publicationsData';

const PublicationDetail = () => {
  const { slug } = useParams();
  const publication = publications.find(pub => pub.slug === slug);

  if (!publication) return <div className="text-center py-10 text-gray-600">Publication introuvable.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{publication.title}</h1>
      {publication.image && (
        <img src={publication.image} alt={publication.title} className="rounded-lg shadow mb-6 w-full" />
      )}
      <div className="text-gray-700 space-y-4">
        <p><strong>Date :</strong> {publication.date}</p>
        <p>{publication.description}</p>
      </div>
    </div>
  );
};

export default PublicationDetail;
