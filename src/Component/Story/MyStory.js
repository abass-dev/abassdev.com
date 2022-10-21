import { Component } from "react";
import "./MyStory.css";
import aboutImage from "../../assets/images/abassdev-about.png";

class MyStory extends Component {
  constructor(props) {
    super(props);
    this.showbtn = this.showbtn.bind(this);
  }
  showbtn() {
    document.querySelector(".chevron").classList.toggle("rotate-chevron");
  }
  render() {
    return (
      <div className="mt-4">
        <p>
          <button
            onClick={this.showbtn}
            className="showbtn btn text-black w-100 btn-sm"
            data-bs-toggle="collapse"
            data-bs-target="#collapseMyStory"
            aria-expanded="false"
            aria-controls="collapseMyStory"
          >
            <i className="h5 chevron text-success fa fa-angle-double-down"></i>{" "}
            Read My Story 📃
          </button>
        </p>
        <div className="collapse shadow" id="collapseMyStory">
          <img src={aboutImage} class="img-fluid" alt="Who is Abass Dev?" />
          <div className="text-light bg-dark px-4 py-3">
            <h1 id="whoisabassdev">Who is Abass Dev?</h1>
            <p>
              Abass Ben Cheik or Abass Dev was born on February 02, 1995 (27
              years old) in Niamey, Niger is a Full-Stack developer
              (self-taught).
            </p>
            <p>
              Hi started to be interested in web development at the age of 14,
              in 2009 but did not even know where to start.
            </p>
            <p>
              In 2011, he made a friend on Skyrock (social network) who asked
              him to help with the administration of a blog created with Wix
              that's when Abass Dev started web development, finally in 2012 he
              decided to create his own blog on blogspot (Created by Google), at
              the beginning it was working well. But, after only a few days, he
              was limited by the available features that motivated him to find a
              different solution that's when he started to learn deep web
              development with the real languages created for web development
              (HTML, CSS, JavaScript, PHP, SQL...).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyStory;
