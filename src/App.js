import "./App.css";
import Nav from "./components/Nav";
import { Lyrics } from "./components/Lyrics";
import Search from "./components/Search";
import Results from "./components/Results";
import { Context } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Context>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/lyrics" element={<Lyrics />} />
        </Routes>
        {/* <Lyrics /> */}
      </Context>
    </Router>
  );
}

export default App;
