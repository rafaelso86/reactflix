import React from 'react';

import VideoDestaque from '../../../../assets/images/bleach.jpg';
import './index.css';

export default function Destaque() {
    return (
        <section className="destaque-principal">
            <div className="mask"></div>
            <div className="row">
                <div className="content">
                    <div className="tag-destaque tag-anime">Anime</div>
                    <h1 className="titulo-destaque">Bleach</h1>
                    <p className="descricao-video">Bleach é uma série de mangá escrita e ilustrada por Tite Kubo. Bleach segue as aventuras de Ichigo Kurosaki que após ganhar os poderes de um Ceifeiro de Almas, através de uma Ceifeira de Almas, Rukia Kuchiki...</p>
                </div>

                <div className="imagem-video">
                    <img src={VideoDestaque} alt="" />
                </div>
            </div>
        </section>
    )
}