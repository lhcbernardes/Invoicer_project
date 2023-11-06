import { createContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import collect from 'collect.js';

export const State = createContext();

export default function StateContext({ children }) {
  const [id, setId] = useState('');
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [width] = useState(641);
  const [instagran, setInstagran] = useState('');
  const [CPF, setCPF] = useState('');
  const [CEPCliente, setCEPCliente] = useState('');
  const [CEPLocal, setCEPLocal] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [instrumento, setInstrumento] = useState('');
  const [atendente, setAtendente] = useState('');
  const [local, setLocal] = useState('');
  const [introTitle, setIntroTitle] = useState('');
  const [marca, setMarca] = useState('');
  const [cor, setCor] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [addressLocal, setAddressLocal] = useState('');
  const [picture, setPicture] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [cards, setCards] = useState([]);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (window.innerWidth < width) {
      alert('Place your phone in landscape mode for the best experience');
    }
  }, [width]);

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      toast.error('Preencha todos os campos');
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      setDescription('');
      setQuantity('');
      setPrice('');
      setAmount('');
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  /* Calculate total amount of items in table
  This is the previous function to calculate the total amount of items in the table
  But it has a bug where if you delete an item from the table, it still keeps the previous total amount.
  The function after this comment uses `collect.js` which is a much better solution.  
  */
  // function CalcSum() {
  //   let rows = document.querySelectorAll(".amount");
  //   let sum = 0;

  //   for (let i = 0; i < rows.length; i++) {
  //     if (rows[i].className === "amount") {
  //       sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
  //       setTotal(sum);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   CalcSum();
  // }, [price, quantity]);

  // Use collect.js to calculate the total amount of items in the table. This is a much better function than the commented one above.
  const calculateTotal = () => {
    const allItems = list.map((item) => item.amount);

    setTotal(collect(allItems).sum());
  };

  useEffect(() => {
    calculateTotal();
  });

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
    // CalcSum();
    setShowModal(false);
  };

  const context = {
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    clientPhone,
    setClientPhone,
    bankName,
    setBankName,
    bankAccount,
    setBankAccount,
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
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal,
    width,
    componentRef,
    handlePrint,
    isEditing,
    setIsEditing,
    showModal,
    setShowModal,
    handleSubmit,
    editRow,
    deleteRow,
    showLogoutModal,
    setShowLogoutModal,
    instagran,
    setInstagran,
    CEPCliente,
    setCEPCliente,
    CEPLocal,
    setCEPLocal,
    CNPJ,
    setCNPJ,
    CPF,
    setCPF,
    atendente,
    setAtendente,
    cor,
    setCor,
    marca,
    setMarca,
    bairro,
    setBairro,
    cidade,
    setCidade,
    instrumento,
    setInstrumento,
    local,
    setLocal,
    introTitle,
    setIntroTitle,
    addressLocal,
    setAddressLocal,
    picture,
    setPicture,
    cards,
    setCards,
    id, setId,
    data, setData,
    phone, setPhone
  };

  return <State.Provider value={context}>{children}</State.Provider>;
}
