import React, { useContext } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from './DeleteModal';
import { State } from '../context/stateContext';
// import Select from 'react-select';

export default function TableForm() {
  // const { data } = useContext(State);
  const {
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    list,
    total,
    isEditing,
    showModal,
    setShowModal,
    description,
    setDescription,
    handleSubmit,
    editRow,
  } = useContext(State);
  // const servicos = data.supports || JSON.parse(localStorage.getItem("data")).supports;
  // const optionsServicos = servicos.map((e)=> {
  //   return {value: e._id, label: e.name}
  // })

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div> */}

        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Descrição</label>
          <input
              type="text"
              name="description"
              id="description"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
        </div>

        <div className="md:grid grid-cols-3 gap-10 my-2">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantidade</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantidade"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Valor</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
        >
          {isEditing ? 'Finalizar edição' : 'Adicionar item'}
        </button>
      </form>

      {/* Table items */}

      <table width="100%" className="mb-10 overflow-auto">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Descrição</td>
            <td className="font-bold">Quantidade</td>
            <td className="font-bold">Preço</td>
            <td className="font-bold">Valor Final</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>R$ {price}</td>
                <td className="amount">R$ {amount}</td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => setShowModal(true)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
            {showModal && <DeleteModal id={id} />}
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">R$ {total.toFixed(2)}</h2>
      </div>
    </>
  );
}
