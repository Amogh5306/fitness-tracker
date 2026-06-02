"use client";
import { useState } from "react";

export default function GoalSection({ goals, addGoal, deleteGoal, s }) {
  const [gTitle, setGTitle] = useState("");
  const [gTarget, setGTarget] = useState("");
  const [gUnit, setGUnit] = useState("sessions");

  function submit(e){
    e.preventDefault();
    if (!gTitle.trim() || Number(gTarget) <= 0) return;
    addGoal({ id: Math.random(), title: gTitle, current: 0, target: Number(gTarget), unit: gUnit });
    setGTitle(""); setGTarget("");
  }

  return (
    <div>
      <div style={s.h1}>Goals</div>
      <div style={s.sub}>Track your fitness targets.</div>
      <div style={s.grid2eq}>
        <div style={s.formBox}>
          <div style={{ fontWeight: 700, marginBottom: 16, fontSize: 13, textTransform: "uppercase", color: "#9ca3af" }}>Add a new goal</div>
          <form onSubmit={submit}>
            <label style={s.label}>Goal Name</label>
            <input style={s.input} value={gTitle} onChange={e=>setGTitle(e.target.value)} placeholder="e.g. Run 10km total" required />
            <label style={s.label}>Target Number</label>
            <input style={s.input} type="number" value={gTarget} onChange={e=>setGTarget(e.target.value)} placeholder="e.g. 10" required />
            <label style={s.label}>Unit</label>
            <select style={s.select} value={gUnit} onChange={e=>setGUnit(e.target.value)}>
              <option>sessions</option>
              <option>kcal</option>
              <option>mins</option>
              <option>days</option>
              <option>steps</option>
            </select>
            <button style={s.btn("#4f46e5")} type="submit">Add Goal</button>
          </form>
        </div>
        <div style={s.formBox}>
          <div style={{ fontWeight: 700, marginBottom: 16, fontSize: 13, textTransform: "uppercase", color: "#9ca3af" }}>Your current goals</div>
          {goals.map(g=>{
            let pct = Math.floor((g.current / g.target) * 100); if (pct>100) pct = 100;
            return (
              <div key={g.id} style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                  <span>{g.title}</span>
                  <span style={{ color: "#9ca3af" }}>{g.current} / {g.target} {g.unit}</span>
                </div>
                <div style={{ background: "#e5e7eb", height: 10, borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ width: `${pct}%`, background: "#4f46e5", height: "100%" }}></div>
                </div>
                <div style={{ marginTop: 8 }}><button onClick={()=>deleteGoal(g.id)} style={{ ...s.btn("#ef4444"), width: "auto", padding: "6px 10px" }}>Delete</button></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
