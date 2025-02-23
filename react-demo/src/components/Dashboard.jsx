function Dashboard({ onLogout }) {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name || user.email}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Dashboard 