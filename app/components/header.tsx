import React from 'react'
import { ModeToggle } from '@/components/ui/modetoggle'

const Header = () => {
      return (
        <div className="flex items-center justify-between px-4 py-2 border-b">
              <div className="text-xl font-bold">Model Merge</div>
          <ModeToggle />
        </div>
      );
    };

export default Header 