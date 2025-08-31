import styles from "./LearnMoreBtn.module.css";
const LearnMoreBtn = (props) => {
  return (
    <div>
      <button className={styles.learnBtn}>
        <span>{props.content}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.18143 0.36398L3.18143 2.14589L10.3091 2.14589L-0.000549486 12.4555L1.27224 13.7283L11.5819 3.41868L11.5819 10.5463H13.3638L13.3638 0.36398L3.18143 0.36398Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default LearnMoreBtn;
