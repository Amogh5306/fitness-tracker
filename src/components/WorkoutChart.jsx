"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function WorkoutChart({ workouts }) {
  return (
    <div style={{ background: "white", padding: 20, borderRadius: 12, border: "1px solid #e5e7eb", marginBottom: 28 }}>
      <div style={{ fontWeight: 700, marginBottom: 16 }}>Calories per Workout</div>
      <div style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={workouts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="calories" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
