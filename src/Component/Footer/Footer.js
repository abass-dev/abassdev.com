import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

export default function Footer () {
    const {t} = useTranslation();
    return (
        <div className="row">
            <div className="col-md-3"></div>
                <div className="col-md-6 text-center text-white">
                    <h4 id="contact" className="text-primary">{t("footer.thenext")}</h4>
                    <h2>{t("footer.letsconnect")}</h2>
                    <p>{t("footer.contactdesk")}</p>
                    <a href="mailto:cheikabassben@gmail.com" className="btn btn-warring border text-white my-4">{t("footer.sayhi")} 👋</a>
                    <div className='col mb-4 text-center profile-socieal-links'>
                        <a href='https://www.facebook.com/abasscheik.ben'>
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href='https://twitter.com/abasscheik1'>
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href='https://github.com/abass-dev'>
                          <i className="fa fa-github"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/abassdev'>
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <a href='https://www.instagram.com/abassdev'>
                           <i className="fa fa-instagram"></i>
                        </a>
                        <a href='https://www.pinterest.com/abassdev'>
                           <i className="fa fa-pinterest"></i>
                        </a>
                        <a href='https://youtube.com/channel/UC51YhGiRSH_IBPjYdPAmRew'>
                          <i className="fa fa-youtube"></i>
                        </a>
                        <a href='mailto:cheikabassben@gmail.com'>
                          <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
            <p className="copyright">{t("footer.copyright")}</p>
          </div>
    );
  }