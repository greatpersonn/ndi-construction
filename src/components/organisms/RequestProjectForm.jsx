import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import TextHeader from '../atoms/TextHeader';
import Modal from '../molecules/Modal';
import SubModal from '../molecules/SubModal';

import useInput from "../../hooks/useInput";

import './RequestProjectForm.scss';

const RequestProjectForm = ({ imageUrl, imageAlt, header, title, buttonNameDiscuss, buttonNameOffer }) => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const { t } = useTranslation();

    const [modalActive, setModalActive] = useState(false);
    const [subModalActive, setSubModalActive] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [isValid, setValidate] = useState(false);
    const [isForm, setFormAction] = useState('');

    const _userName = useInput('', true);
    const _userLastname = useInput('', true);
    const _userPhone = useInput('', true);
    const _userEmail = useInput('', true);

    const handlerSubmit = (event) => {
        event.preventDefault();
        switch (isForm) {
            case 'Discuss':

                if (_userEmail.value && _userPhone.value && isValid) {
                    emailjs.sendForm('service_3t429qi', '', formRef.current, 'sJewkiIckH64h4T-y')
                        .then(function (response) {
                            if (response.status == 200) {
                                navigate('/', { replace: true });
                                setModalActive(prev => !prev);
                                setModalContent(["", ""])
                            }
                        }, function (error) {
                            console.log('FAILED...', error);
                        });
                } else {
                    setSubModalActive(prev => !prev);
                    setModalContent(oldContent => [...oldContent, "request-project.submodal-error-header", "request-project.submodal-error-message"]);
                }

                break;

            case 'Offer':

                if (_userEmail.value && _userPhone.value && isValid) {
                    emailjs.sendForm('service_3t429qi', '', formRef.current, 'sJewkiIckH64h4T-y')
                        .then(function (response) {
                            if (response.status == 200) {
                                navigate('/', { replace: true });
                                setModalActive(prev => !prev);
                                setModalContent(["", ""])
                            }
                        }, function (error) {
                            console.log('FAILED...', error);
                        });
                } else {
                    setSubModalActive(prev => !prev);
                    setModalContent(oldContent => [...oldContent, "request-project.submodal-error-header", "request-project.submodal-error-message"]);
                }

            default:
                console.error('Can`t find method!');
                break;
        }
    }

    const handleValidate = () => {
        const regexNumber = /^[0-9\b+]+$/;
        if (_userPhone.value && regexNumber.test(_userPhone.value)) {
            setValidate(prev => !prev);
        }
    }

    return (
        <>
            <div className="container-request">
                <div className="request-image">
                    <Image src={imageUrl} alt={imageAlt} />
                </div>
                <div className="request-title">
                    <TextHeader header={header} />
                    <Text contents={title} />
                    <div className="title-buttons">
                        <Button name={buttonNameDiscuss} action={() => { setFormAction("Discuss"); setModalActive(prev => !prev); setModalContent(["request-project.modal-header-discuss", "request-project.modal-message-discuss"]) }} />
                        <Button name={buttonNameOffer} action={() => { setFormAction("Offer"); setModalActive(prev => !prev); setModalContent(["request-project.modal-header-offer", "request-project.modal-message-offer"]) }} />
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} header={modalContent[0]}>
                <Text contents={[modalContent[1]]} />
                <form onSubmit={handlerSubmit} ref={formRef}>
                    <Input name={'name'} type={"text"} inputId={"name-input"} holderTitle={t("name-holder")} symLength={128} inputObject={_userName} />
                    <Input name={'lastname'} type={"text"} inputId={"lastname-input"} holderTitle={t("lastname-holder")} symLength={128} inputObject={_userLastname} />
                    <Input name={'phone_client'} type={"text"} inputId={"phone-input"} holderTitle={t("phone-holder")} symLength={128} inputObject={_userPhone} />
                    <Input name={'email_client'} type={"email"} inputId={"email-input"} holderTitle={t("email-holder")} symLength={128} inputObject={_userEmail} />
                    <Button name={"request-project.button-name"} action={handleValidate} />
                </form>
            </Modal>
            <SubModal active={subModalActive} setActive={setSubModalActive} header={modalContent[2]}>
                <Text contents={[modalContent[3]]} />
            </SubModal>
        </>
    )
}

export default RequestProjectForm;