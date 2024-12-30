import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const Card = ({ title, children, url, deliveryLink }) => {
  return (
    <div className="bg-lemon-peach rounded-2xl shadow-md flex flex-col h-auto md:h-full">
      <div className="rounded-2xl w-full h-[300px] overflow-hidden">
        <img className="w-full h-full object-cover" src={url} alt={title} />
      </div>
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg mb-4">{title}</h2>
          <div className="text-gray-600">
            <article className='text-md md:text-sm'>{children}</article>
          </div>
        </div>
        <a href={deliveryLink} className="text-lemon-green flex-row flex items-center self-end text-md mt-10">
          <FaArrowRight />
           Order a Delivery
        </a>
      </div>
    </div>
  );
};

export default Card;