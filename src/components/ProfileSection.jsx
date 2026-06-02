"use client";
import { useState } from "react";

export default function ProfileSection({ name, setName, age, setAge, weight, setWeight, height, setHeight, s }) {
  const [editing, setEditing] = useState(false);
  const [tName, setTName] = useState(name);
  const [tAge, setTAge] = useState(age);
  const [tWeight, setTWeight] = useState(weight);
  const [tHeight, setTHeight] = useState(height);

  function save() {
    setName(tName);
    setAge(tAge);
    setWeight(tWeight);
    setHeight(tHeight);
    setEditing(false);
  }

  return (
    <div style={s.profileBox}>
      <div style={s.h1}>Profile</div>
      {!editing ? (
        <div>
          <div style={{ marginTop: 12 }}><strong>{name}</strong></div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>{age} yrs • {weight} kg • {height} cm</div>
          <div style={{ marginTop: 12 }}>
            <button onClick={() => setEditing(true)} style={s.btn("#4f46e5")}>Edit Profile</button>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 12 }}>
          <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Full Name</label>
          <input style={s.input} value={tName} onChange={(e) => setTName(e.target.value)} />
          <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Age</label>
          <input style={s.input} value={tAge} onChange={(e) => setTAge(e.target.value)} />
          <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Weight (kg)</label>
          <input style={s.input} value={tWeight} onChange={(e) => setTWeight(e.target.value)} />
          <label style={{ ...s.label, color: "#9ca3af", fontSize: "11px", textTransform: "uppercase" }}>Height (cm)</label>
          <input style={s.input} value={tHeight} onChange={(e) => setTHeight(e.target.value)} />
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={save} style={s.btn("#16a34a")}>Save</button>
            <button onClick={() => setEditing(false)} style={{ ...s.btn("#6b7280"), background: "#9ca3af" }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}