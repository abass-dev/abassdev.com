import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
export default function Navigation() {

  const { t, i18n } = useTranslation();
  const path = useLocation()

  const moveTo = (link) => {
    let cleanPath = window.location.href.replace(path.pathname, '') + link
    return cleanPath

  }
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="row pt-2 bg-light">
      <div className='col-6 col-md-9 text-start'>
        <nav className="navbar navbarTextColor navbar-expand-md navbar-dark bg-transparent">
          <div>
            <button className="navbar-toggler btn btn-success-outline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars text-success"></span>
            </button>
            <div className="collapseBtn collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav md-title">
                <a className="nav-link active" aria-current="page" href="/">{t("profile.links.home")}</a>
                <a className="nav-link text-dark" href={moveTo("/#apropos")}>{t("profile.links.about")}</a>
                <a className="nav-link text-dark" href={moveTo("/#projets")}>{t("profile.links.projects")}</a>
                <a className="nav-link text-dark" href={moveTo("/#competence")}>{t("profile.links.skill")}</a>
                <a className="nav-link text-dark" href={moveTo("/#work")}>{t("profile.links.work")}</a>
                <a className="nav-link text-dark" href={moveTo("/contact")}>{t("profile.links.contact")}</a>
                <a className="text-white btn-sm btn btn-success" href="tel:+233-54-312-2816">Tel: <span className='fs-4 fa fa-mobile'></span> +233 59 157 5606</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-6 col-md-3 text-end">
        <button className="btn btn-primary-outline btn-sm text-dark" onClick={() => changeLanguage('en')}>{t("profile.lang.en")} 🇺🇸</button>
        <button className="btn btn-primary-outline btn-sm text-dark" onClick={() => changeLanguage('fr')}>{t("profile.lang.fr")} 🇫🇷</button>
      </div>
    </div>
  )
}