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
        <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md text-black flex">
          <div>
            <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
          </div>
          <p className="text-slate-100">Email: {user.email}</p>
          <img src={user.avatar} alt={user.first_name} />
        </li>
      ))}
    </ul>  
  )
}

export default HomePage