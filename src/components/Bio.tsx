import Page from "./Page";

export default function Bio({
  cb,
  visible,
}: {
  cb: () => void;
  visible: boolean;
}) {
  return (
    <Page
      cb={cb}
      h="Bio"
      classN="bioPage"
      visible={visible}
      content={
        <>
          <p>
            I once heard someone at a Buddhist commune call their lifestyle
            'Homeless with Style'. Id like to think I was the same, but really,
            I’m high functioning chaotic as seen on a sofa near you.
          </p>
          <p>
            These strange little plays of perspective, miasmic geometry, primary
            colours and google-y eyes are my therapy whilst I attempt to sort it
            all out. I make them when I'm too stressed to look at big list on my
            phone. It works.
          </p>{" "}
          <p>
            Oh and I’m Mob Earman, don’t ask. I know where the name comes from,
            but it won’t make any sense to explain. Just follow the blobs and
            lines. It’s blobs and lines all the way down.
          </p>
        </>
      }
    />
  );
}
