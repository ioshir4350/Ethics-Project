const Button3 = (props) => {
    return (
        <button className="b3" style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button3