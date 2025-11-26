import React from 'react';
import { Link } from 'react-router-dom';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';

function HomePage() {
  return (
    <div className="mt-4 px-4 md:px-16 flex flex-col gap-8"> {/* Reduced mt-8 → mt-4, gap-12 → gap-8 */}
      
      {/* BREADCRUMB */}
      <nav className="flex gap-2 text-gray-600" aria-label="breadcrumb">
        <Link to="/" className="hover:underline">Home</Link>
        <span>*</span>
        <span className="text-blue-800 font-semibold">Blogs and Articles</span>
      </nav>

      {/* INTRODUCTION */}
      <div className="flex flex-col md:flex-row items-center gap-6"> {/* Reduced gap-8 → gap-6 */}
        
        {/* Titles */}
        <div className="flex-1">
          <h1 className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-bold">
            StoriesThat Matter
          </h1>
          <p className="mt-3 md:mt-4 text-md md:text-xl text-gray-700"> {/* Reduced mt-6 → mt-4 */}
            Discover, write, and share stories that inspire—your thoughts, your voice, your blog.
          </p>
        </div>

        {/* Animated SVG Button */}
        <Link to="/write" className="hidden md:block relative w-48 h-48 flex items-center justify-center">
          <svg 
            viewBox="0 0 200 200" 
            className="w-48 h-48 tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath"
              startOffset="0%"
              className="text-gray-700">
                Write your Story • 
              </textPath>
              <textPath href="#circlePath" 
              startOffset="50%"
              className="text-gray-700">
                Share your idea • 
              </textPath>  
            </text>
          </svg>
          <button className='bg-blue-800 rounded-full flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 m-auto w-20 h-20 cursor-pointer'>
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* Categories */}
      <MainCategories/>
      {/* FEATURED POSTS */}
      <FeaturedPosts/>
      {/* POST LIST */}
      

    </div>
  );
}

export default HomePage;
