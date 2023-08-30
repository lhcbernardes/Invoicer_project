import { useContext } from 'react';
import { State } from '../context/stateContext';

export default function Dates() {
  const { invoiceNumber, invoiceDate, dueDate } = useContext(State);

  return (
    <>
      <article className="mt-10 mb-14 flex items-start justify-start">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Invoicer number:</span> {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Data Entrada:</span> {invoiceDate}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Data Entrega Estipulada:</span> {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}
