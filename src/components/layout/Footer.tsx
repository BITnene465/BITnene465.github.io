function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-bg-alt/80 backdrop-blur">
      <div className="page-wrapper py-8 flex flex-col gap-3 text-sm text-text-muted">
        <p>© {new Date().getFullYear()} BITnene465 · Personal Research Hub</p>
        <p>
          Built with React, HashRouter, and Tailwind. Deploys automatically to GitHub Pages when
          <span className="text-text-main font-medium"> main</span> updates.
        </p>
      </div>
    </footer>
  )
}

export default Footer
