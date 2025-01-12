import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Card from "./components/Card";
import Feather from "./components/Feathers";
import MoreAboutUs from "./components/MoreAboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CoursePage from "./pages/CoursePage";
import data from "./Data";
import "./components/main.css";
import Enrollment from "./forms/Enrollment";

function App() {
  const [getData] = useState(data);

  return (
    
    <Router>
      <Navbar/>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div className="width" >
              <Home />
              {/* <Counter /> */}
              <div className="card-container">
                <div className="heading-content">
                  <p>POPULAR COURSES</p>
                  <h1>Pick a course to get started your study</h1>
                </div>
                <div className="main-cards-container">
                  {getData.map((item) => (
                    <Card
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  ))}
                </div>
              </div>
              <Feather />
              <MoreAboutUs />
            </div>
          }
        />

        {/* Course Page Route */}
        <Route path="/course" element={<CoursePage />} />
        <Route path="/enrollment" element={<Enrollment/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
    
  );
}

export default App;
