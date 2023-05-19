import Text from "../atoms/Text";
import TextHeader from "../atoms/TextHeader";

import './Card.scss';

const Card = ({ contents }) => {

    return (
        <div className="container-card">
            {
                contents.map((content, id) => (
                    <div className="card-wrapper" key={id}>
                        <TextHeader header={content.header} />
                        <Text contents={[content.title]} />
                    </div>
                ))
            }
        </div>
    )
}

export default Card;