import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navigation";
import GrammarCorrection from "./components/Grammarcorrection";
import Home from "./components/Home";
import SqlRequest from "./components/SqlRequest";
import Timecomplexity from "./components/Timecomplexity";
import Explaincode from "./components/Explaincode";
import Translateprogramminglang from "./components/Translateprogramminglang";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Textsummarizer from "./components/Textsummarizer";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <section
          style={{
            minHeight: "100vh",
            backgroundColor: "#F5EBEB",
            color: "rgb(226 235 243)",
          }}
        >
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sql-requests" element={<SqlRequest />} />
            <Route path="/grammar-correction" element={<GrammarCorrection />} />
            <Route path="/time-complexity" element={<Timecomplexity />} />
            <Route path="/explain-code" element={<Explaincode />} />
            <Route
              path="/translate-programming-lang"
              element={<Translateprogramminglang />}
            />
            <Route path="/text-summarizer" element={<Textsummarizer />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
          <hr
            style={{
              height: "3px",
              backgroundColor: "gray",
              border: "none",
            }}
          />

          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
