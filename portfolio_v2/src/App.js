import "./App.css";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <SideNav />
      <h1 className="name" id="fade-left">
        Fredrick Morris
      </h1>
      <h2 className="subTitle" id="fade-left">
        Frontend Web Developer
      </h2>

      {/*dot background */}
      <span className="dot1"></span>
      <span className="dot2"></span>
      <span className="dot3"></span>
      <span className="dot4"></span>
      <span className="dot5"></span>
    </div>
  );
}

export default App;
