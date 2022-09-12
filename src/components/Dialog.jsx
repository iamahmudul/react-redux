import FancyBorder from "./FancyBorder";

const Dialog = (props) => {
    return (
        <FancyBorder color={props.color || 'blue'}>
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

export default Dialog;