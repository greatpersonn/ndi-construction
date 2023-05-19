import Text from '../atoms/Text';
import TextHeader from '../atoms/TextHeader';

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <TextHeader header={'footer.title-company'} />
                <Text contents={["footer.title-arhitecture"]} />
            </div>
        </footer>
    )
}

export default Footer;