import { useInView } from 'react-intersection-observer';

import './Image.scss';

const Image = ({ src, alt }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })

    return (
        <div ref={ref} className="wrapper-carousel-item">
            {
                inView ? <img src={src} alt={alt} /> : <div>Loading...</div>
            }
        </div>
    )
}

export default Image;