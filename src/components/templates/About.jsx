import Article from "../organisms/Article";

import imageArticle_01 from '../../assets/images/Work_Image_03.png';
import imageArticle_02 from '../../assets/images/Work_Image_01.png';

const About = () => {
    return (
        <>
            <Article smallTitle={"about-company"} contents={["about-company-title.part_one", "about-company-title.part_two", "about-company-title.part_three", "about-company-title.part_fourth"]} header={"about-company-header"} imageUrl={imageArticle_01} side={"left"} />
            <Article contents={["about-work-company-title.part_one", "about-work-company-title.part_two", "about-work-company-title.part_three", "about-work-company-title.part_fourth"]} imageUrl={imageArticle_02} side={"right"} />
        </>
    )
}

export default About;