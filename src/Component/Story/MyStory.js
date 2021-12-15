import { Component } from 'react'
import { withTranslation } from 'react-i18next'
import "./MyStory.css"

class MyStory extends Component {
    constructor(props) {
        super(props)
        this.showbtn = this.showbtn.bind(this)
    }
    
    showbtn() {
        document.querySelector(".chevron").classList.toggle("rotate-chevron")
    }
    
    render() {
    const {t} = this.props;
        return (
        <div className="text-white mt-4">
            <p>
              <button onClick={this.showbtn} className="showbtn btn text-white w-100 btn-outline-primary border-primary btn-sm" data-bs-toggle="collapse" data-bs-target="#collapseMyStory" aria-expanded="false" aria-controls="collapseMyStory">
                <i className="h5 chevron text-success fa fa-angle-double-down"></i> {t("profile.mystory.showbtn")} 
              </button>
            </p>
            <div className="collapse" id="collapseMyStory">
                <div className="text-white card card-body bg-transparent border-primary">
                    <h4>{t("profile.mystory.webstory")}</h4>
                    <ul>
                        <li>
                            <h5>{t("profile.mystory.starting")}</h5>
                            <ul>
                                <p>
                                    Legereprodesset sit cursus hinc consetetur salutatus veri te consectetur sapientem persecuti nonumy gloriatur.  Discerepericula mattis graecis maecenas luctus convallis voluptaria erroribus propriae veri honestatis definitiones odio labores populo moderatius justo.  Possitimpetus litora quidam maximus leo saperet nulla platea.  Aliquethendrerit amet noluisse referrentur eruditi noster aliquet iuvaret corrumpit taciti inani error vituperatoribus elementum signiferumque.  Vixeloquentiam volutpat tacimates definitionem quaestio persius vehicula sapien sed vero tractatos natum nascetur reprimique.
                                </p>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default withTranslation()(MyStory)