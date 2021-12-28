import React from 'react'
import Image from 'next/image'
import { HomeIcon } from '@heroicons/react/outline'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        <div
          onClick={() => router.push('/')}
          className='relative hidden lg:inline-grid w-24 cursor-pointer'
        >
          <Image
            src='http://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div
          onClick={() => router.push('/')}
          className='relative lg:hidden flex-shrink-0 w-10 cursor-pointer'
        >
          <Image
            src='http://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <div>
              <input
                type='text'
                placeholder='Search'
                className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'
              />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => router.push('/')} className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          {session ? (
            <>
              <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className='absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse'>
                  3
                </div>
              </div>
              <PlusCircleIcon
                className='navBtn'
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className='navBtn' />
              <HeartIcon className='navBtn' />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt=''
                className='h-10 w-10 rounded-full cursor-pointer'
              ></img>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}
