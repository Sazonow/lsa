import { MouseEvent, ReactNode } from "react";
import { AppHref, Navigate } from "../types";

export function LinkButton({
  href,
  navigate,
  children,
  className = "",
  ariaCurrent,
  ariaLabel,
}: {
  href: AppHref;
  navigate: Navigate;
  children: ReactNode;
  className?: string;
  ariaCurrent?: "page";
  ariaLabel?: string;
}) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      aria-current={ariaCurrent}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
