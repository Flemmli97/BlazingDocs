import React, { ReactNode } from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Props = {
  readonly icon: string;
  readonly to?: string;
  readonly href?: string;
  readonly label?: string;
  readonly size?: number;
  readonly position?: "left" | "right";
};

export default function IconLink({
  icon,
  to,
  href,
  label,
  size = 24,
}: Props): ReactNode {
  const linkContentProps = {
    children: (
      <>
        {
          <Icon
            className={styles.navbarIcon}
            icon={icon}
            width={size}
            height={size}
          />
        }
      </>
    ),
  };
  if (href) {
    return (
      <Link
        href={href}
        className={"navbar__item navbar__link"}
        aria-label={label}
        {...linkContentProps}
      />
    );
  }
  const toUrl = useBaseUrl(to);
  return (
    <Link
      to={toUrl}
      isNavLink
      className={"navbar__item navbar__link"}
      aria-label={label}
      {...linkContentProps}
    />
  );
}
