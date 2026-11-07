/* eslint-disable @next/next/no-img-element */
import { PageHero } from "../components/page-hero";
import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";

const images = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/home`;

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <SiteShell>
      <main>
        <PageHero title="Gallery" />
        <div className="section shell lab-gallery">
          <figure>
            <img src={`${images}/optical-table.webp`} alt="A researcher adjusting equipment at the optical table" />
            <figcaption>At the optical table</figcaption>
          </figure>
          <figure>
            <a href={`${images}/xtcav-measurement.png`}>
              <img src={`${images}/xtcav-measurement.png`} alt="XTCAV measurement with a current profile above a time–energy density plot" />
            </a>
            <figcaption>Longitudinal phase space measured with XTCAV</figcaption>
          </figure>
        </div>
      </main>
    </SiteShell>
  );
}
