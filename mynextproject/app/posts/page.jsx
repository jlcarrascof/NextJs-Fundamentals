async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

async function PostPages() {
    
    const posts = await loadPosts()
    console.log(posts)
    
    return (
        <div>PostPages</div>
    )
}

export default PostPages