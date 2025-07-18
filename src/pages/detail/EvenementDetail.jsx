import React from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/activitiesData";
const evenements = activitiesData.events;

const EvenementDetail = () => {
  const { slug } = useParams();
  const evenement = evenements.find(e =>
    e.slug === slug
  );

  if (!evenement) return <div>Événement non trouvé.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{evenement.title}</h1>
      <p className="text-gray-600 mb-2"><strong>Date :</strong> {evenement.date}</p>
      <p className="text-gray-600 mb-4"><strong>Lieu :</strong> {evenement.location}</p>
      <p className="text-lg text-gray-800">{evenement.description}</p>
    </div>
  );
};

export default EvenementDetail;
