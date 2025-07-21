import React from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Route } from "./+types/home";
import { fetchRoutines } from "../../services/routines";
import type { Routine } from "../../services/routines";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const Home: React.FC = () => {
  const { data: routines, isLoading, error } = useQuery<Routine[]>({
    queryKey: ['routines'],
    queryFn: fetchRoutines,
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Explore Physiotherapy Routines</h1>
      <div className="bg-white rounded shadow p-6">
        {isLoading && <p>Loading routines...</p>}
        {error && <p className="text-red-500">Error loading routines.</p>}
        {routines && routines.length > 0 ? (
          <ul className="space-y-4">
            {routines.map((routine: Routine) => (
              <li key={routine.id} className="border rounded p-4 flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="font-semibold text-lg">{routine.name}</h2>
                  <p className="text-gray-600">{routine.description}</p>
                </div>
                <button className="mt-2 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Buy</button>
              </li>
            ))}
          </ul>
        ) : !isLoading && <p>No routines available.</p>}
      </div>
    </div>
  );
};

export default Home;
