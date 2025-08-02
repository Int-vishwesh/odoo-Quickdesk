import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

export default function DashboardPage() {
  // Simple mock data
  const ticketCounts = {
    open: 5,
    inProgress: 2,
    resolved: 12
  };

  const recentTickets = [
    { id: 'TK-101', title: 'Cannot login to account', status: 'Open' },
    { id: 'TK-100', title: 'Password reset needed', status: 'In Progress' },
    { id: 'TK-99', title: 'Feature request', status: 'Open' },
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-[calc(100vh-64px)] bg-gray-950 text-white p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Dashboard</h1>
            <Link 
              href="/tickets/new"
              className="px-4 py-2 bg-blue-600 rounded-md text-sm hover:bg-blue-700 transition-colors duration-200"
            >
              + New Ticket
            </Link>
          </div>

          {/* Stats Cards - Removed hover since they're not clickable */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Open Tickets</p>
              <p className="text-2xl font-bold">{ticketCounts.open}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">In Progress</p>
              <p className="text-2xl font-bold">{ticketCounts.inProgress}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Resolved</p>
              <p className="text-2xl font-bold">{ticketCounts.resolved}</p>
            </div>
          </div>

          {/* Recent Tickets */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Tickets</h2>
            <div className="space-y-3">
              {recentTickets.map(ticket => (
                <Link 
                  key={ticket.id} 
                  href={`/tickets/${ticket.id}`}
                  className="block bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">{ticket.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded ${
                      ticket.status === 'Open' ? 'bg-blue-900 text-blue-300' :
                      'bg-yellow-900 text-yellow-300'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">ID: {ticket.id}</p>
                </Link>
              ))}
            </div>
            <Link 
              href="/tickets" 
              className="inline-block mt-3 text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200"
            >
              View all tickets →
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/profile"
              className="bg-gray-900 p-3 rounded-lg text-center hover:bg-gray-800 transition-colors duration-200"
            >
              My Profile
            </Link>
            <Link
              href="/settings"
              className="bg-gray-900 p-3 rounded-lg text-center hover:bg-gray-800 transition-colors duration-200"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}