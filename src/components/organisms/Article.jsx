import { useTranslation } from 'react-i18next';

import Image from '../atoms/Image';
import Text from '../atoms/Text';
import TextHeader from '../atoms/TextHeader';

import './Article.scss';

const Article = ({ smallTitle, contents, header, imageUrl, side }) => {
    const { t } = useTranslation();

    return (
        <div className="container-article" style={side === 'left' ? { flexDirection: 'row' } : { flexDirection: "row-reverse" }}>
            <div className="article-title">
                { smallTitle !== undefined ? <span className='small-title'>{t(smallTitle)}</span> : null }
                { header !== undefined ? <TextHeader header={header} /> : null }
                <Text contents={contents} />
            </div>
            <Image src={imageUrl} alt={"Article"} />
        </div>
    )
}

export default Article;
