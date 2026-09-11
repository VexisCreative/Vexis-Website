interface LogoProps {
  className?: string;
}

const LOGO_SOURCE = '/VEXISLogo.png';

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
