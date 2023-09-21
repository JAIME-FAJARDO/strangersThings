import { useState, useEffect } from "react"
import { fetchPosts } from "../API"


// export default function Posts ({ token }) {
//     // TODO see a list of all posts
//     // TODO Create a new post
//     const [posts, setPosts] = useState([])
    
//     return (
//         <div>
//             <h1>Posts</h1>
//         </div>
//     )
// }

export default function Posts ({ token }) {
// const Posts = () => { 
//     // TODO see a list of all posts
//     // TODO Create a new post
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const posts = await fetchPosts();
            setPosts(posts);
        }
        fetchData();

    }, [])

    console.log(posts);
    
    return (
        <div>
           <h1>Posts</h1>
            {
              posts.map(({id, title, description, price, author , location }) => (          
                <div className="post" key={id}>
                   <h2>{title}</h2>
                   <p>{description}</p>
                   <p>Price: {price}</p>
                   <p>Created by: {author.username}</p>
                   <p>Location: {location}</p>
                </div>   
              ))
            }
        </div>
    )
}

