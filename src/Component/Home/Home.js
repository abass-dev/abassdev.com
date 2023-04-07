import { Profile, Skill, Project, Work, Footer } from '../'
import "./Home.css";

const Home = () => {
  return (
     <div className="container-lg bg-light">
        <Profile />
        <Project />
        <Skill />
        <Work />
      <Footer />
      </div>
  );
};

export default Home;
