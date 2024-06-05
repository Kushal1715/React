import Tabs from "./Tabs";

export default function CustomTab() {
  const tab = [
    {
      label: "Tab 1",
      content: "This is tab 1",
    },
    {
      label: "Tab 2",
      content: "This is tab 2",
    },
    {
      label: "Tab 3",
      content: "This is tab 3",
    },
  ];
  return (
    <div>
      <Tabs contents={tab} />
    </div>
  );
}
