import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Comment from './Comment'
import { db } from '../firebase'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import {
  doc,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'

export default function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'posts', id, 'likes')), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  )

  async function sendComment(e) {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }

  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* User Image */}
      <div className='flex items-center p-5'>
        <img
          src={userImg}
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
          alt=''
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/* Image */}
      <img src={img} className='object-cover w-full' alt='' />

      {/* Buttons */}
      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            {hasLiked ? (
              <HeartIconSolid className='btn text-red-600' onClick={likePost} />
            ) : (
              <HeartIcon className='btn' onClick={likePost} />
            )}
            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/* Caption */}
      <div>
        <p className='p-5 truncate'>
          {likes.length > 0 && (
            <p className='font-bold mb-1'>{likes.length} likes</p>
          )}
          <span className='font-bold mr-1'>{username}</span>
          {caption}
        </p>
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              image={comment.data().userImage}
              comment={comment.data().comment}
              username={comment.data().username}
              date={comment.data().timestamp?.toDate()}
            />
          ))}
        </div>
      )}

      {/* Input Box */}
      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7' />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type='text'
            plaseholder='Add comment...'
            className='border-none flex-1 focus:ring-0 outline-none'
          />
          <button
            type='submit'
            disabled={!comment.trim()}
            onClick={sendComment}
            className='font-semibold text-blue-400'
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}
