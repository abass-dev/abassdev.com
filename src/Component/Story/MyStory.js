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
        <div className="shadow" id="collapseMyStory">
          <img src={aboutImage} className="img-fluid story-img" alt="Who is Abass Dev?" />
          <div className="text-light bg-dark px-4 py-3">
            <h1 id="whoisabassdev">Who is Abass Dev?</h1>
            <p>Abass Ben Cheik, also known as Abass Dev, was born on February 2, 1995, in Niamey, Niger, and is a self-taught full-stack developer who is currently 27 years old</p>
            <p>
              He started to be interested in web development at the age of 14,
              in 2009 but did not even know where to start.
            </p>
            <p>
            He developed an interest in web development at the age of 14 in 2009 but did not know where to begin. In 2011, he met a friend on Skyrock (a social network) who requested his help in administering a Wix-created blog. This was when Abass Dev began to delve into web development. In 2012, he decided to create his own blog on Blogspot (a platform created by Google). 
            </p>
            <p>
            At first, things went well, but after a few days, he discovered that he was limited by the available features. This led him to seek a different solution and motivated him to learn deep web development using real web development languages such as HTML, CSS, JavaScript, PHP, SQL, and others. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyStory;
