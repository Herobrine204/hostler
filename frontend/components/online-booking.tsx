"use client";

import React, { useState, useEffect } from 'react';
import { BedDouble, Users } from 'lucide-react';

const BACKEND_URL = 'https://hostler.onrender.com';

interface Room {
  id: number;
  room_number: string;
  capacity: number;
  current_occupancy: number;
  is_full: boolean;
}

export function OnlineBooking() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch(`${BACKEND_URL}/api/rooms`);
        if (!response.ok) throw new Error('Failed to fetch rooms');
        const data: Room[] = await response.json();
        setRooms(data);
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
    return <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-center min-h-[300px]">Loading available rooms...</div>;
  }

  if (error) {
    return <div className="p-4 rounded-lg bg-red-50 text-red-700 flex items-center justify-center min-h-[300px]">Error: {error}</div>;
  }

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow-sm border">
      <h3 className="font-semibold text-lg mb-4 text-center">Available Rooms</h3>
      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {rooms.map(room => (
          <div key={room.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${room.is_full ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                <BedDouble className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-gray-900">Room {room.room_number}</strong>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <Users className="w-4 h-5" />
                  <span>{room.current_occupancy} / {room.capacity} Occupants</span>
                </div>
              </div>
            </div>
            <button 
              disabled={room.is_full}
              className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                room.is_full
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {room.is_full ? 'Full' : 'Book Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
