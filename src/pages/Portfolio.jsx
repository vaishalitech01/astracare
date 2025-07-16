import React from "react";
import {Link} from 'react-router-dom'
import image1 from '../assets/portfolio_imgs/1.jpg'
import image2 from '../assets/portfolio_imgs/2.jpg'
import image3 from '../assets/portfolio_imgs/3.jpg'
import image4 from '../assets/portfolio_imgs/4.jpg'
import image5 from '../assets/portfolio_imgs/5.jpg'
import image6 from '../assets/portfolio_imgs/6.jpg'
import image7 from '../assets/portfolio_imgs/7.jpg'
import image8 from '../assets/portfolio_imgs/8.jpg'
import bg from '../assets/portfolio_imgs/bg1.jpg'

const projects = [
  {
    title: "Saumay Veda",
    category: "SEO & Website",
    image: image1,
  },
  {
    title: "Big Leadership Hiring",
    category: "Web Design & Maintenance",
    image: image2,
  },
  {
    title: "Shree Krishna Enterprise",
    category: "Web Design, Maintenance, Email marketing",
    image: image3,
  },
  {
    title: "SRK Legal (Law Firm)",
    category: "SEO & Website",
    image: image4,
  },
  {
    title: "Sheetz Restaurant",
    category: "SEO & Website",
    image: image5,
  },
  {
    title: "Grab Glam",
    category: "SEO & Website",
    image: image6,
  },
  {
    title: "Dutch Bros coffee",
    category: "SEO & Website",
    image: image7,
  },
  {
    title: "Taruni",
    category: "SEO & Website",
    image: image8,
  },
  {
    title: "RU Music",
    category: "SEO & Website",
    image: image6,
  },
];


const Portfolio = () => {
  return (
    <div>

      <section className='w-full lg:h-[25rem] md:h-[10rem] h-[6rem] flex justify-center items-center mt-13 md:mt-10 lg:mt-0 bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
          <span className='md:text-6xl text-2xl font-semibold text-center text-white'>Portfolio</span>
        </section>
    <section>
    <div className="min-h-screen md:mt-5 w-full overflow-y-auto bg-[#0c1630] px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
          key={index}
          className="bg-[#111b35] hover:-scale-[1.1] transition duration-400 flex flex-col gap-3 rounded-xl overflow-hidden shadow-md border border-gray-700 text-white"
          >
            {project.image ? (
              <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-40 bg-purple-900 flex items-center justify-center">
                <span className="text-white">No Image</span>
              </div>
            )}

            <div>

            {/* Title Section */}
            <div className="bg-gray-500 px-4 py-2 text-center">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
            </div>

            {/* Category Section */}
            <div className="px-4 py-3 text-center">
              <p className="text-sm text-gray-300">{project.category}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#111b35] mt-16 px-4 py-12 text-center flex flex-col items-center justify-center  sm:mb-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-xl leading-snug">
          WANT TO GROW YOUR BUSINESS?
        </h2>
        <Link to="/contact-us" className="mt-6 bg-[#c92874] hover:bg-[#b01d64] px-6 py-3 rounded-full text-white font-medium text-sm sm:text-base transition-all">
          Contact us now
        </Link>
      </div>
    </div>
    </section>
    </div>
  );
};

export default Portfolio;
