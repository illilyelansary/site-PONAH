import React from "react";
import { useParams } from "react-router-dom";
import news from "../../data/newsData";

const ActualiteDetail = () => {
  const { slug } = useParams();
  const item = news.find((n, i) => n.slug === slug || i.toString() === slug);

  if (!item) return <div className="p-8 text-center">Actualité introuvable</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary">{item.title}</h1>
      <img src={item.image} alt={item.title} className="w-full rounded mb-6" />
      <p className="text-gray-700 text-lg leading-relaxed">{item.content || item.description}</p>
    </div>
  );
};

export default ActualiteDetail;
