import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import TextHeader from '../atoms/TextHeader';

import './Modal.scss';

const Modal = ({ active, setActive, header, children }) => {
    return (
        <div className={active ? "container-modal active" : "container-modal"} onClick={() => { setActive(false); }}>
            <div className={active ? "modal-wrapper active" : "modal-wrapper"} onClick={(e) => { e.stopPropagation(); }} >
                <div className="wrapper-header">
                    <TextHeader header={header} />
                    <FontAwesomeIcon icon={faClose} onClick={() => { setActive(false); }} />
                </div>
                { children }
            </div>
        </div>
    )
}

export default Modal;