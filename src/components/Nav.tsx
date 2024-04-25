import React from 'react'

type Props = {}

export default function Nav({}: Props) {
  return (
    <ul className="flex justify-center menu menu-horizontal bg-base-200">
        <li><a>כתובים</a></li>
        <li><a>נביאים</a></li>
        <li><a>תנ"ך</a></li>
    </ul>
  )
}