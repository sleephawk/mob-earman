import NavComp from "./NavComp";

export default function Nav({
  onNavClick,
  opFromParent,
  visible,
}: {
  onNavClick: (value: string, cl: string) => void;
  opFromParent: number;
  visible: boolean;
}) {
  const translateAndScale = (n1: number, n2: number = n1): string => {
    return `translate(${n1}%, ${n2}%) scale(1.5)`;
  };
  return (
    <nav>
      <ul className="nav-ul">
        <NavComp
          title="Bio"
          zoomValue={translateAndScale(-40, 40)}
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
        <NavComp
          title="Art"
          zoomValue={translateAndScale(30)}
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
        <NavComp
          title="Events"
          zoomValue={translateAndScale(-50, -5)}
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
        <NavComp
          zoomValue={translateAndScale(0, -50)}
          title="Contact"
          lnk="mailto:mob.earman.art@gmail.com"
          t
          onClickCbFromParent={onNavClick}
          opacity={opFromParent}
          visible={visible}
        />
      </ul>
    </nav>
  );
}
