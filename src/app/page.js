"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function App() {
  const [page, setPage] = useState("home");

  const [workouts, setWorkouts] = useState([
    { id: 1, type: "Running", duration: 30, calories: 350, date: "2026-05-28", intensity: "Medium" },
    { id: 2, type: "Weightlifting", duration: 45, calories: 280, date: "2026-05-29", intensity: "High" },
    { id: 3, type: "Cycling", duration: 20, calories: 180, date: "2026-05-30", intensity: "Low" },
  ]);

  const [goals, setGoals] = useState([
    { id: 1, title: "Weekly Workouts Target", current: 3, target: 5, unit: "days" },
    { id: 2, title: "Calorie Burning", current: 810, target: 1500, unit: "kcal" },
  ]);

  const [name, setName] = useState("Amogh Dey");
  const [age, setAge] = useState("24");
  const [weight, setWeight] = useState("78");
  const [height, setHeight] = useState("180");

  const [wType, setWType] = useState("Running");
  const [wMins, setWMins] = useState("");
  const [wCals, setWCals] = useState("");
  const [wDate, setWDate] = useState("2026-06-01");
  const [wIntensity, setWIntensity] = useState("Medium");

  const [gTitle, setGTitle] = useState("");
  const [gTarget, setGTarget] = useState("");
  const [gUnit, setGUnit] = useState("sessions");

  let totalCals = 0;
  for (let i = 0; i < workouts.length; i++) {
    totalCals += Number(workouts[i].calories);
  }

  let totalMins = 0;
  for (let i = 0; i < workouts.length; i++) {
    totalMins += Number(workouts[i].duration);
  }

  function addWorkout(e) {
    e.preventDefault();
    if (Number(wMins) <= 0) { alert("Duration must be greater than 0"); return; }
    if (Number(wCals) < 0) { alert("Calories cannot be negative"); return; }
    const w = {
      id: Math.random(),
      type: wType,
      duration: Number(wMins),
      calories: Number(wCals),
      date: wDate,
      intensity: wIntensity,
    };
    setWorkouts([w, ...workouts]);
    setWMins("");
    setWCals("");
  }

  function addGoal(e) {
    e.preventDefault();
    if (gTitle.trim() === "") { alert("Goal title cannot be empty"); return; }
    if (Number(gTarget) <= 0) { alert("Target must be greater than 0"); return; }
    const g = {
      id: Math.random(),
      title: gTitle,
      current: 0,
      target: Number(gTarget),
      unit: gUnit,
    };
    setGoals([...goals, g]);
    setGTitle("");
    setGTarget("");
  }

  const s = {
    wrap: { display: "flex", minHeight: "100vh", fontFamily: "sans-serif", fontSize: "14px", background: "#f3f4f6", color: "#1f2937" },
    sidebar: { width: "220px", background: "#312e81", color: "white", padding: "24px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexShrink: 0 },
    logo: { fontSize: "20px", fontWeight: "900", marginBottom: "32px", letterSpacing: "2px" },
    navBtn: (active) => ({ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: "500", marginBottom: "4px", background: active ? "#4338ca" : "transparent", color: "white" }),
    main: { flex: 1, padding: "32px", overflowY: "auto" },
    h1: { fontSize: "26px", fontWeight: "900", marginBottom: "6px" },
    sub: { color: "#6b7280", marginBottom: "28px" },
    grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" },
    card: { background: "white", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb" },
    cardLabel: { fontSize: "11px", fontWeight: "700", color: "#9ca3af", textTransform: "uppercase", marginBottom: "6px" },
    statNum: (color) => ({ fontSize: "28px", fontWeight: "900", color }),
    chartBox: { background: "white", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb", marginBottom: "28px" },
    grid2: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px" },
    formBox: { background: "white", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb" },
    label: { display: "block", fontSize: "13px", fontWeight: "700", marginBottom: "4px" },
    input: { width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px", fontSize: "13px", boxSizing: "border-box", marginBottom: "12px" },
    select: { width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px", fontSize: "13px", boxSizing: "border-box", marginBottom: "12px", background: "white" },
    btn: (color) => ({ width: "100%", background: color, color: "white", border: "none", borderRadius: "6px", padding: "10px", fontWeight: "700", fontSize: "13px", cursor: "pointer" }),
    tableWrap: { background: "white", padding: "20px", borderRadius: "12px", border: "1px solid #e5e7eb" },
    th: { padding: "10px 12px", textAlign: "left", background: "#f9fafb", fontSize: "12px", fontWeight: "700", borderBottom: "1px solid #e5e7eb" },
    td: { padding: "10px 12px", borderBottom: "1px solid #f3f4f6", fontSize: "13px" },
    badge: { padding: "2px 8px", borderRadius: "20px", fontSize: "11px", fontWeight: "700", background: "#fef3c7", color: "#92400e" },
    grid2eq: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" },
    profileBox: { background: "white", padding: "24px", borderRadius: "12px", border: "1px solid #e5e7eb", maxWidth: "400px" },
    footerText: { fontSize: "11px", opacity: "0.7" },
  };

  return (
    <div style={s.wrap}>
      <div style={s.sidebar}>
        <div>
          <div style={s.logo}>FIT-TRACKER</div>
          <button style={s.navBtn(page === "home")} onClick={() => setPage("home")}>Main Dashboard</button>
          <button style={s.navBtn(page === "add")} onClick={() => setPage("add")}>Log Workouts</button>
          <button style={s.navBtn(page === "goals")} onClick={() => setPage("goals")}>My Goals</button>
          <button style={s.navBtn(page === "profile")} onClick={() => setPage("profile")}>Profile</button>
        </div>
        <div style={s.footerText}>Logged in as: <strong>{name}</strong></div>
      </div>

      <div style={s.main}>

        {page === "home" && (
          <div>
            <div style={s.h1}>Hello, {name}!</div>
            <div style={s.sub}>Here is your fitness overview.</div>
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
                <div style={s.statNum("#22c55e")}>{workouts.length} times</div>
              </div>
            </div>
            <div style={s.chartBox}>
              <div style={{ fontWeight: "700", marginBottom: "16px" }}>Calories per Workout</div>
              <div style={{ height: "240px" }}>
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
          </div>
        )}

        {page === "add" && (
          <div>
            <div style={s.h1}>Log a Workout</div>
            <div style={s.sub}>Fill in the details below.</div>
            <div style={s.grid2}>
              <div style={s.formBox}>
                <form onSubmit={addWorkout}>
                  <label style={s.label}>Workout Type</label>
                  <select style={s.select} value={wType} onChange={(e) => setWType(e.target.value)}>
                    <option>Running</option>
                    <option>Weightlifting</option>
                    <option>Cycling</option>
                    <option>Yoga</option>
                  </select>
                  <label style={s.label}>Duration (minutes)</label>
                  <input style={s.input} type="number" value={wMins} onChange={(e) => setWMins(e.target.value)} placeholder="e.g. 30" required />
                  <label style={s.label}>Calories Burned</label>
                  <input style={s.input} type="number" value={wCals} onChange={(e) => setWCals(e.target.value)} placeholder="e.g. 200" required />
                  <label style={s.label}>Date</label>
                  <input style={s.input} type="date" value={wDate} onChange={(e) => setWDate(e.target.value)} />
                  <label style={s.label}>Intensity</label>
                  <select style={s.select} value={wIntensity} onChange={(e) => setWIntensity(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <button type="submit" style={s.btn("#16a34a")}>Save Workout</button>
                </form>
              </div>
              <div style={s.tableWrap}>
                <div style={{ fontWeight: "700", marginBottom: "12px" }}>Past Workouts</div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={s.th}>Type</th>
                      <th style={s.th}>Date</th>
                      <th style={s.th}>Mins</th>
                      <th style={s.th}>Cals</th>
                      <th style={s.th}>Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workouts.map((w) => (
                      <tr key={w.id}>
                        <td style={{ ...s.td, fontWeight: "700", color: "#4f46e5" }}>{w.type}</td>
                        <td style={{ ...s.td, color: "#9ca3af" }}>{w.date}</td>
                        <td style={s.td}>{w.duration}</td>
                        <td style={{ ...s.td, fontWeight: "700" }}>{w.calories}</td>
                        <td style={s.td}><span style={s.badge}>{w.intensity}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {page === "goals" && (
          <div>
            <div style={s.h1}>Goals</div>
            <div style={s.sub}>Track your fitness targets.</div>
            <div style={s.grid2eq}>
              <div style={s.formBox}>
                <div style={{ fontWeight: "700", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", color: "#9ca3af" }}>Add a new goal</div>
                <form onSubmit={addGoal}>
                  <label style={s.label}>Goal Name</label>
                  <input style={s.input} type="text" value={gTitle} onChange={(e) => setGTitle(e.target.value)} placeholder="e.g. Run 10km total" required />
                  <label style={s.label}>Target Number</label>
                  <input style={s.input} type="number" value={gTarget} onChange={(e) => setGTarget(e.target.value)} placeholder="e.g. 10" required />
                  <label style={s.label}>Unit</label>
                  <select style={s.select} value={gUnit} onChange={(e) => setGUnit(e.target.value)}>
                    <option>sessions</option>
                    <option>kcal</option>
                    <option>mins</option>
                    <option>days</option>
                    <option>steps</option>
                  </select>
                  <button type="submit" style={s.btn("#4f46e5")}>Add Goal</button>
                </form>
              </div>
              <div style={s.formBox}>
                <div style={{ fontWeight: "700", marginBottom: "16px", fontSize: "13px", textTransform: "uppercase", color: "#9ca3af" }}>Your current goals</div>
                {goals.map((g) => {
                  let pct = Math.floor((g.current / g.target) * 100);
                  if (pct > 100) pct = 100;
                  return (
                    <div key={g.id} style={{ marginBottom: "20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                        <span>{g.title}</span>
                        <span style={{ color: "#9ca3af" }}>{g.current} / {g.target} {g.unit}</span>
                      </div>
                      <div style={{ background: "#e5e7eb", height: "10px", borderRadius: "999px", overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, background: "#4f46e5", height: "100%" }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {page === "profile" && (
          <div style={s.profileBox}>
            <div style={s.h1}>Profile</div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Full Name</label>
              <input style={s.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Age</label>
              <input style={s.input} type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Weight (kg)</label>
              <input style={s.input} type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Height (cm)</label>
              <input style={s.input} type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}