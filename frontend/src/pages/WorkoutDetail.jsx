import { useParams, Link } from "react-router-dom";

export default function WorkoutDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <Link to="/" className="underline">
        ← Back to Home
      </Link>
      <h2 className="text-2xl font-bold">Workout #{id}</h2>
      <p className="text-gray-600">This is where workout details will go.</p>
    </div>
  );
}
