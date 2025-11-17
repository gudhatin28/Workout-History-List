// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WorkoutHistory from "./components/WorkoutHistory";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "1rem" }}>
        {/* Simple nav */}
        <nav style={{ marginBottom: "1rem" }}>
         <h1><Link to="/" style={{ marginRight: "3rem" }}>Home</Link>
          <Link to="/workout-history">Workout History</Link></h1>
          <div

>
  {/* your page content */}
</div>

        </nav>
        <Routes>
          <Route path="/workout-history" element={<WorkoutHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
