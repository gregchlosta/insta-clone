import faker from 'faker'
import { useEffect, useState } from 'react/cjs/react.development'
import Suggestion from './Suggestion'

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-400 font-semibold'>See All</button>
      </div>

      {suggestions.map((profile) => (
        <Suggestion
          key={profile.id}
          image='https://lh3.googleusercontent.com/ogw/ADea4I76Q-SDgTSHa-wldtLHkCmsu9rH7Qh4uhGjKnrZdA=s83-c-mo'
          username={profile.username}
          companyName={profile.company.name}
        />
      ))}
    </div>
  )
}
