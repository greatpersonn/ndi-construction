import RequestCallForm from '../organisms/RequestCallForm';
import Article from '../organisms/Article';
import SubHeader from '../organisms/SubHeader';
import Projects from '../organisms/Projects';
import RequestProjectForm from '../organisms/RequestProjectForm';
import Button from '../atoms/Button';
import FrequentlyAskedQuestion from '../organisms/FrequentlyAskedQuestion';
import RequestJobForm from '../organisms/RequestJobForm';

import './Main.scss';

/* Header Images */
import imageHeader_01 from '../../assets/images/Villa_Rose_01.png';
import imageHeader_02 from '../../assets/images/Villa_Rose_02.png';
import imageHeader_03 from '../../assets/images/Villa_Rose_03.png';

/* Article Images */
import imageArticle_01 from '../../assets/images/Work_Image_03.png';
import imageArticle_02 from '../../assets/images/Work_Image_01.png';

/* Work Examples Images */
import imageExample_01 from '../../assets/images/Work_Image_05.png';
import imageExample_02 from '../../assets/images/Work_Image_06.png';
import imageExample_03 from '../../assets/images/Work_Image_07.png';
import imageExample_04 from '../../assets/images/Work_Image_08.png';
import imageExample_05 from '../../assets/images/Work_Image_09.png';
import imageExample_06 from '../../assets/images/Work_Image_10.png';

/* Create Project Image */
import imageProject_01 from '../../assets/images/Work_Image_11.png';
import RequestPartnershipForm from '../organisms/RequestPartnershipForm';

/* Partnership Image */
import imagePartnership_01 from '../../assets/images/Work_Image_12.png';

const contentHeader = [
    { imageUrl: imageHeader_01, imageAlt: "Work Example", title: "about-arhitecture.first" },
    { imageUrl: imageHeader_02, imageAlt: "Work Example", title: "about-arhitecture.second" },
    { imageUrl: imageHeader_03, imageAlt: "Work Example", title: "about-arhitecture.third" },
]

const contentProjects = [
    { imageUrl: imageExample_01, imageAlt: "Work Example", title: "about-arhitecture.fourth" },
    { imageUrl: imageExample_02, imageAlt: "Work Example", title: "about-arhitecture.fiveth" },
    { imageUrl: imageExample_03, imageAlt: "Work Example", title: "about-arhitecture.sixth" },
    { imageUrl: imageExample_04, imageAlt: "Work Example", title: "about-arhitecture.seventh" },
    { imageUrl: imageExample_05, imageAlt: "Work Example", title: "about-arhitecture.eighth" },
    { imageUrl: imageExample_06, imageAlt: "Work Example", title: "about-arhitecture.nineth" },
]

const contentFAQ = [
    { header: "dropdown-header-text.first", text: "about-work-company-title.part_one" },
    { header: "dropdown-header-text.second", text: "about-work-company-title.part_one" },
    { header: "dropdown-header-text.third", text: "about-work-company-title.part_one" },
    { header: "dropdown-header-text.fourth", text: "about-work-company-title.part_one" },
    { header: "dropdown-header-text.fiveth", text: "about-work-company-title.part_one" }
]

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <SubHeader contents={contentHeader} />
                <RequestCallForm />
                <Article smallTitle={"about-company"} contents={["about-company-title.part_one", "about-company-title.part_two", "about-company-title.part_three", "about-company-title.part_fourth"]} header={"about-company-header"} imageUrl={imageArticle_01} side={"left"} />
                <Article contents={["about-work-company-title.part_one", "about-work-company-title.part_two", "about-work-company-title.part_three", "about-work-company-title.part_fourth"]} imageUrl={imageArticle_02} side={"right"} />
                <Projects title={["projects-title"]} header={"projects-header"} contents={contentProjects} />
                <div className="wrapper-button">
                    <Button name={"all-projects"} action={() => { console.log('Navigate to projects page!') }} />
                </div>
                <RequestProjectForm imageUrl={imageProject_01} imageAlt={"Image Project"} header={"request-project.header"} title={["request-project.title"]} buttonNameDiscuss={"request-project.discuss-project"} buttonNameOffer={"request-project.get-offer"} />
                <FrequentlyAskedQuestion contents={contentFAQ} />
                <RequestPartnershipForm imageUrl={imagePartnership_01} imageAlt={'Partnership Image'} />
                <RequestJobForm imageUrl={imagePartnership_01} imageAlt={'Employment Image'}/>
            </div>
        </main>
    )
}

export default Main;