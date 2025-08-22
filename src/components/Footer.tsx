export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© Chainfluence 2025</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">Twitter</a>
          <a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

