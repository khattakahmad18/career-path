import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function QuizPage() {
  return (
    <>
      <Navbar />
      <PagePlaceholder
        eyebrow="Quiz"
        title="The quiz is coming soon"
        description="This is where you'll answer a few quick questions to discover your career path. We're still building it."
      />
      <Footer />
    </>
  );
}
