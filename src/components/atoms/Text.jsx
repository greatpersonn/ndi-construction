import { useTranslation } from 'react-i18next';

import './Text.scss';

const Text = ({ contents }) => {
    const { t } = useTranslation();

    return (
        <div className="container-text">
            {
                contents.map((text, id) => (
                    <div key={id} className="text-wrapper">
                        <span>{t(text)}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Text;