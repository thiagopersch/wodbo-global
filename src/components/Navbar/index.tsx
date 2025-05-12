'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { updatedRoutes } from '@/config/routes'
import { cn } from '@/lib/utils'
import { Link as LinkIcon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ModeToggle } from '../ModeToggle'
import SidebarList from './SidebarList'

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [openSidebar, setOpenSidebar] = useState(false)
  const [currentSubMenu, setCurrentSubMenu] = useState<string | null>(null)

  const toggleSidebar = (newOpen: boolean) => () => {
    setOpenSidebar(newOpen)
  }

  return (
    <>
      <header className="relative z-10 border-b bg-black">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4">
          {/* Logo */}
          <div className="mr-4">
            <Link href="/">
              <LinkIcon className="h-8 w-8 text-white" />
            </Link>
          </div>

          {/* Tagline */}
          <span className="flex-1 text-sm font-semibold text-white italic">Integração TOTVS</span>

          {!isMobile ? (
            <div className="flex items-center gap-4">
              {/* Navigation Routes */}
              {updatedRoutes.map((route) =>
                route.children && route.children.length > 0 ? (
                  <DropdownMenu key={route.id}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="default" onClick={() => setCurrentSubMenu(route.id ?? '')}>
                        {route.name}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {route.children.map((child) => (
                        <DropdownMenuItem key={child.path} asChild>
                          <Link href={child.path} onClick={() => setCurrentSubMenu(null)}>
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button key={route.id} variant="default" asChild>
                    <Link href={route.path}>{route.name}</Link>
                  </Button>
                ),
              )}
              <ModeToggle />
            </div>
          ) : (
            <Button
              variant="default"
              size="icon"
              onClick={toggleSidebar(true)}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </header>

      {/* Sidebar for Mobile */}
      {isMobile && (
        <>
          {openSidebar && (
            <div
              className="fixed inset-0 z-10 bg-black/50"
              onClick={toggleSidebar(false)}
              aria-hidden="true"
            />
          )}
          <div
            className={cn(
              'fixed inset-y-0 right-0 z-20 w-64 transform border-r bg-white shadow-lg transition-transform duration-300',
              openSidebar ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <div className="flex items-center justify-between border-b p-4">
              <span className="text-sm text-gray-500 italic">Integração TOTVS</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar(false)}
                aria-label="Close sidebar"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <SidebarList open={openSidebar} toggleSidebar={toggleSidebar} />
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
