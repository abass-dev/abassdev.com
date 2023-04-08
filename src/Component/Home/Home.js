import { Profile, Skill, Project, Work, Footer } from '../'
import { LatestPosts } from '../Blog'
import "./Home.css";

const Home = () => {
  return (
     <div className="container-lg bg-light">
       <Profile />
        <Project />
        <Skill />
        <Work />
        <LatestPosts />
        <Footer />
      </div>
  );
};

export default Home;
