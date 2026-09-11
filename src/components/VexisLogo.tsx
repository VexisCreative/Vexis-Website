interface LogoProps {
  className?: string;
}

const BASE_URL = import.meta.env.BASE_URL;
const LOGO_SOURCE = `${BASE_URL}ChatGPT_Image_Sep_10,_2026,_07_53_50_PM.png`;

export function VexisLogo({ className = '' }: LogoProps) {
  return (
    <img
      src={LOGO_SOURCE}
      alt="VEXIS Creative"
      className={`object-contain ${className}`}
    />
  );
}

export function VexisEmblem({ className = '' }: LogoProps) {
  return (
    <img
      src={LOGO_SOURCE}
      alt="VEXIS Creative"
      className={`object-contain ${className}`}
    />
  );
}