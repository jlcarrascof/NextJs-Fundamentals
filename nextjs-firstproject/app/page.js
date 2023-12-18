async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage() {

  const users = await fetchUsers()

  return (
  
  )
}

export default HomePage