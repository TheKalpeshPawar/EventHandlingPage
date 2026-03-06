import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">TechSummit'26</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">About</a>
              <a href="#schedule" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Schedule</a>
              <a href="#speakers" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Speakers</a>
              <a href="#register" className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition duration-300">Register Now</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">About</a>
            <a href="#schedule" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Schedule</a>
            <a href="#speakers" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Speakers</a>
            <a href="#register" className="block bg-indigo-600 text-white px-4 py-2 rounded-md font-medium text-center">Register Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-4">Innovation for Tomorrow</h2>
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Empowering Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Tech Leaders</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Join us for the most anticipated tech event of the year. Experience keynote sessions, workshops, and networking with industry experts.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#register" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition duration-300">
          Secure Your Spot
        </a>
        <a href="#schedule" className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 rounded-full font-bold hover:bg-indigo-50 transition duration-300">
          View Schedule
        </a>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 font-medium italic">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-900 not-italic">April 15-16</span>
          <span>Event Date</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-900 not-italic">Main Auditorium</span>
          <span>Location</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-900 not-italic">500+</span>
          <span>Attendees</span>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Event" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is TechSummit'26?</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            TechSummit is our college's flagship technology conference, bringing together the brightest minds to explore the frontiers of innovation. This year, we're focusing on AI, Sustainability, and the Future of Web.
          </p>
          <ul className="space-y-4">
            {[
              "Immersive Hands-on Workshops",
              "Expert Keynote Sessions",
              "Global Networking Opportunities",
              "Exclusive Tech Exhibitions"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Schedule = () => {
  const sessions = [
    { time: "09:00 AM", title: "Opening Ceremony", description: "Grand kick-off with special guest speakers." },
    { time: "11:00 AM", title: "Future of AI", description: "Exploring generative AI and its impact." },
    { time: "01:00 PM", title: "Networking Lunch", description: "Connect with peers and mentors." },
    { time: "02:30 PM", title: "Hands-on Workshop", description: "Building scalable web applications." },
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Event Schedule</h2>
          <p className="text-gray-600 mt-4">Mark your calendars for Day 1</p>
        </div>
        <div className="space-y-8">
          {sessions.map((session, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 group">
              <div className="md:w-32 text-indigo-600 font-bold text-xl">{session.time}</div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:border-indigo-300 transition duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{session.title}</h3>
                <p className="text-gray-600">{session.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Speakers = () => {
  const speakers = [
    { name: "Jane Doe", role: "AI Lead at TechCorp", img: "https://i.pravatar.cc/150?u=jane" },
    { name: "John Smith", role: "Senior Developer", img: "https://i.pravatar.cc/150?u=john" },
    { name: "Alex Rivera", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?u=alex" },
    { name: "Sarah Chen", role: "Cloud Architect", img: "https://i.pravatar.cc/150?u=sarah" },
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">Meet Our Speakers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-indigo-50 transition duration-300 group">
              <img src={speaker.img} alt={speaker.name} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white group-hover:border-indigo-200 transition" />
              <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
              <p className="text-gray-600 mt-2">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold mb-8">TechSummit'26</h2>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
      </div>
      <p className="text-gray-500">© 2026 TechSummit. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Footer />
    </div>
  );
};

export default App;
