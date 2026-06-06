import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const svgProps = {
  width: 32,
  height: 32,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const features = [
  {
    icon: (
      <svg {...svgProps} stroke="#FACC15">
        <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
      </svg>
    ),
    iconWrapperClassName: "shadow-[0_0_18px_rgba(250,204,21,0.45)]",
    title: "Quick quiz",
    description:
      "Answer a handful of simple questions about your interests, skills, and goals. No sign-up required.",
  },
  {
    icon: (
      <svg {...svgProps} stroke="#60A5FA">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    iconWrapperClassName: "shadow-[0_0_18px_rgba(96,165,250,0.45)]",
    title: "Personalized match",
    description:
      "Get a career direction tailored to your answers, with a clear explanation of why it fits you.",
  },
  {
    icon: (
      <svg {...svgProps} stroke="#34D399">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
    iconWrapperClassName: "shadow-[0_0_18px_rgba(52,211,153,0.45)]",
    title: "Step-by-step roadmap",
    description:
      "Follow a practical roadmap with the skills and milestones to reach your next career move.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Find your next career move
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
              Take a short quiz and get a personalized career path with a
              step-by-step roadmap to get there.
            </p>
            <div className="mt-10">
              <Button href="/quiz">Take the Quiz</Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
