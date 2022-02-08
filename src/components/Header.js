import logo from "../logo.svg";

const Header = ({ dark, handleDark }) => {

  return (
    <header className={"header" + (dark ? " header-dark" : "")}>
      <img src={logo} alt="logo" className="header--image" />
      <h2 className="header--title">WifeFacts</h2>
      <span className={"header--light" + (dark ? " light-dark" : "")}>
        Ligth
      </span>
      <button
        className={"header--switch" + (dark ? " switch-on" : "")}
        onClick={handleDark}
      >
        <span
          className={"switch-ball" + (dark ? " switch-ball-on" : "")}
        ></span>
      </button>
      <span className={"header--dark" + (dark ? " dark-dark" : "")}>Dark</span>
    </header>
  );
};

export default Header;
