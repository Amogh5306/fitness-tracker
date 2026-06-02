"use client";
export default function ActivityHistory({ workouts, s }) {
  return (
    <div>
      <div style={s.h1}>Activity History</div>
      <div style={s.sub}>All logged workouts.</div>
      <div style={s.tableWrap}>
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
            {workouts.map(w => (
              <tr key={w.id}>
                <td style={{ ...s.td, fontWeight: 700, color: "#4f46e5" }}>{w.type}</td>
                <td style={{ ...s.td, color: "#9ca3af" }}>{w.date}</td>
                <td style={s.td}>{w.duration}</td>
                <td style={{ ...s.td, fontWeight: 700 }}>{w.calories}</td>
                <td style={s.td}><span style={s.badge}>{w.intensity}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
