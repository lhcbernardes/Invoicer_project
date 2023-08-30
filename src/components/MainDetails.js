import { useContext } from 'react';
import { State } from '../context/stateContext';

export default function MainDetails() {
  const { clientName, clientAddress, CPF, instrumento, cidade, cor, marca } = useContext(State);

  return (
    <>
      <section className="flex flex-col items-start justify-start">
        <h2 className="font-bold text-3xl uppercase mb-1">{clientName}</h2>
        <p>{clientAddress} - {cidade}</p>
        <p>{CPF}</p>
        <p>{instrumento} - {marca} - {cor}</p>
      </section>
    </>
  );
}
