import Article from "../organisms/Article";
import Projects from "../organisms/Projects";

import imageArticle_01 from '../../assets/images/Work_Image_17.png';

/* Work Examples Images */
import imageExample_01 from '../../assets/images/Work_Image_05.png';
import imageExample_02 from '../../assets/images/Work_Image_06.png';
import imageExample_03 from '../../assets/images/Work_Image_07.png';
import imageExample_04 from '../../assets/images/Work_Image_08.png';
import imageExample_05 from '../../assets/images/Work_Image_09.png';
import imageExample_06 from '../../assets/images/Work_Image_10.png';
import imageExample_07 from '../../assets/images/Work_Image_11.png';
import imageExample_08 from '../../assets/images/Work_Image_12.png';
import imageExample_09 from '../../assets/images/Work_Image_13.png';
import imageExample_10 from '../../assets/images/Work_Image_14.png';
import imageExample_11 from '../../assets/images/Work_Image_15.png';
import imageExample_12 from '../../assets/images/Work_Image_16.png';

const contentProjects = [
    { imageUrl: imageExample_01, imageAlt: "Work Example" },
    { imageUrl: imageExample_02, imageAlt: "Work Example" },
    { imageUrl: imageExample_03, imageAlt: "Work Example" },
    { imageUrl: imageExample_04, imageAlt: "Work Example" },
    { imageUrl: imageExample_05, imageAlt: "Work Example" },
    { imageUrl: imageExample_06, imageAlt: "Work Example" },
    { imageUrl: imageExample_07, imageAlt: "Work Example" },
    { imageUrl: imageExample_08, imageAlt: "Work Example" },
    { imageUrl: imageExample_09, imageAlt: "Work Example" },
    { imageUrl: imageExample_10, imageAlt: "Work Example" },
    { imageUrl: imageExample_11, imageAlt: "Work Example" },
    { imageUrl: imageExample_12, imageAlt: "Work Example" },
]

const Portfolio = () => {
    return (
        <>
            <Article smallTitle={"portfolio-page.small-header"} contents={["portfolio-page.title.first", "portfolio-page.title.second", "portfolio-page.title.third", "portfolio-page.title.fourth", "portfolio-page.title.fiveth"]} header={"portfolio-page.header"} imageUrl={imageArticle_01} side={"left"} />
            <Projects title={["projects-title"]} header={"projects-header"} contents={contentProjects} />
        </>
    )
}

export default Portfolio;