import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import Switch from '../atoms/Switch';
import Menu from '../molecules/Menu';

import './Header.scss';

const Header = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
        <header>
            <div className="header-wrapper">
                <NavLink to={'/'}><Logo /></NavLink>
                <div className="wrapper-navigation">
                    <Navigation />
                    <Switch />
                    <FontAwesomeIcon icon={faBars} onClick={() => { setModalActive(prev => !prev); }} />
                </div>
            </div>
        </header>

        <Menu active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default Header;