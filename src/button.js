import PropTypes from "prop-types";
import styles from "./Button.module.css";


function Button({text, onclick}) {
    return <button className={styles.btn} onClick={onclick}>{text}</button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;