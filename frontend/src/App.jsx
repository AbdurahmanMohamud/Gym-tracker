import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

import WorkoutDetail from "./pages/WorkoutDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
