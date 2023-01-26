import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="nav">
      <a href="#home" className="navLink">
        HOME
      </a>
      <a href="#projects" className="navLink">
        PROJECTS
      </a>
      <a href="#contact" className="navLink">
        CONTACT
      </a>
    </div>
  );
};

export default SideNav;
