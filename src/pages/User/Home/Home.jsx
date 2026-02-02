import "./Home.css"
import Hero from "../../../components/Hero/Hero"
import FeaturedSection from "../../../components/FeaturedSection/FeaturedSection";
import ShopFeaturesSection from "../../../components/ShopFeaturesSection/ShopFeaturesSection";
import ExploreCollectionSection from "../../../components/ExploreCollectionSection/ExploreCollectionSection";
export default function Home() {
  return (
    <>
      <Hero />
      <ShopFeaturesSection/>
      <FeaturedSection />
      <ExploreCollectionSection/>
      

    </>
  );
}
