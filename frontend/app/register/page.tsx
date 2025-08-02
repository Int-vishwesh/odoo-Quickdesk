'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'end_user' 
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false) 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Enhanced validation
    if (!form.name.trim()) {
      setError("Name is required")
      setLoading(false)
      return
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match")
      setLoading(false)
      return
    }
    if (form.password.length < 8) {
      setError("Password must be 8+ characters")
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role // Include role in registration
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Registration failed')
      }

      // Success message and redirect
      alert('Registration successful! Please login with your credentials.')
      router.push('/login')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed')
      console.error('Registration error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-gray-950 text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-400 text-sm">Join QuickDesk to manage support tickets</p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 text-red-200 rounded-md text-center text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-300">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your email address"
              />
            </div>

            {/* Role Selection - As per PDF requirements */}
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-300">
                Account Type *
              </label>
              <select
                value={form.role}
                onChange={(e) => setForm({...form, role: e.target.value})}
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent text-white"
              >
                <option value="end_user">End User - Create and track tickets</option>
                <option value="support_agent">Support Agent - Manage and resolve tickets</option>
                <option value="admin">Administrator - Manage users and system</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Choose your role in the system</p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-300">
                Password *
              </label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters required</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-medium mb-2 text-gray-300">
                Confirm Password *
              </label>
              <input
                type="password"
                required
                value={form.confirmPassword}
                onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button - Using blue-700 as requested */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-md font-medium transition-colors duration-200 text-white"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">Already have an account? </span>
            <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
              Sign in here
            </Link>
          </div>

          {/* Role Information */}
          <div className="mt-6 p-3 bg-gray-800 rounded-md">
            <h3 className="text-xs font-medium text-gray-300 mb-2">Account Types:</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• <strong>End User:</strong> Create and track support tickets</li>
              <li>• <strong>Support Agent:</strong> Respond to and resolve tickets</li>
              <li>• <strong>Administrator:</strong> Manage users, categories, and system</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
