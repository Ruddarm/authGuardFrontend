import React from "react";
import Style from "./HomePage.module.css";
import { SubTitle, TitleThree } from "../../Components/TitleHead";
import Icon from "../../Components/Icon";
import { Shield, Code, Users, Zap, Lock, Globe, Sheet } from "lucide-react";
import BenefitCard from "../../Layouts/Home/BenefitSection";
import HeroSectionLayout from "../../Layouts/Home/HeroSectionLayout";
import IntegrationSection from "../../Layouts/Home/IntegrationSection";
import Footer from "../../Layouts/Home/FooterLayout";

const userBenefits = [
  {
    icon: Users,
    title: "One Account, Everywhere",
    description:
      "Users sign in once and access all your integrated applications seamlessly.",
  },
  {
    icon: Lock,
    title: "Enhanced Privacy Control",
    description:
      "Granular privacy settings with transparent data usage and consent management.",
  },
  {
    icon: Globe,
    title: "Universal Access",
    description:
      "Cross-platform compatibility ensuring users can authenticate from any device.",
  },
];
function HomePage() {
  const clientBenefits = [
    {
      icon: Code,
      title: "Developer-First Integration",
      description:
        "Simple SDKs and APIs that get you up and running in minutes, not days.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "SOC 2 compliant with multi-factor authentication and advanced threat protection.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Sub-100ms authentication with global CDN and optimized infrastructure.",
    },
  ];
  return (
    <div className={Style.homePageContainer}>
      <HeroSectionLayout></HeroSectionLayout>
      <div className={Style.benefitContainer}>
        <div className={Style.benefitContainerTitile}>
          <TitleThree
            className={Style.benefitTitle}
            title={"Benefit for Everyone"}
          ></TitleThree>
          <SubTitle
            title={
              "      AuthGuard OAuth2 provider creates value for both developers building" +
              "applications and users accessing them For"
            }
          ></SubTitle>
        </div>
        <div className={Style.innerBenefitContainer}>
          <div className={Style.devBenefit}>
            {clientBenefits.map((data, index) => (
              <BenefitCard
                key={index}
                icon={data.icon}
                sublinetext={data.description}
                headlinetext={data.title}
              ></BenefitCard>
            ))}
          </div>
          <div className={Style.userBenefit}>
            {userBenefits.map((data, index) => (
              <BenefitCard
                iconClass={Style.userIconClass}
                key={index}
                icon={data.icon}
                sublinetext={data.description}
                headlinetext={data.title}
              ></BenefitCard>
            ))}
          </div>
        </div>
      </div>
      <div className={Style.integrationContainer}>
        <IntegrationSection></IntegrationSection>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
