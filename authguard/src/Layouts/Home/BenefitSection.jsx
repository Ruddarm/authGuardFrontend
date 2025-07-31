import React from "react";
import Style from "./HomeLayout.module.css";
import { SubTitle, TitleThree } from "../../Components/TitleHead";

function BenefitCard({ icon: LucidIcon, headlinetext, sublinetext , iconClass }) {
  return (
    <div className={Style.benefitCard}>
      <div className={Style.benefitInnerCard}>
        <div className={Style.cardTitile}>
          <LucidIcon className={`${iconClass} ${Style.lucidIcon} `} />
          <TitleThree title={headlinetext}></TitleThree>
        </div>
        <div className={Style.cardTitile}>
          <SubTitle
            style={{ fontSize: "0.9rem" }}
            title={sublinetext}
          ></SubTitle>
        </div>
      </div>
    </div>
  );
}
export default BenefitCard;
