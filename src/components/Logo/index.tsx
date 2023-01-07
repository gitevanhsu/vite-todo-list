import LogoLg from "/logo_lg.png";
import LogoSm from "/logo_lg.png";

export default function Logo({ isBig }: { isBig: boolean }) {
  return (
    <div className={isBig ? "" : "h-full"}>
      <img src={isBig ? LogoLg : LogoSm} alt="Logo" className="h-full" />
    </div>
  );
}
