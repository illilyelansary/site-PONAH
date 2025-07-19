// src/pages/detail/MissionDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import activities from '../../data/activitiesData';

const MissionDetail = () => {
  const { slug } = useParams();
  const mission = activities.missions.find((item) => item.slug === slug);

  if (!mission) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Mission introuvable</h2>
        <p>Il semble que la mission que vous recherchez n’existe pas.</p>
        <Link to="/activites" className="mt-4 inline-block text-blue-600 underline">← Retour aux activités</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{mission.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Date : {mission.date}</p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {mission.description}
      </p>
      <Link to="/activites" className="text-blue-600 font-medium underline hover:text-blue-800">
        ← Retour aux activités
      </Link>
    </div>
  );
};

export default MissionDetail;
