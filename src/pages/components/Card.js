import React from 'react';
import { useNavigate  } from 'react-router-dom';

function Card({ title, description, imageUrl, route }) {
    const navigate = useNavigate();

    const redirectToRoute = () => {
        console.log(route)
        navigate(`/${route}`);
    };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-4 my-4 md:w-1/3 cursor-pointer" onClick={redirectToRoute}>
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover mb-2" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;