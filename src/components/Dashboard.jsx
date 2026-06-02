"use client";
import StatsCards from "./StatsCards";
import WorkoutChart from "./WorkoutChart";

export default function Dashboard({ workouts, totalCals, totalMins, avgCals, s }) {
  return (
    <div>
      <div style={s.h1}>Hello!</div>
      <div style={s.sub}>Here is your fitness overview.</div>
      <StatsCards totalCals={totalCals} totalMins={totalMins} count={workouts.length} avgCals={avgCals} s={s} />
      <WorkoutChart workouts={workouts} />
    </div>
  );
}
