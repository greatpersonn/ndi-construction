import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import Switch from '../atoms/Switch';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <Logo />
                <Navigation />
                <Switch />
            </div>
        </header>
    )
}

export default Header;