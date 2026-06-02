export default function Sidebar({
  page,
  setPage,
  name,
  s
}) {
  return (
    <div style={s.sidebar}>
      <div>
        <div style={s.logo}>FIT-TRACKER</div>

        <button
          style={s.navBtn(page === "home")}
          onClick={() => setPage("home")}
        >
          Main Dashboard
        </button>

        <button
          style={s.navBtn(page === "add")}
          onClick={() => setPage("add")}
        >
          Activity History
        </button>

        <button
          style={s.navBtn(page === "goals")}
          onClick={() => setPage("goals")}
        >
          My Goals
        </button>

        <button
          style={s.navBtn(page === "profile")}
          onClick={() => setPage("profile")}
        >
          Profile
        </button>
      </div>

      <div style={s.footerText}>
        Logged in as: <strong>{name}</strong>
      </div>
    </div>
  );
}