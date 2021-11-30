import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Work.css'

export default function Work () {
    return (
        <div className='container text-white mb-4'>
            <div className='row'>
                <div className='col-12'>
                <h1 className=''>MON TRAVAIL</h1>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card work-card-gb border-0'>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                             <span className='work-icon text-warning fa fa-globe'></span>
                             {" "}
                             <h2>Développement Web</h2>
                            </p>
                            <p>
                             Je fournis des services web fonctionnels tels que le développement de sites web personnalisés, le développement de wordpress, les solutions de commerce électronique et bien plus encore.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card work-card-gb border-0'>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                             <span className='work-icon text-warning fa fa-line-chart'></span>
                             {" "}
                             <h2>SEO et sécurité</h2>
                            </p>
                            <p>
                            Je propose d'excellentes solutions en matière de sécurité logicielle et de pratiques de référencement qui augmenteront la quantité et la qualité du trafic vers votre site web.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card work-card-gb border-0'>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                             <span className='work-icon text-warning fa fa-paint-brush'></span>
                             {" "}
                             <h2>Web Design</h2>
                            </p>
                            <p>
                            Je conçois des sites Web étonnants et intuitifs qui représentent votre marque et l'identité de votre entreprise grâce à un design UI/UX exceptionnel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}