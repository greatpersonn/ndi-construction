import Article from "../organisms/Article";
import RequestPartnershipForm from "../organisms/RequestPartnershipForm";

import imageArticle_01 from '../../assets/images/Work_Image_15.png';
import imageArticle_02 from '../../assets/images/Work_Image_13.png';
import imagePartnership_01 from '../../assets/images/Work_Image_12.png';

const Partnership = () => {
    return (
        <>
            <Article smallTitle={"partnership-page.small-header"} contents={["partnership-page.title.first", "partnership-page.title.second", "partnership-page.title.third", "partnership-page.title.fourth"]} header={"partnership-page.header"} imageUrl={imageArticle_01} side={"left"} />
            <Article contents={["partnership-page.title.fiveth", "partnership-page.title.sixth", "partnership-page.title.seventh"]} imageUrl={imageArticle_02} side={"right"} />
            <RequestPartnershipForm imageUrl={imagePartnership_01} imageAlt={'Partnership Image'} />
        </>
    )
}

export default Partnership;