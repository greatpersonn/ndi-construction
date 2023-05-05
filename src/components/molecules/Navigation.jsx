import Link from '../atoms/Link';

import './navigation.scss';

const Navigation = () => {
    return (
        <nav className='wrapper-links'>
            <Link to={'/about'} name={'about-company'} />
            <Link to={'/services'} name={'services-company'} />
            <Link to={'/partfolio'} name={'partfolio-company'} />
            <Link to={'/partnership'} name={'partnership-company'} />
            <Link to={'/contacts'} name={'contacts-company'} />
            <Link to={'/joboffer'} name={'joboffer-company'} />
        </nav>
    )
}

export default Navigation;