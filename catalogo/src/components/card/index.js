import React from "react";
import './index.scss'

export default function Card({filme, Click }) {
    return (
        <main className="card">
            <div className="card-content">
                <img src={filme.imagem} alt="Sem Imagem" />
                <p>{filme.titulo}</p>
                <button onClick={() => Click(filme)}>Saiba Mais</button>
            </div>
        </main>
    );
}

        

