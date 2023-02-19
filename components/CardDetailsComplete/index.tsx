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
        For Exam, link will be activated on 4th march at 7:00 pm
      </div>

      <div className={styles.buttonContainer}>
        <Button
          type={"button"}
          // onClick={onContinue}
        >
          Link
        </Button>
      </div>
    </div>
  );
};

export default CardDetailsComplete;
