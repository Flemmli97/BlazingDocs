import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

type FeatureItem = {
  title: string;
  icon: string;
  className?: string;
  size?: number;
  link?: string,
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "CurseForge",
    icon: "simple-icons:curseforge",
    className: "curseforge",
    link: "https://www.curseforge.com/members/flemmli97/projects",
    description: <></>,
  },
  {
    title: "Modrinth",
    icon: "simple-icons:modrinth",
    className: "modrinth",
    link: "https://modrinth.com/user/flemmli97",
    description: <></>,
  },
];

function Feature({
  title,
  icon,
  className = "",
  link,
  size = 128,
  description,
}: FeatureItem) {
  return (
    <a href={link} className={clsx(`col col--4 ${styles.feature}`)}>
      <div className="text--center">
        <Icon
          className={`${styles.featureIcon} ${styles[className]}`}
          icon={icon}
          width={size}
          height={size}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx(`row ${styles.row}`)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
