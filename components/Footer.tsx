export function Footer() {
  return (
    <footer className="bg-void-soft">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-ink-dim md:flex-row">
        <span>© {new Date().getFullYear()} AETHERYON Systems</span>
        <span className="font-mono uppercase tracking-[0.2em]">REST API / Integración</span>
      </div>
    </footer>
  );
}