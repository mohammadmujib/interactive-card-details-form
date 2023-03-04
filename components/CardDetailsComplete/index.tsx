import React, { HTMLAttributes } from "react";
import styles from "./style.module.scss";
import Button from "components/Button";
import CompleteIcon from "/public/icons/icon-complete.svg";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  onContinue: () => void;
}

const CardDetailsComplete: React.FC<IProps> = ({ onContinue, ...props }) => {
  return (
    <div className={styles.cardDetailsComplete} {...props}>
      <CompleteIcon className={styles.icon} />
      <div className={styles.title}>Thank you!</div>
      <div className={styles.description}>
        Your Exam is Live now. Please click on the link below to join the exam.
      </div>

      <div className={styles.buttonContainer}>
        <Button type={"button"} onClick={onContinue}>
          Link
        </Button>
      </div>
    </div>
  );
};

export default CardDetailsComplete;
