import React from 'react';
import Slider from 'react-slick';

import './index.css';
import Imagem from '../../../../assets/images/bleach.jpg';

export default class Carroussel extends React.Component {    
   
    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerPadding: '60px',
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
            ]
        };

        return (
            <section className="carroussel">
                <div className="tag">{this.props.categoria}</div>
                <Slider {...settings}>
                    
                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>

                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>

                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>

                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>

                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>

                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>

                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>

                    <div className="item-carrousel">
                        <img src={Imagem} alt="Imagem" />
                        <div className="mask"></div>
                    </div>
                    
                </Slider>
            </section>
        )
    }
}