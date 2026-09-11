interface LogoProps {
  className?: string;
}

const BASE_URL = import.meta.env.BASE_URL;
const LOGO_SOURCE = `${BASE_URL}vexis-logo.png`;

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