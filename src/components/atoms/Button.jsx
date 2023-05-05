import { useTranslation } from 'react-i18next';

import './Button.scss';

const Button = ({ name, action }) => {
    const { t } = useTranslation();

    return (
        <div className="container-button">
            <button onClick={() => { action(); }}>{t(name)}</button>
        </div>
    )
}

export default Button;