
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface IconProps {
  className?: string
}

export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col">
        <Button variant="ghost" size="icon" className="rounded-full md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      <div className="flex flex-1">
        <nav className="hidden h-full border-r p-4 md:block">
          <div className="grid gap-4">
            <Link href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200" prefetch={false}>
              <InfoIcon className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200" prefetch={false}>
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200" prefetch={false}>
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </nav>
        <main className="flex flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="space-y-4">
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm">
                <p>Hello, how can I assist you today?</p>
                <div className="text-xs text-gray-400">AI Assistant</div>
              </div>
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm">
                <p>I'm looking to analyze my website's performance. Can you help me with that?</p>
                <div className="text-xs text-gray-500 dark:text-gray-400">You</div>
              </div>
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-gray-50">
                <p>
                  Certainly! I'd be happy to help you analyze your website's performance. What specific metrics are you
                  interested in reviewing?
                </p>
                <div className="text-xs text-gray-400">AI Assistant</div>
              </div>
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm">
                <p>I'd like to look at traffic, conversion rates, and page load times.</p>
                <div className="text-xs text-gray-500 dark:text-gray-400">You</div>
              </div>
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-gray-50">
                <p>Okay, let me pull up that data for you. One moment please...</p>
                <div className="text-xs text-gray-400">AI Assistant</div>
              </div>
            </div>
          </div>
          <div className="border-t p-4 md:p-6">
            <form className="flex w-full items-center space-x-2">
              <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" />
              <Button type="submit" size="icon">
                <SendIcon className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

function BotIcon(type: IconProps) {
  return (
    <svg
      {...type}
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function InfoIcon(type: IconProps) {
  return (
    <svg
      {...type}
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MenuIcon(type: IconProps) {
  return (
    <svg
      {...type}
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


function SendIcon(type: IconProps) {
  return (
    <svg
      {...type}
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SettingsIcon(type: IconProps) {
  return (
    <svg
      {...type}
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(type: IconProps) {
  return (
    <svg
      {...type}
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}