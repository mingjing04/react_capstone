import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  let buttonStyles;
  switch (variant) {
    case 'primary':
      buttonStyles = 'bg-lemon-yellow text-white hover:text-black rounded-2xl h-10 font-bold py-2 px-4 rounded hover:bg-lemon-green';
      break;
    case 'secondary':
      buttonStyles = 'bg-lemon-green hover:bg-lemon-yellow hover:text-white text-gray-800 font-bold py-2 px-4 rounded';
      break;
    case 'danger':
      buttonStyles = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
      break;
    default:
      buttonStyles = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
  }

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;