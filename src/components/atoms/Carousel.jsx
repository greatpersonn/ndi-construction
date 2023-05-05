import React, { useEffect, useState, Children, cloneElement, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import "./Carousel.scss";

const Carousel = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const itemEl = useRef(null);

    const handleClickArrowLeft = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + itemEl.current.offsetWidth;
            return Math.min(newOffset, 0);
        })
    }

    const handleClickArrowRight = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - itemEl.current.offsetWidth;
            const maxOffset = -(itemEl.current.offsetWidth * (pages.length - 1))
            return Math.max(newOffset, maxOffset);
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        maxWidth: '100%',
                        minWidth: '1500px',
                    }
                })
            })
        );
    }, []);

    return (
        <div className="wrapper-carousel">
            <FontAwesomeIcon className="arrow arrow-left" icon={faAngleLeft} onClick={handleClickArrowLeft} />
            <div className="carousel-window" ref={itemEl}>
                <div className="all-pages-container" style={{ transform: `translateX(${offset}px)` }}>{pages}</div>
            </div>
            <FontAwesomeIcon className="arrow arrow-right" icon={faAngleRight} onClick={handleClickArrowRight} />
        </div>
    );
};

export default Carousel;
