import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-[calc(100vh-64px)] bg-gray-950 text-white flex items-center justify-center p-4">
        {/* Compact Register Card */}
        <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-2 text-center">Create Account</h1>
          <p className="text-gray-400 mb-6 text-center text-sm">
            Join QuickDesk and streamline your support workflow
          </p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium mb-1 text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-medium mb-1 text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-medium mb-1 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-xs font-medium mb-1 text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-gray-500">
                Minimum 8 characters with at least one number
              </p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-medium mb-1 text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-4">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                  required
                />
              </div>
              <div className="ml-2 text-xs">
                <label htmlFor="terms" className="text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-blue-400 hover:underline">
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-medium text-sm transition duration-200"
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-400 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}