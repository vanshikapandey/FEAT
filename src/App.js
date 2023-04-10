import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import CoursesPage from "./components/CoursesPage";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/coursespage" element={<CoursesPage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
