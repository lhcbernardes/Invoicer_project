import { useContext } from 'react';
import { State } from '../context/stateContext';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import api from "../services/api";

function NewAttendant() {
    const { data, setData } = useContext(State);
    const navigate = useNavigate();
    const id = data._id || JSON.parse(localStorage.getItem("data"))._id;

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Campo nome é obrigatório')
            .min(3, 'Nome deve ter pelo menos 3 caracteres'),
    });
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        validationSchema,
        onSubmit: (values) => {
            api.post(`/attendants/${id}`, formik.values)
                .then((response) => {
                    setData(response.data);
                    localStorage.setItem("data", JSON.stringify(response.data));
                    navigate2Home();
                    toast.success('Serviço Cadastrado com sucesso!');
                })
                .catch((error) => {
                    toast.error('Erro ao Cadastradar Atendente!');
                })
        },
    });
    const navigate2Home = () => {
        navigate("/home");
    }
    return (
        <main
            className="m-5 p-5 xl:grid grid-cols-1 gap-10 xl:items-start"
            style={{
                maxWidth: '900px',
                margin: 'auto',
            }}
        >
            <section>
                <div className="bg-white p-5 rounded shadow">
                    <form onSubmit={formik.handleSubmit} className="mx-5">
                        <article className="md:grid grid-cols-2 gap-8">

                            <div className="flex flex-col py-2">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Nome do atendente:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <span>{formik.errors.name}</span>
                                ) : null}
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
            </section>
        </main>
    )
}

export default NewAttendant;