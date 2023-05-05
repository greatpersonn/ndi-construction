import { useTranslation } from 'react-i18next';

import './TextHeader.scss';

const TextHeader = ({ header }) => {
    const { t } = useTranslation();

    return (
        <div className="container-header">
            <span>{t(header)}</span>
        </div>
    )
}

export default TextHeader;