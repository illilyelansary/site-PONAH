import React from 'react';
import { useParams } from 'react-router-dom';
import activities from '../../data/activitiesData';

const FormationDetail = () => {
  const { slug } = useParams();
  const formation = activities.trainings.find(f => f.slug === slug);

  if (!formation) return <div className="text-center py-10 text-gray-600">Formation introuvable.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{formation.name}</h1>
      {formation.image && (
        <img src={formation.image} alt={formation.name} className="rounded-lg shadow mb-6 w-full" />
      )}
      <div className="text-gray-700 space-y-4">
        <p><strong>Période :</strong> {formation.period}</p>
        <p>{formation.description}</p>
      </div>
    </div>
  );
};

export default FormationDetail;
