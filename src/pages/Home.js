import Card from './components/Card';
import React, { useContext } from 'react';
import { State } from '../context/stateContext';



export default function Home() {
  const { data } = useContext(State);
  const getData = data || JSON.parse(localStorage.getItem("data"));
  const cards = [
    {
      title: 'Cadastrar Nota',
      description: 'Cadastrar nova nota',
      imageUrl: 1,
      route: 'invoice'
    },
    {
      title: 'Novo Cliente',
      description: 'Cadastrar Novo Cliente',
      total: getData.clients.length,
      imageUrl: 2,
      route: 'newclient'
    },
    {
      title: 'Cadastrar Serviço',
      description: 'Cadastrar possiveis serviços',
      total: getData.supports.length,
      imageUrl: 3,
      route: 'services'
    },
    {
      title: 'Cadastrar Atendente',
      description: 'Cadastrar atendente',
      total: getData.attendants.length,
      imageUrl: 4,
      route: 'attendant'
    },
  ];

  return (
    <>
      <section className="max-width">
        <section className="py-6 lg:py-2">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
            </div>
          </div>
        </section>
      </section>

      <div className="slant"></div>
    </>
  );
}
