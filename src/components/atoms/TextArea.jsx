import './TextArea.scss';

const TextArea = (props) => {
    return (
        <div className="container-textarea">
            <textarea id={props.areaId} placeholder={props.holderTitle} {...props.areaObject}></textarea>
        </div>
    )
}

export default TextArea;