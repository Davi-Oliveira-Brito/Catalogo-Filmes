import React from "react";
import Modal from "react-modal";
import "./index.scss";
Modal.setAppElement("#root");
export default function ModalComponent({ isOpen, closeModal, filme }) {
    if (!filme) return null; 

    


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{ 
                content: {
                width: "60vw", height: "60vh", margin: "0",
                border: "none", alignSelf: "center", justifySelf: "center",
                borderRadius: "10px", background: "#1D1C1C",
    
            },
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.93)",  backdropFilter: "blur(10px)" },
        }}
            contentLabel="Detalhes do Filme"
        >
            <div className="modal-content">
                <div className="left">
                    <img src={filme.imagem} alt="Sem Imagem" />
                </div>

                <div className="right">
                    <h1 className="tittle">{filme.titulo}</h1>
                    <p className="text"><span>Ano:</span> {filme.ano}</p>
                    <p className="text"> <span>Sinopse:</span> {filme.sinopse}</p>
                    <div className="bottom">
                        <p className="text"><span>Nota:</span> {filme.classificacao}</p>

                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
