import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    Titulo: "",
    Autor: "",
    Editora: "",
    dataPublicacao: "",
    Preco : "",
    Descricao:""  ,
    Estoque:   "",
    image: ""
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="Titutlo"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book author"
        name="Autor"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book Editora"
        name="Editora"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="Descricao"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="Preco"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book stock"
        name="Estoque"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book date publicacao"
        name="dataPublicacao"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="image"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Add;