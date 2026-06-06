import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <PagePlaceholder
        eyebrow="Roadmap"
        title="Your roadmap is on the way"
        description="This page will lay out a step-by-step roadmap with the skills and milestones to reach your next career move."
      />
      <Footer />
    </>
  );
}
