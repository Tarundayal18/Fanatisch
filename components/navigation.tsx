export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-fanatisch-dark/80 backdrop-blur-md border-b border-fanatisch-yellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-fanatisch-yellow">Fanatisch</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-fanatisch-yellow transition-colors">
            About
          </a>
          <a href="#" className="text-white hover:text-fanatisch-yellow transition-colors">
            Services
          </a>
          <a href="#" className="text-white hover:text-fanatisch-yellow transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
