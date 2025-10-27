export default function Template({
  classN,
  heading,
  content,
  buttonText,
  op = 1,
  pos = "relative",
  display = "flex",
  onClick,
}: {
  classN?: string;
  heading?: string;
  content: React.ReactNode;
  buttonText?: string;
  op?: number;
  display?: string;
  pos?: React.CSSProperties["position"];
  onClick?: () => void;
}) {
  return (
    <div
      style={{
        display: display,
        flexDirection: "column",
        textAlign: "left",
        opacity: op,
        position: pos,
      }}
      className={`${classN} component`}
    >
      {heading && <h1>{heading}</h1>}
      {content}
      {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
}
