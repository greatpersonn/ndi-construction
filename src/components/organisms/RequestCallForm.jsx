import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Text from '../atoms/Text';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Modal from '../molecules/Modal';

import useInput from '../../hooks/useInput';

import './RequestCallForm.scss';

const RequestCallForm = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [isValid, setValidate] = useState(false);

    const _userPhone = useInput('', true);

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (_userPhone.value && isValid) {
            emailjs.sendForm('service_3t429qi', '', formRef.current, 'sJewkiIckH64h4T-y')
                .then(function (response) {
                    if (response.status == 200) {
                        navigate('/', { replace: true });
                        setModalActive(true);
                        setModalContent(["modal-call-header", "modal-call-message"]);
                    }
                }, function (error) {
                    console.log('FAILED...', error);
                });
        } else {
            setModalActive(true);
            setModalContent(["error-call-header", "error-call-message"]);
        }
    }

    const handleValidate = () => {
        const regexNumber = /^[0-9\b+]+$/;
        if (_userPhone.value && regexNumber.test(_userPhone.value)) {
            setValidate(prev => !prev);
        } else {
            setModalActive(true);
            setModalContent(["error-call-header", "error-call-message"]);
        }
    }

    return (
        <>
            <div className="container-form">
                <form onSubmit={handlerSubmit} ref={formRef}>
                    <div className="form-title">
                        <div className="title-phone">
                            <a className="phone-link" href={`tel:${t("phone-number")}`}>{t("phone-number")}</a>
                            <span>{t("shedule-calling")}</span>
                        </div>
                        <a className="mail-link" href={`mailto:${t("email-company")}`}>{t("email-company")}</a>
                    </div>
                    <Input name={"phone_client"} type={"text"} inputId={"phone-input"} holderTitle={t("phone-holder")} symLength={15} inputObject={_userPhone} />
                    <Button name={"call-me"} action={handleValidate} />
                </form>
            </div>
            <Modal active={modalActive} setActive={setModalActive} header={modalContent[0]}>
                <Text contents={[modalContent[1]]} />
            </Modal>
        </>
    );
}

export default RequestCallForm;