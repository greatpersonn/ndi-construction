import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import TextArea from '../atoms/TextArea';
import TextHeader from '../atoms/TextHeader';
import Text from '../atoms/Text';

import useInput from "../../hooks/useInput";

import './RequestJobForm.scss';

const RequestJobForm = ({ imageUrl, imageAlt }) => {
    const [file, setFile] = useState(undefined);
    
    const formRef = useRef(null);
    const navigate = useNavigate();

    const _userPhone = useInput('', true);
    const _userEmail = useInput('', true);
    const _about = useInput('', true);

    const { t } = useTranslation();

    const handlerSubmit = (event) => {
        event.preventDefault();

        // service gmail
        // template for job
        if (_userPhone.value) {
            emailjs.sendForm('service_3t429qi', '', formRef.current, 'sJewkiIckH64h4T-y')
                .then(function (response) {
                    if (response.status == 200) {
                        navigate('/', { replace: true });
                    }
                }, function (error) {
                    console.log('FAILED...', error);
                });
        } else {
            return console.error('Email and phone is not defined!')
        }
    }

    return (
        <div className="container-joboffer">
            <div className="joboffer-image">
                <Image src={imageUrl} alt={imageAlt} />
            </div>
            <div className="joboffer-form">
                <form onSubmit={handlerSubmit} ref={formRef}>
                    <TextHeader header={"request-employment.header"} />
                    <Text contents={["request-employment.title"]} />
                    <Input type={"text"} inputId={"phone-input"} holderTitle={t("phone-holder")} symLength={15} inputObject={_userPhone} />
                    <Input type={"email"} inputId={"email-input"} holderTitle={t("email-holder")} symLength={15} inputObject={_userEmail} />
                    <TextArea areaId={"email-input"} holderTitle={t("textarea-holder")} areaObject={_about} />
                    <div className="file-wrapper">
                        <label className="custom-file-upload">
                            <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
                            {file == undefined ? <span>{t("request-employment.file-upload")}</span> : <span>{file.name}</span>}
                            <FontAwesomeIcon icon={faFile} />
                        </label>
                    </div>
                    <Button name={"Ok"} action={() => { console.log("Hello, world!") }} />
                </form>
            </div>
        </div>
    )
}

export default RequestJobForm;