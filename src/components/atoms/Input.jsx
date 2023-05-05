import './Input.scss';

const Input = (props) => {
    return (
        <div className="container-input">
            <input name={props.name} type={props.type} id={props.inputId} placeholder={props.holderTitle} maxLength={props.symLength} {...props.inputObject} />
        </div>
    );
}

export default Input;