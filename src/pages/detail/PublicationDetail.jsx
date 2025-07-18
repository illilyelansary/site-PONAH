import React from "react";
import { useParams } from "react-router-dom";
import publications from "../../data/publicationsData";

const PublicationDetail = () => {
  const { slug } = useParams();
  const publication = publications.find((item) => item.slug === slug);

  if (!publication) return <div className="p-6">Publication non trouvée.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{publication.title}</h1>
      <p>Détails à venir...</p>
    </div>
  );
};

export default PublicationDetail;
