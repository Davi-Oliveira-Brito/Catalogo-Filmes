import React from "react";
import './index.scss'
import Card from '../../components/card/index.js'
import Header from '../../components/header/index.js'


export default function App(){

    return(
        <main className="main-page">
            <div className="header-div">
                <Header/>
            </div>
            
            <div className="content-div">
                <div className="top">
                    <label>Procurar Filme</label>
                    <input type="text" placeholder="Digite o nome do filme" />
                </div>
                <div className="bottom">
                    <Card/>
                    
                    
                </div>
            </div>
        </main>

    );

}