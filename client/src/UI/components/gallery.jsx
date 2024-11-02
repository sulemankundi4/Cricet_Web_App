import React from 'react';
import img1 from '../../assets/images/gl1.png';
import img2 from '../../assets/images/gl2.png';
import img3 from '../../assets/images/gl3.png';
import img4 from '../../assets/images/gallery4.jpg';
import img5 from '../../assets/images/gally5.jpg';

const Gallery = () => {
  return (
    <section className="gallery-masonry py-12 w-[94%] mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-green-600 font-semibold">Image Gallery</p>
          <h2 className="text-4xl font-bold text-gray-800">
            Some Recent Shots
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="gallery-item">
            <img
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              src={img1}
              alt="Gallery"
            />
          </div>
          <div className="gallery-item">
            <img
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              src={img2}
              alt="Gallery"
            />
          </div>
          <div className="gallery-item">
            <img
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              src={img3}
              alt="Gallery"
            />
          </div>
          <div className="gallery-item">
            <img
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              src={img4}
              alt="Gallery"
            />
          </div>
          <div className="gallery-item">
            <img
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              src={img5}
              alt="Gallery"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
