import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22D3EE"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-white">
            Career<span className="text-[#22D3EE]">GPS</span>
          </span>
        </Link>
        <Link
          href="/quiz"
          className="text-sm font-medium text-slate-300 transition-colors hover:text-[#22D3EE]"
        >
          Take the Quiz
        </Link>
      </div>
    </header>
  );
}
