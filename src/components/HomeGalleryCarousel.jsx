import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Calendar, FileText, ArrowRight } from 'lucide-react';

// Tu peux importer les données depuis leurs fichiers respectifs
import { news } from '../data/news';
import { reports } from '../data/reports';
import { events } from '../data/events';

const HomeGalleryCarousel = () => {
  const items = [
    ...news.map((item) => ({
      id: `news-${item.id}`,
      type: 'Actualité',
      title: item.title,
      excerpt: item.excerpt,
      image: item.image,
      date: item.date,
      link: '/actualites'
    })),
    ...reports.map((item, index) => ({
      id: `report-${index}`,
      type: 'Publication',
      title: item.title,
      excerpt: item.description,
      image: '/images/publication.jpg', // ou ajoute un champ image dans reports si besoin
      date: item.date,
      link: '/publications'
    })),
    ...events.map((item, index) => ({
      id: `event-${index}`,
      type: 'Activité',
      title: item.title,
      excerpt: item.description,
      image: '/images/activite.jpg', // ou ajoute un champ image dans events si besoin
      date: item.date,
      link: '/activites'
    }))
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">À la une</h2>
          <p className="text-gray-600 mt-2">Actualités, activités et publications récentes</p>
        </div>
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-4">
              <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition-shadow h-full flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full mr-2">{item.type}</span>
                      <Calendar className="w-4 h-4 mr-1" /> {item.date}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{item.excerpt}</p>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Voir plus <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeGalleryCarousel;
