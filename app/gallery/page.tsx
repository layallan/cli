import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <SiteShell>
      <main className="empty-page">
        <div className="shell">
          <p className="eyebrow">
            Center of Light Intelligence Research Lab
          </p>
          <h1>Gallery</h1>
        </div>
      </main>
    </SiteShell>
  );
}
