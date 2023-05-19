import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import Switch from '../atoms/Switch';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <NavLink to={'/'}><Logo /></NavLink>
                <Navigation />
                <Switch />
            </div>
        </header>
    )
}

export default Header;