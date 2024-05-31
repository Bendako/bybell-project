import Link from 'next/link'
import React from 'react'
import Verse from '@/components/Verse'
import Qverse from '@/components/Qverse'

type Props = {}

export default function qpage({}: Props) {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className='m-5'>
        <blockquote className="border-l-4 pl-4 italic text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">
          <Qverse  />
        </blockquote>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/">
          <span className="text-white">חזרה</span>
        </Link>
      </button>
    </div>
  )
}