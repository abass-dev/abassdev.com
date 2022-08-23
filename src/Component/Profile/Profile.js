import React from "react"
import "./Profile.css"
import Typical from "react-typical"
import { useTranslation } from 'react-i18next'
import 'font-awesome/css/font-awesome.min.css'
import resume from "../../assets/pdf/abass_cv_fr.pdf"
import MyStory from '../Story/MyStory'
import ProfilePicture from "../../assets/images/abassdev2022-6.jpg"
import i18n from "../../i18n"
import { useCookies } from 'react-cookie';
const reactStringReplace = require('react-string-replace')

export default function Profile() {


  const [cookie, setCookie] = useCookies(['transalertbox'])
  const cookExpire = 3600 * 10
  const handle = () => {
    setCookie('transalertbox', "transAlertBox", { maxAge: cookExpire })
  }
  const alertBox = () => {
    if (!cookie.transalertbox) {
      return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Note: </strong>This website has been translated from <button className="btn btn-outline-primary border-none btn-sm" onClick={() => changeLanguage("fr")}>French</button> to English, which means it may be incomplete. You can also help to improve the translation by cloning the repository <a href="https://github.com/abass-dev/portfolio/tree/master/public/locales">here.</a> Thanks anyway 🙏
          <button onClick={handle} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )
    } else {
      return null;
    }

  }
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  let description = t("profile.about.description")
  description = reactStringReplace(description, "Open-Source", (match, i) => (
    <a href="https://github.com/abass-dev?tab=repositories">{match}</a>
  ))
  description = reactStringReplace(description, "todaydevs.com", (match, i) => (
    <a href="https://todaydevs.com">{match}</a>
  ))

  return (
    <div className='my-4'>
      <div className='row'>
        <div className='col-12 profile-header'>
          <h1 id='apropos' className='text-dark fw-bold'><span className='text-primary'>{t("profile.hello")}, </span>{t("profile.sayHello")}</h1>
          <h2 className='text-primary'>
            <Typical
              steps={[
                t("profile.introduce1"),
                2000,
                t("profile.introduce2"),
                2000,
                t("profile.introduce3"),
                2000,
                t("profile.introduce4"),
                2000,
              ]}
              loop={Infinity}
            />
          </h2>
          {alertBox()}
          <div className='row py-4 m-1 bg-body rounded shadow'>
            <div className='col-md-6'>
              <img width="100%"  height="auto" className="profpic" alt="Profile picture (Abass Dev)" src={ProfilePicture} />
            </div>
            <div className='col-md-6 text-dark'>
              <h1 className='mt-4'>{t("profile.about.title")}</h1>
              <p className="after-title"></p>
              <p className='lead text-start'>{description}</p>

              <div className='row'>
                <div className='col-12 mt-2 col-md-7 text-center profile-socieal-links'>
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
                  <a href='mailto:abassthedev@gmail.com'>
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
                <div className='text-center mt-2 col-12 col-md-5'>
                  <a href={resume} download className='btn btn-success'>{t("profile.cv")} <span className='fa fa-download'></span></a>
                </div>
              </div>
            </div>
          </div>
          <MyStory />
        </div>
      </div>
    </div>
  )
}