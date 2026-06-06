import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const features = [
  {
    icon: "📝",
    title: "Quick quiz",
    description:
      "Answer a handful of simple questions about your interests, skills, and goals. No sign-up required.",
  },
  {
    icon: "🎯",
    title: "Personalized match",
    description:
      "Get a career direction tailored to your answers, with a clear explanation of why it fits you.",
  },
  {
    icon: "🗺️",
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
