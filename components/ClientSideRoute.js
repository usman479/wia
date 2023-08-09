'use client'
import Link from 'next/link'
import React from 'react'

export default function ClientSideRoute({children,route,classN}) {
  return (
    <Link href={route} className={classN}>{children}</Link>
  )
}
