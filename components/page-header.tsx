interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="w-full bg-gradient-to-b from-background to-secondary/50 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}