import Link from 'next/link'
import React from 'react'

type Props = {
    buttonTitle : string
}

const FiverrLinkButton = ({buttonTitle}: Props) => {
  return (
    <Link href="https://cutt.ly/qe1slUTX" target="_blank" className="bg-secoundary hover:bg-dipSecoundary px-4 lg:px-6 py-4 rounded text-sm lg:text-base uppercase text-white shadow">{buttonTitle}</Link>

  )
}

export default FiverrLinkButton