import Link from 'next/link'
import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function LayoutAbout({children}: Props) {
  return (
    <div>

        <nav>
            <ul>
                <li>
                    <Link href="/about/mission" >Mishion Of The Project</Link>
                </li>
            </ul>
        </nav>
        
        {children}
        
        </div>
  )
}