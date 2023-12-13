import PostPages from "../page"

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}  

async function Page({ params }) {
  
  const post = await loadPost(params.pageId)
  
  return (
    <div>
      <h1>{ post.id }.- {post.title}</h1>
      <p>{post.body}</p>

      <h3>Otras Publicaciones</h3>
      <hr />
      <PostPages />
    </div>
  )
}

export default Page