import { useContext } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { State } from '../context/stateContext';
import api from '../services/api';

function NewClient() {
    const getId = () => {
        if (data._id) {
            console.log(data)
            return data._id
        } else {
            let obj = JSON.parse(localStorage.getItem("data"));
            console.log(obj)
            return obj._id;
        }
    }
    const navigate = useNavigate();
    const { data, setData } = useContext(State);

    const id = getId();
    const validationSchema = Yup.object().shape({
        nome: Yup.string()
            .required('Campo nome é obrigatório')
            .min(3, 'Nome deve ter pelo menos 3 caracteres'),
        email: Yup.string()
            .required('Campo email é obrigatório')
            .email('Digite um email válido'),
        phone: Yup.string()
            .required('Campo telephone é obrigatório')
            .min(6, 'telephone deve ter pelo menos 6 caracteres'),
        birthday: Yup.string()
            .required('Campo birthday é obrigatório')
            .min(6, 'birthday deve ter pelo menos 6 caracteres'),
        cpf: Yup.string()
            .required('Campo cpf é obrigatório')
            .min(6, 'cpf deve ter pelo menos 6 caracteres'),
        cep: Yup.string()
            .required('Campo cep é obrigatório')
            .min(6, 'cep deve ter pelo menos 6 caracteres'),
        address: Yup.string()
            .required('Campo address é obrigatório')
            .min(6, 'address deve ter pelo menos 6 caracteres'),
        number: Yup.string()
            .required('Campo number é obrigatório'),
    });
    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            birthday: '',
            cpf: '',
            address: '',
            number: '',
            cep: '',
            phone: '',
        },
        validationSchema,
        onSubmit: (values) => {
            api.post(`/clients/${id}`, formik.values)
                .then((response) => {
                    navigate2Home();
                    toast.success('Cliente Cadastrado com sucesso!');
                    setData(response.data);
                    localStorage.setItem("data", JSON.stringify(response.data));
                })
                .catch((error) => {
                    toast.error(error.response.data.error);
                })
        },
    });

    const navigate2Home = () => {
        navigate("/home");
    }



    const formatCPF = (cpf) => {
        // Remove todos os caracteres não numéricos
        const numericCpf = cpf.replace(/\D/g, '');

        // Aplica a máscara: XXX.XXX.XXX-XX
        return numericCpf.replace(
            /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
            '$1.$2.$3-$4'
        );
    };

    // Manipula as mudanças no campo CPF
    const handleCPFChange = (event) => {
        const { name, value } = event.target;

        // Formata o valor do CPF
        const formattedCPF = formatCPF(value);

        // Define o valor formatado no campo
        formik.setFieldValue(name, formattedCPF);
    };

    const formatBirthday = (birthday) => {
        // Remove todos os caracteres não numéricos
        const numericBirthday = birthday.replace(/\D/g, '');

        // Aplica a máscara: DD/MM/AAAA
        return numericBirthday.replace(
            /^(\d{2})(\d{2})(\d{4})$/,
            '$1/$2/$3'
        );
    };

    // Manipula as mudanças no campo de data de nascimento
    const handleBirthdayChange = (event) => {
        const { name, value } = event.target;

        // Formata o valor da data de nascimento
        const formattedBirthday = formatBirthday(value);

        // Define o valor formatado no campo
        formik.setFieldValue(name, formattedBirthday);
    };

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

                            <div className="flex flex-col">
                                <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">
                                    Nome:
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    onChange={formik.handleChange}
                                    value={formik.values.nome}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.nome && formik.errors.nome ? (
                                    <span>{formik.errors.nome}</span>
                                ) : null}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <span>{formik.errors.email}</span>
                                ) : null}
                            </div>

                        </article>
                        <article className="md:grid grid-cols-3 gap-8">

                            <div className="flex flex-col">
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                    Telefone:
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <span>{formik.errors.phone}</span>
                                ) : null}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="birthday" className="block text-gray-700 font-bold mb-2">
                                    Data de Nascimento:
                                </label>
                                <input
                                    type="text"
                                    id="birthday"
                                    name="birthday"
                                    placeholder="DD/MM/AAAA"
                                    onChange={handleBirthdayChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.birthday}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.birthday && formik.errors.birthday ? (
                                    <span>{formik.errors.birthday}</span>
                                ) : null}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="cpf" className="block text-gray-700 font-bold mb-2">
                                    CPF:
                                </label>
                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    onChange={handleCPFChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cpf}
                                    placeholder="999.999.999-99"
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.cpf && formik.errors.cpf ? (
                                    <span>{formik.errors.cpf}</span>
                                ) : null}
                            </div>
                        </article>

                        <article className="md:grid grid-cols-3 gap-8">
                            <div className="flex flex-col">
                                <label htmlFor="cep" className="block text-gray-700 font-bold mb-2">
                                    CEP:
                                </label>
                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cep}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.cep && formik.errors.cep ? (
                                    <span>{formik.errors.cep}</span>
                                ) : null}
                            </div>


                            <div className="flex flex-col">
                                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                                    Endereço:
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.address && formik.errors.address ? (
                                    <span>{formik.errors.address}</span>
                                ) : null}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="number" className="block text-gray-700 font-bold mb-2">
                                    Número:
                                </label>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.number}
                                    className="w-full p-2 border rounded-lg"
                                />
                                {formik.touched.number && formik.errors.number ? (
                                    <span>{formik.errors.number}</span>
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
    );
}

export default NewClient;