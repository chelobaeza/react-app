import React from "react";
import type { Route } from "../home/+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Routines" },
    {
      name: "description",
      content: "View your purchased or assigned physiotherapy routines.",
    },
  ];
}

const MyRoutines: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">My Physiotherapy Routines</h1>
      <div className="bg-white rounded shadow p-6">
        {/* TODO: Map over user's routines and show each with exercises/videos */}
        <p>Your routines will be listed here.</p>
      </div>
    </div>
  );
};

export default MyRoutines;
