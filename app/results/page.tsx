import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <PagePlaceholder
        eyebrow="Results"
        title="Your results will appear here"
        description="Once the quiz is ready, this page will show your personalized career match based on your answers."
      />
      <Footer />
    </>
  );
}
