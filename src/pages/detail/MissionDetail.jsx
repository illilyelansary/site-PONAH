import React from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/activitiesData";
const missions = activitiesData.missions;

const MissionDetail = () => {
  const { slug } = useParams();
  const mission = missions.find(m => m.slug === slug);

  if (!mission) return <div>Mission non trouvée.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{mission.title}</h1>
      <p className="text-gray-600 mb-2"><strong>Date :</strong> {mission.date}</p>
      <p className="text-lg text-gray-800">{mission.description}</p>
    </div>
  );
};

export default MissionDetail;
