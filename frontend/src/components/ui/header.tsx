import React from 'react'
import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <header className="flex items-center h-16 px-4 border-b">
    <nav className="flex-1 hidden space-x-4 md:flex">
      <h1 className='text-2xl font-semibold'>ModelMerge</h1>
    </nav>
    <ModeToggle />
  </header>

  )
}

export default Header