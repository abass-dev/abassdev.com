import { Component } from 'react'
import { withTranslation } from 'react-i18next'
import "./MyStory.css"
import StoryImg from "../../assets/images/abassdev_story1.png"

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
        <div className="text-dark mt-1">
            <p>
            <img alt="Abass Ben Cheik" width="100%" height="auto" className="story-img"  src={StoryImg} />
              <button onClick={this.showbtn} className="showbtn btn text-white w-100 btn-dark btn-sm" data-bs-toggle="collapse" data-bs-target="#collapseMyStory" aria-expanded="false" aria-controls="collapseMyStory">
                <i className="h5 chevron text-success fa fa-angle-double-down"></i> {t("profile.mystory.showbtn")} 
              </button>
            </p>
            <div className="collapse" id="collapseMyStory">
                <div className="text-dark card card-body bg-light border-gray">
                    <h1 id="whoisabassdev">{t("profile.mystory.whoami")}</h1>
                    <p>{t("profile.mystory.para1")}</p>
                    <p>{t("profile.mystory.para2")}</p>
                    <p>{t("profile.mystory.para3")}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default withTranslation()(MyStory)