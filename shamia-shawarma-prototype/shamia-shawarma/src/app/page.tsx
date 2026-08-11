import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedDropdown from "@/components/FeaturedDropdown";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import WhereWeAre from "@/components/WhereWeAre";
import OrderButtons from "@/components/OrderButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedDropdown />
        <Services />
        <Menu />
        <Reviews />
        <WhereWeAre />
        <OrderButtons />
      </main>
      <Footer />
    </>
  );
}
