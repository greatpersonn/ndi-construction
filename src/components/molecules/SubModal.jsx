import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import TextHeader from '../atoms/TextHeader';

import './SubModal.scss';

const SubModal = ({ active, setActive, header, children }) => {
    return (
        <div className={active ? "container-submodal active" : "container-submodal"} onClick={() => { setActive(false); }}>
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

export default SubModal;