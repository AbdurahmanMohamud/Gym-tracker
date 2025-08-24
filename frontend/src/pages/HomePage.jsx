import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Dummy workouts for now
const workouts = [
  { id: 1, date: "15-08-2025", name: "Push Day" },
  { id: 2, date: "16-08-2025", name: "Pull Day" },
  { id: 3, date: "17-08-2025", name: "Leg Day" },
];

export default function HomePage() {
  const [split, setSplit] = useState(null);

  // Check if a split was already chosen
  useEffect(() => {
    const savedSplit = localStorage.getItem("workoutSplit");
    if (savedSplit) {
      setSplit(savedSplit);
    }
  }, []);

  const handleChoose = (choice) => {
    localStorage.setItem("workoutSplit", choice);
    setSplit(choice);
  };

  const handleReset = () => {
    localStorage.removeItem("workoutSplit");
    setSplit(null);
  };

  // If no split chosen → show selection buttons
  if (!split) {
    return (
      <div className="p-6 flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">🏋️ Gym Tracker</h1>
        <p className="text-gray-600">Choose your workout split:</p>

        <div className="space-x-4">
          <button
            onClick={() => handleChoose("UL")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            UL
          </button>
          <button
            onClick={() => handleChoose("PPL")}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            PPL
          </button>
          <button
            onClick={() => handleChoose("FB")}
            className="px-4 py-2 bg-purple-500 text-white rounded"
          >
            FB
          </button>
        </div>
      </div>
    );
  }

  // If split is chosen → show the calendar
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">📅 Your Calendar</h1>
      <p className="text-gray-600 mb-4">
        Current split: <strong>{split}</strong>
      </p>

      <ul className="space-y-2">
        {workouts.map((w) => (
          <li
            key={w.id}
            className="border p-4 rounded bg-white shadow hover:bg-gray-50"
          >
            <Link to={`/workout/${w.id}`}>
              <strong>{w.name}</strong> — {w.date}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={handleReset}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
      >
        Change Split
      </button>
    </div>
  );
}
