import { useId } from "react";
import { useLanguage } from "../context/LanguageContext";

export function BrandLogo({
  compact = false,
  prominent = false,
}: {
  compact?: boolean;
  prominent?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div className={`brand ${compact ? "compact" : ""} ${prominent ? "prominent" : ""}`}>
      <BrandMark className={`brand-emblem ${compact ? "compact" : ""} ${prominent ? "prominent" : ""}`} />
      <span className="brand-copy">
        <span className="brand-name">КОРТ РАЙДЕР</span>
        <span className="brand-subtitle">Адвокатське об'єднання</span>
      </span>
    </div>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" focusable="false">
        {/* Outer paths (Main styling) */}
        <path className="brand-mark-main" d="M 62 20 L 42 20 A 30 30 0 0 0 42 80 L 67 80 L 67 100" />
        <path className="brand-mark-main" d="M 77 20 L 87 20 A 20 20 0 0 1 87 60 L 67 60" />
        <path className="brand-mark-main" d="M 87 60 L 107 100" />

        {/* Inner paths (Accent styling - gold) */}
        <path className="brand-mark-accent" d="M 62 32 L 50 32 A 18 18 0 0 0 50 68 L 55 68 L 55 100" />
        <path className="brand-mark-accent" d="M 77 32 L 87 32 A 8 8 0 0 1 87 48 L 55 48" />
        <path className="brand-mark-accent" d="M 79 72 L 93 100" />
      </svg>
    </span>
  );
}

// Keeping these for other sections if needed, but removed the ugly monogram from header
export function SealMark({ className = "" }: { className?: string }) {
  const topId = useId();
  const bottomId = useId();

  return (
    <span className={`seal-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 128 128" focusable="false">
        <defs>
          <path id={`${topId}-top`} d="M 23 66 A 41 41 0 0 1 105 66" />
          <path id={`${bottomId}-bottom`} d="M 106 65 A 42 42 0 0 1 22 65" />
        </defs>
        <circle className="seal-outer" cx="64" cy="64" r="56" />
        <circle className="seal-inner" cx="64" cy="64" r="43" />
        <circle className="seal-dot" cx="26" cy="64" r="2.2" />
        <circle className="seal-dot" cx="102" cy="64" r="2.2" />
        <text className="seal-arc">
          <textPath href={`#${topId}-top`} startOffset="50%" textAnchor="middle">
            COURT RIDER
          </textPath>
        </text>
        <text className="seal-arc seal-arc-bottom">
          <textPath href={`#${bottomId}-bottom`} startOffset="50%" textAnchor="middle">
            LAW FIRM
          </textPath>
        </text>
        <text className="seal-initials" x="64" y="75" textAnchor="middle">
          CR
        </text>
      </svg>
    </span>
  );
}

export function SignatureMark({ className = "" }: { className?: string }) {
  return (
    <span className={`signature-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 250 90" focusable="false">
        <path d="M20 58 C48 42, 66 16, 72 21 C80 28, 50 72, 45 76 C65 63, 92 20, 101 18 C112 17, 88 69, 77 78 C101 63, 139 26, 148 31 C156 36, 139 56, 124 66 C153 51, 181 40, 218 43" />
        <path d="M110 62 C139 77, 180 78, 230 58" />
        <path d="M33 72 C70 84, 139 84, 210 72" />
      </svg>
    </span>
  );
}

export function KeyMark({ className = "" }: { className?: string }) {
  return (
    <span className={`key-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 160 60" focusable="false">
        <circle cx="130" cy="30" r="16" stroke="currentColor" strokeWidth="3" fill="none" />
        <line x1="25" y1="30" x2="114" y2="30" stroke="currentColor" strokeWidth="3" />
        <line x1="114" y1="21" x2="114" y2="39" stroke="currentColor" strokeWidth="3" />
        <path d="M 32 30 L 32 44 L 42 44 L 42 30 M 50 30 L 50 44 L 60 44 L 60 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

