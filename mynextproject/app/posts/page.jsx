async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
}

function PostPages() {
    loadPosts()
 
    return (
        <div>PostPages</div>
    )
}

export default PostPages