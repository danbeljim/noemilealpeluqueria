import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function ServiciosPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
