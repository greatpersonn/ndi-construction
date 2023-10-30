import { useTranslation } from 'react-i18next';

import './Switch.scss';

const Switch = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="wrapper-switch">
            <span className='switch-language' onClick={() => { i18n.changeLanguage('ru'); }}>{t("ru")}</span>
            <span className='switch-language' onClick={() => { i18n.changeLanguage('lv'); }}>{t("lv")}</span>
            <span className='switch-language' onClick={() => { i18n.changeLanguage('en'); }}>{t("en")}</span>
        </div>
    )
}

export default Switch;