export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src='https://lh3.googleusercontent.com/ogw/ADea4I76Q-SDgTSHa-wldtLHkCmsu9rH7Qh4uhGjKnrZdA=s83-c-mo'
        className='w-16 h-16 rounded-full border p-[2px] '
        alt=''
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>gregc</h2>
        <h3 className='text-sm text-gray-400'>Welcom to Instagram</h3>
      </div>

      <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}
