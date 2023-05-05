import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Text from '../atoms/Text';

import './DropDown.scss';

const DropDown = ({ header, title }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="container-dropdown">
            <div className="dropdown-header" onClick={() => { setOpen(prev => !prev) }}>
                <FontAwesomeIcon style={isOpen && { transform: 'rotateZ(90deg)' }} icon={faAngleRight} />
                <Text contents={[header]} />
            </div>
            <div className={isOpen ? "active" : "dropdown-title"}>
                {
                    title.map((content, id) => (
                        <Text key={id} contents={[content]} />
                    ))
                }
            </div>
        </div>
    )
}

export default DropDown;