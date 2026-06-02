"use client";
export default function StatsCards({ totalCals, totalMins, count, avgCals, s }) {
  return (
    <div style={s.grid3}>
      <div style={s.card}>
        <div style={s.cardLabel}>Total Calories Burned</div>
        <div style={s.statNum("#f97316")}>{totalCals} kcal</div>
      </div>
      <div style={s.card}>
        <div style={s.cardLabel}>Total Minutes Logged</div>
        <div style={s.statNum("#3b82f6")}>{totalMins} mins</div>
      </div>
      <div style={s.card}>
        <div style={s.cardLabel}>Total Exercises Done</div>
        <div style={s.statNum("#22c55e")}>{count} times</div>
      </div>
      <div style={s.card}>
        <div style={s.cardLabel}>Average Calories</div>
        <div style={s.statNum("#ef4444")}>{avgCals} kcal</div>
      </div>
    </div>
  );
}
