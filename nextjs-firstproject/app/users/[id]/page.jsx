async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

export default function UserPage({ params }) {
  console.log(params)  
  return (
    <div>
        <h1>User Page</h1>   
    </div>
  )
}