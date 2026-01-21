import "./ExploreCollectionSection.css"
import ExploreCollectionItem from "../ExploreCollectionItem/ExploreCollectionItem";
import img1 from "../../../public/images/product1.jpg"
import img2 from "../../../public/images/product2.jpg"
import img3 from "../../../public/images/product3.jpg"
import Title from "../Title/Title";
export default function ExploreCollectionSection() {
    return (
        <>
            <section className=" flex-center collection-section">
                <Title title="Explore Collections"
                line="line-sec"
                 type="sections-description"
                />
               <div className="flex-center collections-div">
                <ExploreCollectionItem
               img={img1}
                title="OuterWear"
                
                />
                 <ExploreCollectionItem
               img={img2}
                title="Accessories"
                
                />
                 <ExploreCollectionItem
               img={img3}
                title="Knitwear"
                
                />
               </div>
            </section>
        </>
    );
}