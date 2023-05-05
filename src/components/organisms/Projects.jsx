import { useTranslation } from 'react-i18next';

import Image from '../atoms/Image';
import TextHeader from '../atoms/TextHeader';
import Text from '../atoms/Text';

import './Projects.scss';

const Projects = ({ title, header, contents }) => {
    const { t } = useTranslation();

    return (
        <div className="container-projects">
            <div className="projects-title">
                <Text contents={[title]} />
                <TextHeader header={header} />
            </div>
            <div className="projects-examples">
                {
                    contents.map((content, id) => (
                        <div key={id} className="project-wrapper">
                            <div className='wrapper-example'>
                                <Image src={content.imageUrl} alt={content.imageAlt} />
                            </div>
                            {/* <span>{t(content.title)}</span> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;