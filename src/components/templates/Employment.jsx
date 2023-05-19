import Article from "../organisms/Article";
import RequestJobForm from '../organisms/RequestJobForm';

import imageArticle_01 from '../../assets/images/Work_Image_08.png';
import imageArticle_02 from '../../assets/images/Work_Image_04.png';
import imageJobform_01 from '../../assets/images/Work_Image_07.png';

const Employment = () => {
    return (
        <>
            <Article smallTitle={"employment-page.small-header"} contents={["employment-page.title.first", "employment-page.title.second", "employment-page.title.third"]} header={"employment-page.header"} imageUrl={imageArticle_01} side={"left"} />
            <Article contents={["employment-page.title.fourth", "employment-page.title.fiveth", "employment-page.title.sixth"]} imageUrl={imageArticle_02} side={"right"} />
            <RequestJobForm imageUrl={imageJobform_01} imageAlt={'Employment Image'} />
        </>
    )
}

export default Employment;