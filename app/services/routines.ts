// routines.ts
// Service for fetching physiotherapy routines

export type Routine = {
    id: string;
    name: string;
    description: string;
};

export const fetchRoutines = async (): Promise<Routine[]> => {
    // Replace with your backend API endpoint
    //   const res = await fetch('/api/routines');
    // if (!res.ok) throw new Error('Failed to fetch routines');
    // return res.json();
    return mockRoutines
};

const mockRoutines: Routine[] = [
    { id: '1', name: 'Back Pain Relief', description: 'A routine to help relieve back pain.' },
    { id: '2', name: 'Knee Strengthening', description: 'Exercises to strengthen knee muscles.' },
    { id: '3', name: 'Shoulder Mobility', description: 'Improve shoulder mobility and flexibility.' },
];