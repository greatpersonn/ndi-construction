import DropDown from "../atoms/DropDown";
import TextHeader from "../atoms/TextHeader";

import './FrequentlyAskedQuestion.scss';

const FrequentlyAskedQuestion = ({ contents }) => {
    return (
        <div className="container-faq">
            <TextHeader header={"faq-header"} />
            <div className="questions-wrapper">
                {
                    contents.map((content, id) => (
                        <DropDown key={id} header={content.header} title={[content.text]} />
                    ))
                }
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestion;