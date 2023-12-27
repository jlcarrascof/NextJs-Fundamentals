function UserPage({ params }) {
    console.log(params);
  return (
    <div>
        <button onClick={() => 
            console.log('Testing UserPage')
        }>
            Click
        </button>
    </div>
  )
}

export default UserPage;