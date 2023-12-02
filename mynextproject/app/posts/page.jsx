async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

async function PostPages() {
    
    const posts = await loadPosts()

    return (
        <div>
            {
                posts.map((post) => (

                ))
            }
        </div>
    );
}

export default PostPages