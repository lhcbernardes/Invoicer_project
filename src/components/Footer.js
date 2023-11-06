import { useContext } from 'react';
import { State } from '../context/stateContext';

export default function Footer() {
  const { email, website, phone, instagran, CEPLocal, CNPJ } = useContext(State);

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          {/* <li>
            <span className="font-bold">Cliente:</span> {name}
          </li> */}
          <li>
            <span className="font-bold">Email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Telefone:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Instagran:</span> {instagran}
          </li>
          <li>
            <span className="font-bold">CEP:</span> {CEPLocal}
          </li>
          <li>
            <span className="font-bold">CNPJ:</span> {CNPJ}
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>

      {/* <p className="text-center px-5 mt-8 text-xs ">
        Invoicer is built by{" "}
        <a
          href="https://tsbsankara.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Thomas Sankara
        </a>
      </p> */}
    </>
  );
}
