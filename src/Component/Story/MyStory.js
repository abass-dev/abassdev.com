import { Component } from "react";
import "./MyStory.css";
import aboutImage from "../../assets/images/abassdev-about.png";

class MyStory extends Component {
  constructor(props) {
    super(props);
    this.showbtn = this.showbtn.bind(this);
    this.birthday = this.birthday.bind(this)
  }
  showbtn() {
    document.querySelector(".chevron").classList.toggle("rotate-chevron");
    window.dataLayer.push({"myStory": "Collapse my story"});
            
  }
  birthday(date2Str) {
  const date1 = new Date();
  const date2 = new Date(date2Str);

  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays - (diffYears * 365)) / 30);
  const diffDaysRemaining = diffDays - (diffYears * 365) - (diffMonths * 30);

  const formattedDiff = `${diffDaysRemaining} days, ${diffMonths} months and ${diffYears} years old`;

  return formattedDiff;
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
         <div className='image-bg'>
          <img src={aboutImage} className="img-fluid story-img" alt="Who is Abass Dev?" />
         </div>
          <div className="text-light bg-dark px-4 py-3">
            <h1 id="whoisabassdev">Who is Abass Dev?</h1>
            <p>
            Abass Ben Cheik, who goes by the name Abass Dev, is a talented full-stack developer with a passion for building exceptional web applications. He was born in Niamey, Niger, on February 2, 1995, and at the time of writing this, he is currently {this.birthday('02-02-1995')}
            </p>
            <p>
            At a young age of 14 in 2009, Abass Dev became fascinated with the world of web development. However, he had no idea where to start. It wasn't until he met a friend on Skyrock, a social networking site, in 2011, that he was introduced to the world of blogging and tasked with administering a Wix-created blog. It was this experience that sparked his curiosity and ignited his passion for web development.
            </p>
            <p>
             In 2012, Abass Dev created his own blog on the Blogspot platform, but soon discovered its limitations. Determined to expand his knowledge and capabilities, he began to explore the depths of web development using languages such as HTML, CSS, JavaScript, PHP, SQL, and others.
            </p>
            <p>
            With his dedication and hard work, Abass Dev honed his skills and became a self-taught full-stack developer. Today, he has an impressive portfolio of work that showcases his expertise in building dynamic, responsive, and visually appealing web applications.
            </p>
            <p>
             In addition to his technical abilities, Abass Dev has a keen eye for design and aesthetics, which allows him to create stunning and functional user interfaces. He is always learning and staying up-to-date with the latest trends and technologies in the ever-evolving field of web development.
            </p>
            <p>
            Abass Dev is a true testament to the power of self-education and perseverance. His passion and commitment to his craft have led him to become a respected figure in the web development community, and a source of inspiration for aspiring developers around the world.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyStory;
