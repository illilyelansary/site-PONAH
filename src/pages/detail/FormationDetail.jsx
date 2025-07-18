import React from "react";
import { useParams } from "react-router-dom";
import formations from "../../data/activitiesData/formations";

const FormationDetail = () => {
  const { slug } = useParams();
  const formation = formations.find((item) => item.slug === slug);

  if (!formation) return <div className="p-6">Formation non trouvée.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{formation.title}</h1>
      <p>Détails à venir...</p>
    </div>
  );
};

export default FormationDetail;
