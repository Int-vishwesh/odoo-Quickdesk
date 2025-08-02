import Link from 'next/link';
import Navbar from './components/Navbar';

export default function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-t from-gray-950 to-gray-600 text-white h-[100vh] py-40">
        <div className="container  mx-auto px-6 text-center py-20">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Streamline Your Support with QuickDesk
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            The intuitive help desk solution that makes ticket management effortless 
            for teams and users alike.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-3 bg-blue-700 text-black rounded-lg font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 border-2 border-blue-700 text-blue-700 rounded-lg font-medium hover:shadow shadow-amber-50 hover:bg-opacity-10 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📋',
                title: 'Ticket Management',
                description: 'Easily create, track, and resolve support tickets'
              },
              {
                icon: '👥',
                title: 'Role-Based Access',
                description: 'Different views for users, agents, and admins'
              },
              {
                icon: '📊',
                title: 'Real-Time Updates',
                description: 'Instant notifications on ticket status changes'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <footer>
      </footer>
    </div>
    </>
  );
}