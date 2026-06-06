import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          Career<span className="text-indigo-600">Path</span>
        </Link>
        <Link
          href="/quiz"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
        >
          Take the Quiz
        </Link>
      </div>
    </header>
  );
}
