import Button from "@/components/Button";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
          {eyebrow}
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mb-8 text-base leading-relaxed text-slate-600">
          {description}
        </p>
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </main>
  );
}
