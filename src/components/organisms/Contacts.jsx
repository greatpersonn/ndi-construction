import Text from "../atoms/Text";
import TextHeader from "../atoms/TextHeader";

import './Contacts.scss';

const Contacts = ({ header, phoneTitle, emailTitle, title }) => {
    return (
        <div className="container-contacts">
            <TextHeader header={header} />
            <div className="contacts-wrapper">
                <div className="wrapper-phone">
                    <Text contents={phoneTitle} />
                </div>
                <div className="wrapper-email">
                    <Text contents={emailTitle} />
                </div>
            </div>
            <div className="contacts-title">
                <Text contents={title} />
            </div>
        </div>
    )
}

export default Contacts;