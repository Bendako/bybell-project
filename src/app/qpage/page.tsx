import Link from 'next/link'
import React from 'react'
import Verse from '@/components/Verse'

type Props = {}

export default function qpage({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-bold mb-4">qpage</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/">
          <span className="text-white">חזרה</span>
        </Link>
      </button>
    </div>
  )
}