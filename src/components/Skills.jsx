import React from 'react';

import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Next from '../assets/nextjs.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen pb-10 bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'> These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>                
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                  <p className='my-4'>JavaScript</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                  <p className='my-4'>Node</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                  <p className='my-4'>React</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                  <p className='my-4'>MONGODB</p>
              </div>  
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>  
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Next} alt="TAILWIND icon" />
                  <p className='my-4'>Next</p>
              </div>   
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="TAILWIND icon" />
                  <p className='my-4'>FireBase</p>
              </div>  
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="TAILWIND icon" />
                  <p className='my-4'>GitHub</p>
              </div>       
          </div>
      </div>
    </div>
  );
};

export default Skills;