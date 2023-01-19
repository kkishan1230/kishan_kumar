import "./App.css";
import Certificates from "./components/certificates";
import Education from "./components/Education";

import Header from "./components/header";
import Hr from "./components/horizontalLine";
import Intro from "./components/intro";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App container-1440 pb-20">
      <Header />
      <Intro />
      <Hr />
      <Skills />
      <Hr />
      <Education />
      <Hr />
      <Certificates />
    </div>
  );
}

export default App;
