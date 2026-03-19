import "./Home.css";
import Hero from "../../../components/Sections/Hero/Hero";
import FeaturedSection from "../../../components/Sections/FeaturedSection/FeaturedSection";
import ShopFeaturesSection from "../../../components/Sections/ShopFeaturesSection/ShopFeaturesSection"
import ExploreCollectionSection from "../../../components/Sections/ExploreCollectionSection/ExploreCollectionSection";
export default function Home() {
  return (
    <>
    <Hero/>
      <ShopFeaturesSection />
      <FeaturedSection />
      <ExploreCollectionSection />
    </>
  );
}
