import React from 'react';

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img
        src='/images/ankit-logo.jpeg'
        alt='Ankit Lab Chemicals Logo'
        className='w-12 h-12 rounded-full'
      />
    </div>
  );
};

export default HeroImage;