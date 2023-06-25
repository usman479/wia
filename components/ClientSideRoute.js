'use client'
import Link from 'next/link'
import React from 'react'

export default function ClientSideRoute({children,route}) {
  return (
    <Link href={route}>{children}</Link>
  )
}
