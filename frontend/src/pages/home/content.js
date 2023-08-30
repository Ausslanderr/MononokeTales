import React, { useEffect, useState } from "react";
import Carousel from "./carousel";
import { Link } from "react-router-dom";
import shrek from "../../assets/images/homo-deus-1.jpg"
import axios from "axios";
  
function Home (){
    const [pedidos, setPedidos] = useState([]);
    const [books, setBooks] = useState([]);
    const [itensExibidos, setItensExibidos] = useState(6);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de pesquisa

    const handleBuy = async (e) =>{
        // Ver mais tarde
    }
    
    
    
    useEffect(()=> {
        fetch('http://localhost:8800/livros')
            .then (response=>response.json())
            .then(data => setBooks(data))
            .catch(error => console.error("Erro ao pegar os dados"));
    }, []);
    return <div>
        
        <Carousel/>
        <div style={{ textAlign: 'center' }}>
    <input  
        type="text"
        placeholder="Pesquisar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
            padding: "10px",
            border: "2px solid #3498db",
            borderRadius: "5px",
            outline: "none",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s ease-in-out",
            width: "20%",
            fontSize: "16px",
            marginBottom: "15px",
            fontFamily: "Arial, sans-serif",
            color: "#333",
            marginTop:"10px"
        }}
    />
</div>
        <div>
            <h3 style={{textDecoration:'underline', textAlign:'center'}}>Nossos Produtos</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <br/>
  <h2 style={{ textAlign: 'center' }}></h2>
</div>
        <div  style={{  // Inline style with CSS
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
            }} className="book-list">
            {books
        .filter((book) => {
            const lowercaseTitle = book.Titulo.toLowerCase();
            const lowercaseAuthor = book.Autor.toLowerCase();
            const lowercaseSearchTerm = searchTerm.toLowerCase();
            
            return lowercaseTitle.includes(lowercaseSearchTerm) || lowercaseAuthor.includes(lowercaseSearchTerm);
        })
        .slice(0, itensExibidos)
        .map((book) =>/*books.slice(0,itensExibidos).map(book =>*/ /*books
        .filter((book) => book.Titulo.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, itensExibidos)
        .map((book) =>*/ (
                <div key={book.idLivro} className="book" style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    flexBasis: "calc(33.33% - 20px)",
                    textAlign: "center",
                    margin: "10px",
                    boxSizing: "border-box"
                  }} >
                <img src={book.image} width={'200px'} height={'280px'} alt={book.Titulo} />
                <h3 className="mb-3" >{book.Titulo}</h3>
                <p><strong>{book.Autor}</strong></p>
                <p><strong>R${book.Preco}</strong></p>
                
                <div>
                    <Link to={`/produto/${book.idLivro}`} >
                    <button className="btn btn-primary" onClick={() => handleBuy(book.idLivro)}>
                        Detalhes
                    </button>
                    </Link>
                </div>
                </div>
            ))}
            
        </div>
        <div
        style={{textAlign:'center'}}>
            <button  className="btn btn-primary"  onClick={()=>setItensExibidos(itensExibidos+6)}>Carregar Mais</button>
            </div>
    </div>
}
export default Home;