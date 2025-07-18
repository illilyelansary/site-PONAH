// src/components/HomeGalleryCarousel.jsx

import React from "react";
import Slider from "react-slick";
import { Calendar } from "lucide-react";
import news from "../data/newsData";
import activities from "../data/activitiesData";
import publications from "../data/publicationsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeGalleryCarousel = () => {
  const allItems = [
    ...news.map((item) => ({ ...item, type: "actualité" })),
    ...activities.events.map((item) => ({ ...item, type: "événement" })),
    ...activities.missions.map((item) => ({ ...item, type: "mission" })),
    ...activities.trainings.map((item) => ({ ...item, type: "formation" })),
    ...publications.map((item) => ({ ...item, type: "publication" })),
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2O00,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Actualités, Activités & Publications
        </h2>
        <Slider {...settings}>
          {allItems.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 uppercase ${
                        item.type === "publication"
                          ? "bg-yellow-100 text-yellow-800"
                          : item.type === "formation"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {item.type}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title || item.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.excerpt || item.description || item.content}
                    </p>
                  </div>
                  <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                    {item.date && <Calendar className="w-4 h-4" />}
                    <span>{item.date || item.period}</span>
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
