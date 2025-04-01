import React, { useState } from "react";
import "./index.scss";
import Card from "../../components/card/index.js";
import Header from "../../components/header/index.js";
import ModalComponent from "../../components/popup/index.js";


import { fetchMovies } from "../../api/tmdb.js";

export default function App() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null); // Estado para armazenar o filme selecionado


    function openModal(filme) {
        setSelectedMovie(filme); // Armazena o filme selecionado
        setIsOpen(true); // Abre o modal
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSearch = async () => {
        if (search.trim() === "") return;
        const data = await fetchMovies(search);
        setMovies(data);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };


    return (
        <main className="main-page">
            <div className="header-div">
                <Header />
            </div>
            <div className="content-div">
                <div className="top">
                    <label className="label">Procurar Filme</label>
                    <input
                        type="text"
                        placeholder="Digite o nome do filme"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <div className="search"> <button onClick={(e) => handleSearch(e.target.value)}> Pesquisar </button> </div>
                </div>
                <div className="bottom">
                   
                    
                        {movies.map((movie, index) => (
                            <Card
                                key={index}
                                id={index}
                                filme={movie}
                                Click={openModal} // Passa a função que abre o modal
                            />
                        ))}
                    
                  
                </div>
            </div>

            
            <ModalComponent
                isOpen={modalIsOpen}
                closeModal={closeModal}
                filme={selectedMovie}
            />
        </main>
    );
}
