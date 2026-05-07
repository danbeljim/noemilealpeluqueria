import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function TestimoniosPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
