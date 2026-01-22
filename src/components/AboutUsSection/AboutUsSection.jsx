import AboutUsItem from "../AboutUsItem/AboutUsItem";
import Title from "../Title/Title";
import "./AboutUsSection.css"
import { PiTree } from "react-icons/pi";
import { GiSewingString } from "react-icons/gi";
import { GiSewingNeedle } from "react-icons/gi";

export default function AboutUsSection() {


    return (
        <>
            <section className="flex-center about-us-section">
                <Title
                    title="Our Story"
                    line="line-sec"
                    text="Driven a passion the tineless elegance exceptional quality, lwhodsg modern luxury and emt. We believe that tells story, designed your elegant style with of sophistcation."
                    type="sections-description "
                />
              
                <div className="flex-center about-us-div">
                    <AboutUsItem
                        title="QUALITY"
                        icon={GiSewingNeedle}
                    />
                    <AboutUsItem
                        title="CRAFTSMUNSHIP"
                        icon={GiSewingString}
                    />
                    <AboutUsItem
                        title="SUSTANABILITY"
                        icon={PiTree}
                    />

                </div>

                <div>


                </div>


            </section>

        </>
    );
}
