import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Work.css'
import { useTranslation } from 'react-i18next'

export default function Work () {
    const {t} = useTranslation();
    return (
        <div className='container text-white mb-4 md-title'>
            <div className='row'>
                <div className='col-12'>
                <h1 id="work" className='large-title fw-bold'>{t("work.title")}</h1>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card work-card-gb border-0'>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                             <span className='work-icon text-warning fa fa-globe'></span>
                             {" "}
                             <h2>{t("work.webdev.title")}</h2>
                            </p>
                            <p>{t("work.webdev.description")}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card work-card-gb border-0'>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                             <span className='work-icon text-warning fa fa-line-chart'></span>
                             {" "}
                             <h2>{t("work.seo.title")}</h2>
                            </p>
                            <p>{t("work.seo.description")}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card work-card-gb border-0'>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                             <span className='work-icon text-warning fa fa-paint-brush'></span>
                             {" "}
                             <h2>{t("work.webdesign.title")}</h2>
                            </p>
                            <p>{t("work.webdesign.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}