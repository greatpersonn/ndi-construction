import { useTranslation } from 'react-i18next';

import Image from '../atoms/Image';

import './SubHeader.scss';

const SubHeader = ({ contents }) => {
    const { t } = useTranslation();

    return (
        <div className="container-subheader">
            {
                contents.map((content, id) => (
                    <div key={id} className="subheader-wrapper">
                        <Image src={content.imageUrl} alt={content.imageAlt} />
                        {/* <span>{t(content.title)}</span> */}
                    </div>
                ))
            }
        </div>
    )
}

export default SubHeader;