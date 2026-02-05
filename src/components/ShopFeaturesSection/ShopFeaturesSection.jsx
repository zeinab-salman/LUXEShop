import ShopFeatureComponent from "../ShopFeatureComponent/ShopFeatureComponent.jsx";
import "./ShopFeaturesSection.css";
import { ShopFeatureComponentData1 } from "../Data/ShopFeatureComponentData1.jsx";
export default function ShopFeaturesSection({}) {
  return (
    <>
      <section className="flex-center Shop-features">
        {ShopFeatureComponentData1.map((product, id) => (
          <ShopFeatureComponent
            key={id}
            title={product.title}
            text={product.text}
            divIcon={product.divIcon}
            id={product.id}
          />
        ))}
      </section>
    </>
  );
}
