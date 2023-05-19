import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Article from "../organisms/Article";
import Card from "../organisms/Card";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import Text from "../atoms/Text";
import Input from "../atoms/Input";

import useInput from "../../hooks/useInput";

import imageArticle_01 from '../../assets/images/Work_Image_06.png';
import imageArticle_02 from '../../assets/images/Work_Image_04.png';

const contentServices = [
    { header: 'services-page.service-first.header', title: 'services-page.service-first.title' },
    { header: 'services-page.service-second.header', title: 'services-page.service-second.title' },
    { header: 'services-page.service-third.header', title: 'services-page.service-third.title' },
    { header: 'services-page.service-fourth.header', title: 'services-page.service-fourth.title' },
    { header: 'services-page.service-fiveth.header', title: 'services-page.service-fiveth.title' },
]

const Services = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const { t } = useTranslation();

    const [modalActive, setModalActive] = useState(false);
    const [isValid, setValidate] = useState(false);

    const _userName = useInput('', true);
    const _userLastname = useInput('', true);
    const _userPhone = useInput('', true);
    const _userEmail = useInput('', true);

    const handlerSubmit = (event) => {
        event.preventDefault();
        /* create logic */
    }

    const handleValidate = () => {
        const regexNumber = /^[0-9\b+]+$/;
        if (_userPhone.value && regexNumber.test(_userPhone.value)) {
            setValidate(prev => !prev);
        }
    }

    return (
        <>
            <Article contents={["services-page.title.first", "services-page.title.second", "services-page.title.third", "services-page.title.fourth"]} header={"services-page.header"} imageUrl={imageArticle_01} side={"left"} />
            <Card contents={contentServices} />
            <Article contents={["services-page.sub-title.first", "services-page.sub-title.second", "services-page.sub-title.third"]} imageUrl={imageArticle_02} side={"right"} />
            <div className="service-wrapper-button">
                <Button name={"services-page.button-name"} action={() => setModalActive(true)} />
            </div>
            <Modal active={modalActive} setActive={setModalActive} header={"request-project.modal-header-discuss"}>
                <Text contents={["request-project.modal-message-discuss"]} />
                <form onSubmit={handlerSubmit} ref={formRef}>
                    <Input name={'name'} type={"text"} inputId={"name-input"} holderTitle={t("name-holder")} symLength={128} inputObject={_userName} />
                    <Input name={'lastname'} type={"text"} inputId={"lastname-input"} holderTitle={t("lastname-holder")} symLength={128} inputObject={_userLastname} />
                    <Input name={'phone_client'} type={"text"} inputId={"phone-input"} holderTitle={t("phone-holder")} symLength={128} inputObject={_userPhone} />
                    <Input name={'email_client'} type={"email"} inputId={"email-input"} holderTitle={t("email-holder")} symLength={128} inputObject={_userEmail} />
                    <Button name={"request-project.button-name"} action={handleValidate} />
                </form>
            </Modal>
        </>
    )
}

export default Services;