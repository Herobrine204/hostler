"use client"; 

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BACKEND_URL = 'http://127.0.0.1:5000';

interface ApiRoomData {
  id: number;
  room_number: string;
  capacity: number;
  current_occupancy: number;
  is_full: boolean;
  student_ids: number[];
}

interface ChartData {
  name: string;
  Occupancy: number;
  Capacity: number;
}

export function RoomVisualization() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch(`${BACKEND_URL}/api/rooms`);
        if (!response.ok) {
          throw new Error('Failed to fetch room data');
        }
        const data: ApiRoomData[] = await response.json();
        
        const transformedData = data.map(room => ({
          name: room.room_number,
          Occupancy: room.current_occupancy,
          Capacity: room.capacity,
        }));
        
        setChartData(transformedData); 
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);

  if (loading) {
    return <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-center min-h-[300px]">Loading visualization...</div>;
  }

  if (error) {
    return <div className="p-4 rounded-lg bg-red-50 text-red-700 flex items-center justify-center min-h-[300px]">Error: {error}</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData} 
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Occupancy" fill="#8884d8" />
        <Bar dataKey="Capacity" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}