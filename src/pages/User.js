import React, { useContext } from 'react';
import { State } from '../context/stateContext';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from "../services/api";

const User = () => {
  const { data, setData } = useContext(State);
  const navigate = useNavigate();
  const { name, picture, address, email, instagran, website, CNPJ, nickname, number, CEP, labelTitle, subtitle } = data || JSON.parse(localStorage.getItem("data"));
  const id = data._id || JSON.parse(localStorage.getItem("data"))._id;

  const user = {
    nome: name,
    email: email,
    cidade: address,
    foto: picture,
    instagran: instagran,
    website: website,
    CNPJ: CNPJ,
    nickname: nickname,
    number: number,
    CEP: CEP,
    labelTitle: labelTitle,
    subtitle: subtitle
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string()
    //   .required('Campo nome é obrigatório')
    //   .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  });
  const formik = useFormik({
    initialValues: {
      CEP: '', cidade: '', cnpj: '', instagran: '', labelTitle: '', name: '', nickname: '', number: '', subtitle: '', website: ''
  },
    validationSchema,
    onSubmit: (values) => {
      api.put(`/users/${id}`, formik.values)
        .then((response) => {
          setData(response.data);
          localStorage.setItem("data", JSON.stringify(response.data));
          navigate2Home();
          toast.success('Atualização realizada com sucesso!');
        })
        .catch((error) => {
          toast.error('Erro ao atualizar usuario!');
        })
    },
  });
  const navigate2Home = () => {
    navigate("/home");
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md">
        <form onSubmit={formik.handleSubmit} className="mx-5">
          <h1 className="text-2xl font-semibold mb-4">Perfil do Usuário</h1>
          <div className='row'>
            {/* <p className="text-lg">Nome: {user.nome}</p> */}
            <p className="text-lg">Email: {user.email}</p>
          </div>
          <article className="md:grid grid-cols-3 gap-10 md:my-5">
            <div className="flex flex-col">
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                name="cnpj"
                id="cnpj"
                placeholder="Digite o cnpj"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.CNPJ}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="CEP">
                CEP
              </label>
              <input
                type="text"
                name="CEP"
                id="CEP"
                placeholder="Digite o CEP"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.CEP}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="number">
                Número Contato
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Digite o numero"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.number}
              />
            </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10 md:my-5">
            <div className="flex flex-col">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Digite a Cidade"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.cidade}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="instagran">
                Instagran
              </label>
              <input
                type="text"
                name="instagran"
                id="instagran"
                placeholder="Digite o Instagran"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.instagran}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="website">
                Website
              </label>
              <input
                type="text"
                name="website"
                id="website"
                placeholder="Digite o Website"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.website}
              />
            </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10 md:my-5">
            <div className="flex flex-col">
              <label htmlFor="nickname">nickname</label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                placeholder="Digite a nickname"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.nickname}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subtitle">
                Subtitle
              </label>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                placeholder="Digite o subtitle"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.subtitle}

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="labelTitle">
                LabelTitle
              </label>
              <input
                type="text"
                name="labelTitle"
                id="labelTitle"
                placeholder="Digite o labelTitle"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.labelTitle}
              />
            </div>
          </article>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;