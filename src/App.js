import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [dark, setDark] = useState(false);
  
  const handleDark = () => {
    setDark(prevDark => !prevDark)
  };
  
  return (
    <div className="container">
      <div className="card">
        <Header dark={dark} handleDark={handleDark} />
        <Main dark={dark}/>
      </div>
    </div>
  );
}

export default App;
