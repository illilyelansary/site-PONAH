import React from 'react';
import { useParams } from 'react-router-dom';
import activities from '../../data/activitiesData';

const MissionDetail = () => {
  const { slug } = useParams();
  const mission = activities.missions.find(m => m.slug === slug);

  if (!mission) return <div className="text-center py-10 text-gray-600">Mission introuvable.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{mission.name}</h1>
      {mission.image && (
        <img src={mission.image} alt={mission.name} className="rounded-lg shadow mb-6 w-full" />
      )}
      <div className="text-gray-700 space-y-4">
        <p><strong>Période :</strong> {mission.period}</p>
        <p>{mission.description}</p>
      </div>
    </div>
  );
};

export default MissionDetail;
