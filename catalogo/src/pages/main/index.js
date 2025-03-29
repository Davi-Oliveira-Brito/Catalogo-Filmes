import React, { useState } from "react";
import "./index.scss";
import Card from "../../components/card/index.js";
import Header from "../../components/header/index.js";
import ModalComponent from "../../components/popup/index.js";


import { fetchMovies } from "../../api/tmdb.js";

export default function App() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null); // Estado para armazenar o filme selecionado

    const visibleMovies = movies.slice(currentIndex, currentIndex + 4);

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
        setCurrentIndex(0);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 4);
    };

    const handleNext = () => {
        if (currentIndex + 4 < movies.length) setCurrentIndex(currentIndex + 4);
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
                    {movies.length > 4 && (
                        <img
                            className="left"
                            onClick={handlePrev}
                            src="/assets/images/arrow.svg"
                            alt="Anterior"
                        />
                    )}
                    <div className="carousel-container">
                        {visibleMovies.map((movie, index) => (
                            <Card
                                key={index}
                                id={index}
                                filme={movie}
                                Click={openModal} // Passa a função que abre o modal
                            />
                        ))}
                    </div>
                    {movies.length > 4 && (
                        <img
                            className="right"
                            onClick={handleNext}
                            src="/assets/images/arrow.svg"
                            alt="Próximo"
                        />
                    )}
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
