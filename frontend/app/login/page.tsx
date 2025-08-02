import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-[#171717] text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center">
          {/* Login Card */}
          <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
            <p className="text-gray-400 mb-8 text-center">
              Sign in to your QuickDesk account
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">
                    Remember me
                  </label>
                </div>
                
                <Link href="/forgot-password" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition duration-200"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-400 hover:underline font-medium">
                  Register here
                </Link>
              </p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} QuickDesk. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}