import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import faker from 'faker'
import Story from './Story'

export default function Stories() {
  const [suggestions, setSuggestion] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestion(suggestions)
  }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}
