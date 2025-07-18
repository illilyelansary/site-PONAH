import React from 'react';
import { useParams } from 'react-router-dom';
import activities from '../../data/activitiesData';

const EvenementDetail = () => {
  const { slug } = useParams();
  const event = activities.events.find(ev => ev.slug === slug);

  if (!event) return <div className="text-center py-10 text-gray-600">Événement introuvable.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.name}</h1>
      {event.image && (
        <img src={event.image} alt={event.name} className="rounded-lg shadow mb-6 w-full" />
      )}
      <div className="text-gray-700 space-y-4">
        <p><strong>Période :</strong> {event.period}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EvenementDetail;
