import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import TextHeader from '../atoms/TextHeader';

import './RequestProjectForm.scss';

const RequestProjectForm = ({ imageUrl, imageAlt, header, title, buttonNameDiscuss, buttonNameOffer }) => {
    return (
        <div className="container-request">
            <div className="request-image">
                <Image src={imageUrl} alt={imageAlt} />
            </div>
            <div className="request-title">
                <TextHeader header={header} />
                <Text contents={title} />
                <div className="title-buttons">
                    <Button name={buttonNameDiscuss} action={() => { console.log("Create 1") }} />
                    <Button name={buttonNameOffer} action={() => { console.log("Create 2") }} />
                </div>
            </div>
        </div>
    )
}

export default RequestProjectForm;