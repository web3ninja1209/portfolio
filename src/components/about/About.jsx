import "./about.css";
import Award from "../../img/award.png";
import Me1 from "../../img/me1.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me1}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        AWS Architect/ Udemy Instructor (AWS Ninja)/ MIT fabacademy Alumnus (A Maker) / Founder yogafire.guru / Web3.0 Dev(React Dapps, Solidity)/ Content Creator (YouTube)
        </p>
        <p className="a-desc">
        16+ years of expereince where I have played multiple roles in my career starting with developer, team lead, product manager, delivery manager. I have worked on various technologies including Web3.0 Dapps, Big Data, AWS, NoSql DB, Full stack. I design both hardware and software products.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">MIT Fabacademy Graduate 2019</h4>
            <p className="a-award-desc">
            Fab Academy runs in more than 70 Fab Labs, for more than 250 students per year in the largest campus of the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
