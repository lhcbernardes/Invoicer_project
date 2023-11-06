import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { InboxArrowDownIcon } from '@heroicons/react/24/solid'
import { IdentificationIcon } from '@heroicons/react/24/solid'

function Card({ title, description, imageUrl, route, total }) {
    const navigate = useNavigate();

    const redirectToRoute = () => {
        navigate(`/${route}`);
    };

    const returnIcons = () => {
      switch (imageUrl) {
        case 1:
          return <DocumentTextIcon className="h-6 w-6 text-blue-500" />;
        case 2:
          return <InboxArrowDownIcon className="h-6 w-6 text-blue-500" />;
        case 3:
          return <IdentificationIcon className="h-6 w-6 text-blue-500" />;
        default:
          return <DocumentTextIcon className="h-6 w-6 text-blue-500" />;
      }
    }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-4 my-4 md:w-1/3 cursor-pointer" onClick={redirectToRoute}>
      <h2 className="text-xl font-semibold mb-2">{returnIcons()} {title}</h2>
      <span class="border border-dark rounded-lg">{total ? `Contem ${total} itens` : 'Adicionar Item'}</span>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;