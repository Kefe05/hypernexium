import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black py-20 px-10'>
        <div className='flex justify-between'>
            <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Hyper Nexium Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            </div>
            <div className='flex gap-20'>
                <ul className='flex flex-col text-white'>
                    <li>Company</li>
                    {[1, 2, 3].map(() => (
                        <li>Hello World</li>
                    ))}
                </ul>
                <ul className='flex flex-col text-white'>
                    <li>Company</li>
                    {[1, 2, 3,4, 5].map(() => (
                        <li>Hello World</li>
                    ))}
                </ul>
                <ul className='flex flex-col text-white'>
                    <li>Company</li>
                    {[1, 2].map(() => (
                        <li>Hello World</li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}
