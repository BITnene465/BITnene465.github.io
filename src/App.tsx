function App() {
  return (
    <div className="app-shell">
      <main className="page-wrapper flex flex-col items-center justify-center text-center gap-6 min-h-screen">
        <span className="text-xs uppercase tracking-[0.6em] text-accent">setup</span>
        <h1 className="text-4xl sm:text-5xl font-semibold text-gradient">
          Tailwind CSS is live
        </h1>
        <p className="max-w-2xl text-text-muted">
          We replaced the default Vite styles with a cohesive global system powered by
          Tailwind CSS. Future pages will reuse these tokens for a calm, techy feel.
        </p>
        <div className="glass-panel px-8 py-6 max-w-xl w-full">
          <p className="text-sm text-text-muted">
            Next up: routing, layouts, and the rest of the information architecture.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
