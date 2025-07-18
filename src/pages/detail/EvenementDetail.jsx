import React from "react";
import { useParams } from "react-router-dom";
import evenements from "../../data/activitiesData/evenements";

const EvenementDetail = () => {
  const { slug } = useParams();
  const event = evenements.find((item) => item.slug === slug);

  if (!event) return <div className="p-6">Événement non trouvé.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      <p>Détails à venir...</p>
    </div>
  );
};

export default EvenementDetail;
