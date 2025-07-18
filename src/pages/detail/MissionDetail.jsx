import React from "react";
import { useParams } from "react-router-dom";
import missions from "../../data/activitiesData/missions";

const MissionDetail = () => {
  const { slug } = useParams();
  const mission = missions.find((item) => item.slug === slug);

  if (!mission) return <div className="p-6">Mission non trouvée.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{mission.title}</h1>
      <p>Détails à venir...</p>
    </div>
  );
};

export default MissionDetail;
