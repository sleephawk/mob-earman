import Page from "./Page";

export default function Events({
  cb,
  visible,
}: {
  cb: () => void;
  visible: boolean;
}) {
  return (
    <Page
      cb={cb}
      h="Events"
      classN="eventsPage"
      visible={visible}
      content="Coming Soon 👀"
    />
  );
}
