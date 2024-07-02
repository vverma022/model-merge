import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet"
import Main from "../../pages/main"
import LogoIcon from "../../assets/logo"


export default function Sidebar() {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r">
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-6">
            <Link  className="flex items-center gap-2 font-bold" to={"/"}>
              <LogoIcon className="h-6 w-6" />
              <span className="text-lg">ModelMerge</span>
            </Link>
            <nav className="space-y-1">
              <Link
                
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                to={"/"}
              >
                <HomeIcon className="h-5 w-5" />
                About-Us
              </Link>
              <Link
                
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                to={"/"}
              >
                <ActivityIcon className="h-5 w-5" />
                Models
              </Link>
              <div
                
                className="flex justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
              >
                Recents
              </div>
            </nav>
          </div>
          <div className="space-y-4">
            <Button variant="outline" size="sm" className="w-full">
              Upgrade to Pro
            </Button>
            <div className="flex gap-2 text-sm justify-center">
              <GlobeIcon className="h-5 w-5" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <header className="sticky top-0 z-10 border-b lg:hidden">
          <div className="flex items-center justify-between">
            <Link  className="flex items-center gap-2 font-bold" to={"/"} >
              <MountainIcon className="h-6 w-6 ml-2" />
              <span className="text-lg">ModelMerge</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="m-2">
                  <MenuIcon className="h-6 w-6"/>
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex h-full flex-col justify-between py-6 px-4">
                  <div className="space-y-6">
                    <nav className="space-y-1">
                      <Link
                        
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                        to={"/"}
                      >
                        <HomeIcon className="h-5 w-5" />
                        Home
                      </Link>
                      <Link
                        
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                        to={"/"}
                      >
                        <LayoutGridIcon className="h-5 w-5" />
                        Products
                      </Link>
                      <Link
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                        to={"/"}
                      >
                        <UsersIcon className="h-5 w-5" />
                        Customers
                      </Link>
                      <Link
                        
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                        to={"/"}
                      >
                        <ActivityIcon className="h-5 w-5" />
                        Analytics
                      </Link>
                    </nav>
                  </div>
                  <div className="space-y-4">
                    <Button variant="outline" size="sm" className="w-full">
                      Upgrade to Pro
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <GlobeIcon className="h-5 w-5" />
                      <span>English</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
       <Main />
      </div>
    </div>
  )
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LayoutGridIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}




function MenuIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props  : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      href="../../assets/logomm.svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UsersIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}