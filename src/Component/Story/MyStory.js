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
                    <h1 id="whoisabassdev">{t("profile.mystory.whoami")}</h1>
                    <p>{t("profile.mystory.textcontent")}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default withTranslation()(MyStory)