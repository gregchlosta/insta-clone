import Moment from 'react-moment'

export default function Comment({ image, comment, username, date }) {
  return (
    <div className='flex items-center space-x-2 mb-3'>
      <img className='h-7 rounded-full' src={image} alt='' />
      <p className='text-sm flex-1'>
        <span className='font-bold mr-2'>{username}</span>
        {comment}
      </p>

      <Moment fromNow className='pr-5 text-xs'>
        {date}
      </Moment>
    </div>
  )
}
