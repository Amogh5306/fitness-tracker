"use client";
import { useState } from "react";

export default function WorkoutSection({ workouts, addWorkout, deleteWorkout, searchTerm, setSearchTerm, intensityFilter, setIntensityFilter, s }) {
  const [wType, setWType] = useState("Running");
  const [wMins, setWMins] = useState("");
  const [wCals, setWCals] = useState("");
  const [wDate, setWDate] = useState(new Date().toISOString().slice(0,10));
  const [wIntensity, setWIntensity] = useState("Medium");

  function submit(e){
    e.preventDefault();
    const w = { id: Math.random(), type: wType, duration: Number(wMins), calories: Number(wCals), date: wDate, intensity: wIntensity };
    addWorkout(w);
    setWMins(""); setWCals("");
  }

  const filtered = workouts.filter(w=>w.type.toLowerCase().includes(searchTerm.toLowerCase()) && (intensityFilter==="All" || w.intensity===intensityFilter));

  return (
    <div>
      <div style={s.h1}>Log a Workout</div>
      <div style={s.sub}>Fill in the details below.</div>
      <div style={s.grid2}>
        <div style={s.formBox}>
          <form onSubmit={submit}>
            <label style={s.label}>Workout Type</label>
            <select style={s.select} value={wType} onChange={e=>setWType(e.target.value)}>
              <option>Running</option>
              <option>Walking</option>
              <option>Weightlifting</option>
              <option>Cycling</option>
              <option>Yoga</option>
            </select>
            <label style={s.label}>Duration (minutes)</label>
            <input style={s.input} type="number" value={wMins} onChange={e=>setWMins(e.target.value)} placeholder="e.g. 30" required />
            <label style={s.label}>Calories Burned</label>
            <input style={s.input} type="number" value={wCals} onChange={e=>setWCals(e.target.value)} placeholder="e.g. 200" required />
            <label style={s.label}>Date</label>
            <input style={s.input} type="date" value={wDate} onChange={e=>setWDate(e.target.value)} />
            <label style={s.label}>Intensity</label>
            <select style={s.select} value={wIntensity} onChange={e=>setWIntensity(e.target.value)}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <button type="submit" style={s.btn("#16a34a")}>Save Workout</button>
          </form>
        </div>
        <div style={s.tableWrap}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontWeight: 700 }}>Past Workouts</div>
            <div style={{ display: "flex", gap: 8 }}>
              <input placeholder="Search type..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} style={{ padding:8, borderRadius:6, border:"1px solid #d1d5db" }} />
              <select value={intensityFilter} onChange={e=>setIntensityFilter(e.target.value)} style={{ padding:8, borderRadius:6, border:"1px solid #d1d5db" }}>
                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={s.th}>Type</th>
                <th style={s.th}>Date</th>
                <th style={s.th}>Mins</th>
                <th style={s.th}>Cals</th>
                <th style={s.th}>Level</th>
                <th style={s.th}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(w=> (
                <tr key={w.id}>
                  <td style={{ ...s.td, fontWeight: "700", color: "#4f46e5" }}>{w.type}</td>
                  <td style={{ ...s.td, color: "#9ca3af" }}>{w.date}</td>
                  <td style={s.td}>{w.duration}</td>
                  <td style={{ ...s.td, fontWeight: "700" }}>{w.calories}</td>
                  <td style={s.td}><span style={s.badge}>{w.intensity}</span></td>
                  <td style={s.td}><button onClick={()=>deleteWorkout(w.id)} style={{ ...s.btn("#ef4444"), width: "auto", padding: "6px 10px" }}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
