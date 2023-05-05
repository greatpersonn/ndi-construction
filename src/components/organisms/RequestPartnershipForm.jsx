import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import TextHeader from "../atoms/TextHeader";
import Image from '../atoms/Image';

import useInput from "../../hooks/useInput";

import './RequestPartnershipForm.scss';
import Modal from '../molecules/Modal';

const RequestPartnershipForm = ({ imageUrl, imageAlt }) => {
    const navigate = useNavigate();
    const formRef = useRef(null);

    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState([]);

    const _userName = useInput('', true);
    const _userLastname = useInput('', true);
    const _userPhone = useInput('', true);
    const _userEmail = useInput('', true);

    const { t } = useTranslation();

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (_userEmail.value && _userPhone.value) {
            emailjs.sendForm('service_3t429qi', 'template_fhku9ct', formRef.current, 'sJewkiIckH64h4T-y')
                .then(function (response) {
                    if (response.status == 200) {
                        navigate('/', { replace: true });
                        setModalActive(prev => !prev);
                        setModalContent(["request-partnership.modal-header", "request-partnership.modal-message"])
                    }
                }, function (error) {
                    console.log('FAILED...', error);
                });
        } else {
            setModalActive(prev => !prev);
            setModalContent(["request-partnership.error-header", "request-partnership.error-message"])
        }
    }

    return (
        <>
            <div className="container-partnership">
                <form onSubmit={handlerSubmit} ref={formRef}>
                    <TextHeader header={"request-partnership.header"} />
                    <Text contents={["request-partnership.title"]} />
                    <Input name={'name'} type={"text"} inputId={"name-input"} holderTitle={t("name-holder")} symLength={128} inputObject={_userName} />
                    <Input name={'lastname'} type={"text"} inputId={"lastname-input"} holderTitle={t("lastname-holder")} symLength={128} inputObject={_userLastname} />
                    <Input name={'phone_client'} type={"text"} inputId={"phone-input"} holderTitle={t("phone-holder")} symLength={128} inputObject={_userPhone} />
                    <Input name={'email_client'} type={"email"} inputId={"email-input"} holderTitle={t("email-holder")} symLength={128} inputObject={_userEmail} />

                    <Button name={"request-partnership.become-partner"} action={() => { console.log("Partnership form!") }} />
                </form>
                <div className="partnership-image">
                    <Image src={imageUrl} alt={imageAlt} />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} header={modalContent[0]} title={modalContent[1]} />
        </>
    )
}

export default RequestPartnershipForm;