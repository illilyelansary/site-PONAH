// src/pages/detail/ActualiteDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import news from '../../data/newsData';

const ActualiteDetail = () => {
  const { slug } = useParams();
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Actualité introuvable</h2>
        <p>Il semble que l’actualité que vous recherchez n’existe pas.</p>
        <Link to="/actualites" className="mt-4 inline-block text-blue-600 underline">← Retour aux actualités</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Publié le {article.date}</p>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-auto rounded-lg shadow-md mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {article.excerpt}
      </p>

      <Link
        to="/actualites"
        className="inline-block mt-6 text-blue-600 font-medium underline hover:text-blue-800"
      >
        ← Retour aux actualités
      </Link>
    </div>
  );
};

export default ActualiteDetail;
