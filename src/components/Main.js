import logo2 from "../logo2.svg";

const Main = ({ dark }) => {
  return (
    <main className={"main" + (dark ? " main-dark" : "")}>
      <h1 className="main--title">Fun facts about my Wife</h1>
      <ul className="main--facts">
        <li className={"fact-item" + (dark ? " fact-item-dark" : "")}>
          Beautiful girl.
        </li>
        <li className={"fact-item" + (dark ? " fact-item-dark" : "")}>
          Good mom.
        </li>
        <li className={"fact-item" + (dark ? " fact-item-dark" : "")}>
          Her food is delicious.
        </li>
        <li className={"fact-item" + (dark ? " fact-item-dark" : "")}>
          She loves me.
        </li>
        <li className={"fact-item" + (dark ? " fact-item-dark" : "")}>
          Likes dancing.
        </li>
      </ul>
      <img src={logo2} alt="logo" className="main--image" />
    </main>
  );
};

export default Main;
