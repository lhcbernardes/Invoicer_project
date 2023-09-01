import { useContext, useState } from 'react';
import ClientDetails from './ClientDetails';
import Dates from './Dates';
import Footer from './Footer';
import Header from './Header';
import MainDetails from './MainDetails';
import Notes from './Notes';
import Table from './Table';
import TableForm from './TableForm';
import ReactToPrint from 'react-to-print';
import { State } from '../context/stateContext';

function App() {
  const {
    name,
    setName,
    address,
    setAddress,
    addressLocal,
    setAddressLocal,
    email,
    setEmail,
    phone,
    setPhone,
    cpf,
    setCPF,
    cidade,
    setCidade,
    bairro,
    setBairro,
    website,
    setWebsite,
    clientName,
    setClientName,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
    componentRef,
    instagran,
    setInstagran,
    CEPCliente,
    setCEPCliente,
    CEPLocal,
    setCEPLocal,
    CNPJ,
    setCNPJ,
    instrumento,
    setInstrumento,
    marca,
    setMarca,
    cor,
    setCor,
    atendente,
    setAtendente,
    local,
    setLocal,
    introTitle,
    setIntroTitle,
  } = useContext(State);

  setName('Pessoa Pessoa');
  setAddressLocal('Travessa Travessa');
  setEmail('teste@teste.com');
  setPhone('(81) 99999-9999');
  setWebsite('www.teste.com');
  setInstagran('@teste');
  setCEPLocal('54756-041');
  setLocal('Metal Metal');
  setIntroTitle('Segunda a Sexta: das 8h às 12h, 13:30h às 17:00h. - Sábados: das 8h às 12h');
  // setCPF('102.321.342-27');
  setCNPJ('5555555555');
  setAtendente('Mulher');

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: '1920px',
          margin: 'auto',
        }}
      >
        <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-1 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="atendente">Atendente</label>
                  <input
                    type="text"
                    name="atendente"
                    id="atendente"
                    placeholder="Atendente"
                    autoComplete="off"
                    value={atendente}
                    onChange={(e) => setAtendente(e.target.value)}
                  />
                </div>
              </article>
              

              <article className="md:grid grid-cols-2 gap-10 md:mt-5">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Nome do Cliente</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Digite o nome do cliente"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Endereço do Cliente</label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Digite o endereço do cliente"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="Digite o CPF"
                    autoComplete="off"
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="cidade">
                    Cidade/ Estado
                  </label>
                  <input
                    type="text"
                    name="cidade"
                    id="cidade"
                    placeholder="Digite a Cidade/Estado"
                    autoComplete="off"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>

                {/* <div className="flex flex-col">
                  <label htmlFor="bairro">
                    Bairro
                  </label>
                  <input
                    type="text"
                    name="bairro"
                    id="bairro"
                    placeholder="Digite o Bairro"
                    autoComplete="off"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div> */}
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Data da entrada</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Digite a Data início"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Data de entrega</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Digite a Data final"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="Instrumento">Instrumento</label>
                  <input
                    type="Instrumento"
                    name="Instrumento"
                    id="Instrumento"
                    placeholder="Digite o Instrumento"
                    autoComplete="off"
                    value={instrumento}
                    onChange={(e) => setInstrumento(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Marca">Marca</label>
                  <input
                    type="url"
                    name="Marca"
                    id="Marca"
                    placeholder="Digite a Marca"
                    autoComplete="off"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="cor">Cor</label>
                  <input
                    type="text"
                    name="cor"
                    id="cor"
                    placeholder="Digite a cor do instrumento"
                    autoComplete="off"
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm />
              </article>

              <label htmlFor="notes">Notas Adicionais</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Notas adicionais sobre o serviço"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* <article className="mt-5">
            <DonateButton />
          </article> */}
        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-5">
            <Header />

            <MainDetails />

            <ClientDetails />

            <Dates />

            <Table />

            <Notes />

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
