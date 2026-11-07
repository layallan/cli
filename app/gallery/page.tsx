import { PageHero } from "../components/page-hero";
import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";

import { ResearchSlideshow } from "./research-slideshow";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <SiteShell>
      <main>
        <PageHero title="Gallery" />
        <div className="section shell">
          <ResearchSlideshow />
        </div>
      </main>
    </SiteShell>
  );
}
