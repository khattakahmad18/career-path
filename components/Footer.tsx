export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row">
        <p>
          Career<span className="font-semibold text-slate-700">Path</span>
        </p>
        <p>© {new Date().getFullYear()} CareerPath. All rights reserved.</p>
      </div>
    </footer>
  );
}
