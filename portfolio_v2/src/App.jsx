import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import portrait from "./portrait.jpg";

function App() {
  let section = document.querySelectorAll("section");
  let menu = document.querySelectorAll("a");
  window.onscroll = () => {
    section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
      let height = i.offsetHeight;
      let id = i.getAttribute("id");
      if (top >= offset && top < offset + height) {
        menu.forEach((link) => {
          link.classList.remove("active");
          document.querySelector("a[href*=" + id + "]").classList.add("active");
        });
      }
    });
  };

  return (
    <div className="App">
      <SideNav />
      <section className="landing" id="home">
        <div>
          <div className="name">
            <h1 id="fade-left">Fredrick Morris</h1>
            <h2 id="fade-left">Frontend Web Developer</h2>
          </div>

          {/*dot background */}
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
          <span className="dot4"></span>
          <span className="dot5"></span>

          <a href="#about">About</a>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section id="about">
        <img src={portrait} className="portrait" />
      </section>
    </div>
  );
}

export default App;
