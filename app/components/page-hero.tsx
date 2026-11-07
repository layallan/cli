export function PageHero({ title, description }: { title: string; description?: string }) {
  return (
    <header className="page-hero">
      <div className="shell">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}
