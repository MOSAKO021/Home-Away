import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import {LuTent} from 'react-icons/lu'

function Logo() {
  return (
    <Button size='icon' asChild className='w-12 h-12'>
      <Link href='/'>
        <LuTent className='w-14 h-14 scale-125'/>
      </Link>
    </Button>
  )
}

export default Logo
