import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        const posts = snapshot.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }))
        setPosts(posts)
      }
    )

    return unsubscribe
  }, [db])

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          profileImg={post.profileImg}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
