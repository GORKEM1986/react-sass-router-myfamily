
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home-bgImg-container">
        {/* HOME MAIN */}
        <main className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Sude <span className="home__name--last">GORKEM</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
        </main>
      </div>
    </>
  );
};

export default Home;
