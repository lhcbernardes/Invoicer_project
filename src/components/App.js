import React, { useContext } from 'react';
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
import Select from 'react-select';

function App() {
  const { data } = useContext(State);
  const {
    clientPhone, 
    setClientPhone,
    CPF,
    setCPF,
    CEPCliente,
    setCEPCliente,
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
    componentRef,
    instrumento,
    setInstrumento,
    marca,
    setMarca,
    cor,
    setCor,
    setNotes,
    setName,
    setEmail,
    setAddressLocal,
    setPhone,
    setInstagran,
    setWebsite,
    setCEPLocal,
    setLocal,
    setIntroTitle,
    setCNPJ,
    // setAtendente
  } = useContext(State);
  const atendentes = data.attendants || JSON.parse(localStorage.getItem("data")).attendants;
  const clientes = data.clients || JSON.parse(localStorage.getItem("data")).clients;
  const getData = data || JSON.parse(localStorage.getItem("data"));

  const optionsAtendentes = atendentes.map((e)=> {
    return {value: e.name, label: e.name}
  })
  const optionsClientes = clientes.map((e)=> {
    return {value: e._id, label: e.nome}
  })
  const setValues = (value) => {
    const result = clientes.find((elem)=> elem._id === value)
    setClientAddress(result.address);
    setCPF(result.cpf);
    setClientName(result.nome);
    setClientPhone(result.phone);
    setCEPCliente(result.cep)
  }

  setName(getData.nickname);
  setAddressLocal(getData.nickname);
  setEmail(getData.email);
  setPhone(getData.number);
  setWebsite(getData.website);
  setInstagran(getData.instagran);
  setCEPLocal(getData.CEP);
  setLocal(getData.nickname);
  setIntroTitle(getData.nickname);
  // setCPF(getData.nickname);
  setCNPJ(getData.nickname);
  // setAtendente(getData.nickname);

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
                <div className="flex flex-col md:mt-16">
                  <label htmlFor="description">Atendente</label>
                  <Select options={optionsAtendentes} />
                </div>
              </article>


              <article className="md:grid grid-cols-2 gap-10 md:my-5">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Nome do Cliente</label>
                  <Select options={optionsClientes} onChange={(e) => setValues(e.value)}/>
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
                    disabled
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 md:my-5">
                <div className="flex flex-col">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="Digite o CPF"
                    autoComplete="off"
                    value={CPF}
                    disabled
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="CEPCliente">
                    CEP
                  </label>
                  <input
                    type="text"
                    name="CEPCliente"
                    id="CEPCliente"
                    placeholder="Digite o CEP"
                    autoComplete="off"
                    value={CEPCliente}
                    disabled
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">
                    Número Contato
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Digite o numero"
                    autoComplete="off"
                    value={clientPhone}
                    disabled
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 md:my-5">
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

              <article className="md:grid grid-cols-3 gap-10 md:my-5">
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
