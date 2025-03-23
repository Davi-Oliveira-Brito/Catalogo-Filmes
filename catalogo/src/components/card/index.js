import React from "react";
import './index.scss'

export default function Card({imagem, nome, onClick}) {
    return (
        <main className="card">
            <div className="card-content">
                <img src={imagem} alt="Sem Imagem" />

          
                    <p>{nome}</p>
                    <button onClick={onclick}>Saiba Mais</button>
          
            </div>
        </main>
    );
}
