export default function Suggestion({ image, username, companyName }) {
  return (
    <div className='flex items-center justify-between mt-3'>
      <img
        src={image}
        className='w-10 h-10 rounded-full border p-[2px]'
        alt=''
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-semibold text-sm'>{username}</h2>
        <h3 className='text-xs text-gray-400'>Works at {companyName}</h3>
      </div>
      <button className='text-blue-400 text-xs font-bold'>Follow</button>
    </div>
  )
}
