import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  ["Home", "/"],
  ["Team", "/team"],
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["Funding", "/funding"],
  ["Gallery", "/gallery"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="CLI home">
            <span className="brand-mark">CLI</span>
            <span className="brand-name">
              Center of Light Intelligence Research Lab
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <div>
              {navigation.map(([label, href]) => (
                <Link href={href} key={href}>
                  {label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <p className="footer-brand">
              Center of Light Intelligence Research Lab
            </p>
            <p>Teach light how to think.</p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.slice(1).map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
          <p className="footer-note">
            Photonics · Machine Learning · Scientific Discovery
          </p>
        </div>
      </footer>
    </>
  );
}
