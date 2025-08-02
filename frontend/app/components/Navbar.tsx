import Link from 'next/link'

export default function MainNav() {
  // In real app, get from auth/session
  const isLoggedIn = false
  const isAdmin = false

  return (
    <header className=" bg-gray-950 text-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold ml-4 text-2xl">
          QuickDesk | <span className='text-sm font-light text-[12px]'>get solution at lightning speed</span>
        </Link>
        
        <nav className="flex items-center gap-5">
          {isLoggedIn ? (
            <>
              <Link href="/homepage" className="text-[17px] hover:underline">
                Home
              </Link>
              <Link href="/dashboard" className="text-[17px] hover:underline">
                Dashboard
              </Link>
              {isAdmin && (
                <Link href="/admin" className="text-[17px] hover:underline">
                  Admin
                </Link>
              )}
              <Link href="/profile" className="text-[17px] hover:underline">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-[17px] hover:underline">
                Login
              </Link>
              <Link href="/register" className="text-[17px] hover:underline">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}