async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data
}

async function HomePage() {

  const users = await fetchUsers()

  return (
    <div>HomePage</div>
  )
}

export default HomePage