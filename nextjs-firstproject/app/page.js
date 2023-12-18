async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage() {

  const users = await fetchUsers()

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <div>
            <h5>{user.id} {user.first_name} {user.last_name}</h5>
          </div>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt={user.first_name} />
        </li>
      ))}
    </ul>  
  )
}

export default HomePage