import React from 'react';

import './index.css';

import Destaque from './components/Destaque';
import Carroussel from './components/Carousel';

export default function Home() {
    return (
        <div className="container">
            <Destaque />
            <Carroussel categoria="Animes" />
            <Carroussel categoria="Filmes" />
            <Carroussel categoria="Games" />
        </div>
    )
}