import { Route, Routes } from 'react-router-dom';

import General from '../templates/General';
import About from '../templates/About';
import Services from '../templates/Services';
import Portfolio from '../templates/Portfolio';
import Partnership from '../templates/Partnership';
import Contacts from '../templates/Contacts';
import Employment from '../templates/Employment';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <Routes>
                    <Route path='/' element={<General />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/partnership' element={<Partnership />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/employment' element={<Employment />} />
                </Routes>
            </div>
        </main>
    )
}

export default Main;