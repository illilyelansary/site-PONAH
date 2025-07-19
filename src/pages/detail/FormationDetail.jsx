import React from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/activitiesData";
const formations = activitiesData.trainings;

const FormationDetail = () => {
  const { slug } = useParams();
  const formation = formations.find(f => f.slug === slug);

  if (!formation) return <div>Formation non trouvée.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{formation.title}</h1>
      <p className="text-gray-600 mb-2"><strong>Période :</strong> {formation.period}</p>
      <p className="text-lg text-gray-800">{formation.description}</p>
    </div>
  );
};

export default FormationDetail;
