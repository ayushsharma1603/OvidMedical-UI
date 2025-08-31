import styles from "./ContactUsBtn.module.css"

const ContactUsBtn = (props) => {
    return (
        <button className={`${styles.btn}`}>
            {props.content}
            {props.src && (
                <img src={props.src} alt="Contact Us" />
            )}
          </button>
    );
}

export default ContactUsBtn;