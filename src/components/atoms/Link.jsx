import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 
import './Link.scss';

const Link = ({ to, name }) => {
    const { t } = useTranslation();

    return (
        <NavLink to={to}>{t(`${name}`)}</NavLink>
    )
}

export default Link;