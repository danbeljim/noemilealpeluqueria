import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function GaleriaPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
