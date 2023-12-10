async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  console.log(data)
}  

async function Page({ params }) {
  
  await loadPost(params.pageId)
  
  return (
    <div>Post Page: { params.pageId}</div>
  )
}

export default Page