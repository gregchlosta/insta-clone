export default function Story({ img, username }) {
  return (
    <div>
      <img 
      className='h-14 w-14 rounded-full p-[1px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 easy-out'
      src='https://lh3.googleusercontent.com/ogw/ADea4I76Q-SDgTSHa-wldtLHkCmsu9rH7Qh4uhGjKnrZdA=s83-c-mo' alt=''/>
      <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}
