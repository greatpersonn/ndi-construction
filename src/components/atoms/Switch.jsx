import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Switch.scss';

const Switch = () => {
    const [isSwitch, setSwitch] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (isSwitch) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ru')
        }
    }, [isSwitch]);

    return (
        <div className="wrapper-switch">
            <span className='switch-language'>{t("ru")}</span>
            <label className="switch">
                <input type="checkbox" onChange={() => setSwitch(prev => !prev)} />
                <span className="slider round"></span>
            </label>
            <span className='switch-language'>{t("en")}</span>
        </div>
    )
}

export default Switch;