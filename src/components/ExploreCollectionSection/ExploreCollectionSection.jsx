import "./ExploreCollectionSection.css"
import ExploreCollectionItem from "../ExploreCollectionItem/ExploreCollectionItem";
import Title from "../Title/Title";
import { ExploreCollectionSectionData } from "../Data/ExploreCollectionSectionData";
export default function ExploreCollectionSection() {
    return (
        <>
            <section className=" flex-center collection-section">
                <Title title="Explore Collections"
                    line="line-sec"
                    type="sections-description"
                />
                <div className="flex-center collections-div">
                    {
                        ExploreCollectionSectionData.map((collection, id) => (
                            <ExploreCollectionItem
                                key={id}
                                img={collection.img}
                                title={collection.title}
                                id={collection.id}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    );
}