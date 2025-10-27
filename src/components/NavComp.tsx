export default function NavComp({
  title,
  lnk,
  t,
  zoomValue,
  onClickCbFromParent,
  opacity,
}: {
  title: string;
  lnk?: string;
  t?: boolean;
  zoomValue: string;
  opacity: number;
  onClickCbFromParent: (value: string, cl: string) => void;
}) {
  const cl = title.toLowerCase();
  return (
    <li className={`nav-ul__link nav-ul__link--${cl}`}>
      <a
        onClick={(e) => {
          e.preventDefault(); // to present refresh, but not sure if it makes a dif
          onClickCbFromParent(zoomValue, cl);
        }}
        href={lnk}
        target={t ? "_blank" : undefined}
        rel={t ? "noopener noreffer" : undefined}
        style={{ opacity: opacity }}
      >
        {title}
      </a>
    </li>
  );
}
