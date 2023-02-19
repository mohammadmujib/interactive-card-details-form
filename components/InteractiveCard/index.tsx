import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CardDetails } from "types/card";
import CardLogo from "/public/img/card-logo.svg";

interface IProps {
  cardDetails: CardDetails;
}
type itemType = {
  cardholderName?: string;
  collegeName?: string;
  phoneNumber?: string;
  branch?: string;
  year?: string;
};
const InteractiveCard: React.FC<IProps> = ({ cardDetails }) => {
  const [item, setItem] = useState<any>(null);
  const { cardholderName, collegeName, phoneNumber, branch, year } =
    cardDetails;
  useEffect(() => {
    setItem(JSON.parse(localStorage.getItem("form") || "{}"));
  }, []);

  return (
    <div className={styles.interactiveCard}>
      {/* <div className={styles.cardBack}>
                <div className={styles.card}>
                    <img className={styles.image}
                        src={'/img/bg-card-back.png'}
                        alt={''}
                    />
                    <div className={styles.signatureBox}>
                        {collegeName}
                    </div>
                </div>
            </div> */}
      <div className={styles.cardFront}>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={"/img/bg-card-front.png"}
            alt={""}
          />

          <div className={styles.overlay}>
            <CardLogo className={styles.logo} role={undefined} />

            <div>
              <div style={{ marginBottom: "20px" }}>
                {item?.cardholderName ?? cardholderName}
              </div>

              <div className={styles.bottom}>
                <div className={styles.cardholderName}>
                  <span style={{ marginRight: "3px" }}>+91</span>
                  {item?.phoneNumber ?? phoneNumber}
                </div>
                <div className={styles.expireDate}>
                  {item?.branch ?? branch} / {item?.year ?? year} yr
                </div>
              </div>
              <div style={{ marginTop: "5px" }} className={styles.bottom}>
                <div className={styles.expireDate}>
                  {item?.collegeName ?? collegeName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
