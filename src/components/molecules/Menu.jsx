import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import Navigation from '../molecules/Navigation';

import './Menu.scss';

const Menu = ({ active, setActive }) => {
    const { t, i18n } = useTranslation();

    const handlerLanguages = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className={active ? "container-menu active" : "container-menu"} onClick={() => { setActive(false); }}>
            <div className={active ? "menu-wrapper active" : "menu-wrapper"} onClick={(e) => { e.stopPropagation(); }} >
                <div className="wrapper-header">
                    <FontAwesomeIcon icon={faClose} onClick={() => { setActive(false); }} />
                </div>
                <div className="wrapper-content">
                    <div className="content-setting">
                        <Navigation />
                        <div className="setting-languages">
                            <span className='switch-language' onClick={() => handlerLanguages("ru")}>{t("ru")}</span>
                            <span className='switch-language' onClick={() => handlerLanguages("lt")}>{t("lt")}</span>
                            <span className='switch-language' onClick={() => handlerLanguages("en")}>{t("en")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;