import NavComp from "./NavComp";

export default function Nav({
  onNavClick,
  opFromParent,
}: {
  onNavClick: (value: string, cl: string) => void;
  opFromParent: number;
}) {
  const translateAndScale = (n1: number, n2: number = n1): string => {
    return `translate(${n1}%, ${n2}%) scale(2)`;
  };
  return (
    <nav>
      <ul className="nav-ul">
        <NavComp
          title="Bio"
          zoomValue={translateAndScale(-60, 40)}
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
        />
        <NavComp
          title="Art"
          zoomValue={translateAndScale(50, 30)}
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
        />
        <NavComp
          title="Events"
          zoomValue={translateAndScale(-80, -5)}
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
        />
        <NavComp
          zoomValue={translateAndScale(0, -70)}
          title="Contact"
          lnk="mailto:mob.earman.art@gmail.com"
          t
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
        />
      </ul>
    </nav>
  );
}
